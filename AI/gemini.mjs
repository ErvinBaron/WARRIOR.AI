import dotenv from "dotenv";
import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";

dotenv.config();

// test variables:
const userData = {
  age: 18,
  height: 176,
  weight: 87,
  injury: "knee injury 3 years ago",
  CurrentActivity: "basketball 1 time a week for 2 hours",
  wantTo: "669",
  eatingHabits: "alot of carbs",
  timeLeft: "2 days",
  profile: 42,
  haveAccess: "gym",
};

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function generateResponse(user) {
  try {
    const prompt = `your task is to provide the asked info into a javascript object, usable out-of-the-box 
    as an element in code. use clear and concise keys, suchs as days of the week and topics. it should be 
    include the keys: age, height, weight, Injuries, Current-activity, unit, eating-habit, free-time,army-profile,
    Gym-access,excercise-routine. open and close the answer with {} and add no other element before or after. user under score "_" instead of "-".
    I am a potential israeli army recruit, assume when talking that when i say profile
     i mean it as a health classification in the army. and that i live in israel. our work week begin 
     in sunday and ends in saturday, saturday is a rest day and no activity is allowed. assume i am a
     student, my school begine around 8am and ends in around 2pm.
     incude a short summery about the requirements and specific mental and physical challenges that the ${user.wantTo} entails
i am ${user.age}, my height is ${user.height} and my weight is ${user.weight} kg. my goal is to reach the unit "${user.wantTo}"
 my current workouts are ${user.CurrentActivity}. i have time for ${user.timeLeft} more days for working out. my army profile is ${user.profile}
  is ${user.wantTo}, and i have access to a ${user.haveAccess}. prepare a workout routine centered around prospering in my chosen
   unit, center it around the most important physical aspect of the rule. make sure the workouts provided are as explained as possible
    ensure that in the response you have the following structure: excercise_routine:<day of the week>:decription,activity, `;
    const result = await model.generateContent(prompt);
    // console.log(result.response.text());
    return result.response.text();
  } catch (error) {
    console.error(error);
  }
}
const button = document.getElementById("generatebutton");
const genAIdiv = document.getElementById("genAIresponse");


button.addEventListener("click", async function () {
  const response = await generateResponse(userData);
  console.log(response.replace("javascript", '').replace(" const", ""))
  let dataobject = response.replace("javascript", '').replace(" const", "")
  let Userobject = await JSON.parse(dataobject);
  const responsedata = {
    age: Userobject.age,
    weight: Userobject.weight,
    height: Userobject.height,
    unit:Userobject.unit,
    injuries: Userobject.injuries,
    currentActivity: Userobject.Current_activity,
    routine: Userobject.excercise_routine,
    eatingHabits: Userobject.eating_habit,
    freeTime: Userobject.free_time,
    profile: Userobject.army_profile,
    gymAccess: Userobject.Gym_access,
  }
  console.log(responsedata)
  // .routine.Friday.description


  genAIdiv.textContent = "your AI generated excercis for friday are:" + responsedata.routine.Friday.description;

});
// generateResponse(userData);
// run this:
//  node --env-file=.env.local gemini.js