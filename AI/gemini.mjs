// import "dotenv/config.js";
import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";
// import { newMalshab } from "../Quizz/quizzscript";

// test variables:

const userData = {
  Age: 18,
  Height: 176,
  Weight: 87,
  Background: "basketball 1 time a week for 2 hours",
  Unit: "Givati",
  Frequency: "3 days",
  Profile: 42,
  Gym_access: "gym",
};
localStorage.setItem("JSON1", JSON.stringify(userData));
console.log(JSON.parse(localStorage.getItem("JSON1")));
localStorage.setItem("JSON1", JSON.stringify(userData));
console.log(JSON.parse(localStorage.getItem("JSON1")));

const genAI = new GoogleGenerativeAI("AIzaSyAWqTZzqkPG9VlZvn5AwS2aeu4KoPTGLPk");
const generationConfig = {
  temperature: 2,
  topK: 1,
  topP: 1,
  maxOutputTokens: 2048,
  response_mime_type: "application/json",
};
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function generateResponse(user) {
  try {
    const prompt = `your task is to provide the asked info into a javascript object, usable out-of-the-box as an element in code.
     use clear and concise keys, suchs as days of the week and topics. 
     open and close the answer with {} and add no other element or letter before or after.
     use under score "_" instead of "-". make sure all the object keys are of the following:
     "age","height,"weight","unit","profile","unitSummery", "currentActivity", "routine". the routine key should always have "activity" and "description".
     I am a potential israeli army recruit,  and that i live in israel. saturday is a rest day and no activity is allowed.
     assume i am a student, my school begine around 8am and ends in around 2pm.
     incude a short summery about the requirements and specific mental and physical challenges that the ${user.Unit} entails.
    i am ${user.Age}, my height is ${user.Height} and my weight is ${user.Weight} kg. my goal is to reach the unit "${user.Unit}"
    my exercise background is ${user.Background}, and i have ${user.Frequency} time to exercise. i ${user.Gym_access} to the gym.
    my army profile is ${user.Profile}. prepare a workout routine centered around prospering in my chosen unit, center it around the most
     important physical aspect of the rule. make sure the workouts provided are as explained as possible.
     ensure that in the response you have the following structure: excercise_routine:<day of the week>:decription,activity. make sure every day is referenced even if it is a rest day. `;
    const result = await model.generateContent(prompt, generationConfig);

    console.log(result.response.text());
    return result.response.text();
  } catch (error) {
    console.error(error);
  }
}
const button = document.getElementById("generatebutton");
const unitsummerydiv = document.getElementById("unitDescription");
const exercisediv = document.getElementById("unitexercise");

button.addEventListener("click", async function () {
  const response = await generateResponse(userData);
  console.log(
    response.replace("javascript", "").replace(" const", "").replaceAll("`", "")
  );
  let dataobject = response
    .replace("javascript", "")
    .replace(" const", "")
    .replaceAll("`", "");
  console.log(
    response.replace("javascript", "").replace(" const", "").replaceAll("`", "")
  );

  let Userobject = await JSON.parse(dataobject);
  const responsedata = {
    age: Userobject.age,
    weight: Userobject.weight,
    height: Userobject.height,
    unit: Userobject.unit,
    currentActivity: Userobject.exercise_background,
    routine: Userobject.exercise_routine,
    profile: Userobject.profile,
    unitSummery: Userobject.unitSummary,
  };

  console.log(Userobject);
  unitsummerydiv.innerHTML = `${Userobject.unitSummery}`;
  exercisediv.textContent = `${Userobject.routine.sunday.description}`;
});
// .routine.Friday.description

// // generateResponse(userData);
// run this:
//  node --env-file=.env.local gemini.js

const unitArray = {
  Golani: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/S32fPU0yq6M?si=VmJqstq7c-NqjP-J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  Sayeret_Golani: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/S32fPU0yq6M?si=VmJqstq7c-NqjP-J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  Sayeret_Givati: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/9VDsks7hO2I?si=majAgp8hVjU_CrAV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  Givati: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/9VDsks7hO2I?si=majAgp8hVjU_CrAV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  Shayetet13: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/r9hCa2wg0c8?si=SdJ_KFHn4RubXVJo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  Duvdevan: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Hpp8iBdzrJw?si=AOrGvTaOpXdhORhz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  Maglan: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/aeoAg84FL7A?si=HmL3-cssWYP8x87T" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  Pilot: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/MZimWcaYPwY?si=vQQKjo7C0L6hBsic" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  Oketz: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/x9QBzaOCeQo?si=Nj17omZT505md3GQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  Egoz: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/jhio6VHP3U0?si=Zm6eLt2vzQ1SltbF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  Sayeret_Nahal: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/G0zF4CG2ENo?si=o0XofMsT0Baupsuf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  Kfir: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/4x670n72k14?si=9twCIDAxKah2Ly11" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  Tzanhanim: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/-wOJeT8l6Ww?si=JrS249u_Atnxl5sJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  Nahal: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/G0zF4CG2ENo?si=o0XofMsT0Baupsuf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  Sayeret_matkal: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/6hFHRoKkNII?si=ktBcgXOU02OZLkOY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
};
const videoBox = document.getElementById("unitVideo");
let found = false;

for (let key in unitArray) {
  if (key == userData.Unit) {
    videoBox.innerHTML = unitArray[key];
    found = true;
    break;
  }
}

if (!found) {
  videoBox.innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/yGHp8u7iE4s?si=neg1cnhiW8KOzkxg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
}
