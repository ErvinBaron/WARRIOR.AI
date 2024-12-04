// import "dotenv/config.js";
import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";
// import { newMalshab } from "../Quizz/quizzscript";

// test variables:

const userData = {
  Age: 18,
  Height: 176,
  Weight: 87,
  Background: "basketball 1 time a week for 2 hours",
  Unit: "669",
  Frequency: "3 days",
  Profile: 42,
  Gym_access: "gym",
};
localStorage.setItem("JSON1",JSON.stringify(userData))
console.log(JSON.parse(localStorage.getItem("JSON1")))

const genAI = new GoogleGenerativeAI("AIzaSyAWqTZzqkPG9VlZvn5AwS2aeu4KoPTGLPk");
const generationConfig = {	
    temperature: 0.9,
	topK: 1,
	topP: 1,
	maxOutputTokens: 2048,
	response_mime_type:'application/json'
};
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function generateResponse(user) {
  try {
    const prompt = `your task is to provide the asked info into a javascript object, usable out-of-the-box as an element in code.
     use clear and concise keys, suchs as days of the week and topics. 
     open and close the answer with {} and add no other element or letter before or after.
     use under score "_" instead of "-". make sure all the object keys are of the following:"age","height,"weight","unit"
     I am a potential israeli army recruit,  and that i live in israel. saturday is a rest day and no activity is allowed.
     assume i am a student, my school begine around 8am and ends in around 2pm.
     incude a short summery about the requirements and specific mental and physical challenges that the ${user.Unit} entails.
    i am ${user.Age}, my height is ${user.Height} and my weight is ${user.Weight} kg. my goal is to reach the unit "${user.Unit}"
    my exercise background is ${user.Background}, and i have ${user.Frequency} time to exercise. i ${user.Gym_access} to the gym.
    my army profile is ${user.Profile}. prepare a workout routine centered around prospering in my chosen unit, center it around the most
     important physical aspect of the rule. make sure the workouts provided are as explained as possible
     ensure that in the response you have the following structure: excercise_routine:<day of the week>:decription,activity. make sure every day is referenced even if it is a rest day. `;
    const result = await model.generateContent(prompt,generationConfig);
    console.log(result.response.text());
    return result.response.text();
  } catch (error) {
    console.error(error);
  }
}
const button = document.getElementById("button");
const genAIdiv = document.getElementById("result");

button.addEventListener("click", async function () {
  const response = await generateResponse(userData);
  console.log(response.replace("javascript", "").replace(" const", "").replaceAll("`",""));
  let dataobject = response.replace("javascript", "").replace(" const", "").replaceAll("`","");

  let Userobject = await JSON.parse(dataobject);
  const responsedata = {
    age: Userobject.personal_info.age,
    weight: Userobject.personal_info.weight,
    height: Userobject.personal_info.height,
    unit: Userobject.unit,
    injuries: Userobject.injuries,
    currentActivity: Userobject.exercise_background,
    routine: Userobject.exercise_routine,
    eatingHabits: Userobject.eating_habit,
    freeTime: Userobject.free_time,
    profile: Userobject.army_profile,
    gymAccess: Userobject.Gym_access,
  };
  console.log(responsedata);
})
  // .routine.Friday.description

//   genAIdiv.textContent =
//     "your AI generated excercis for friday are:" +
//     responsedata.routine.friday;
// });
// // generateResponse(userData);
// run this:
//  node --env-file=.env.local gemini.js
