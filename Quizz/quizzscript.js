

import { malshab } from "./malshab.js";
export const newMalshab = { ...malshab }
const ageOptions = document.querySelectorAll('#age-container button');
const ageContainer = document.getElementById('age-container')
const heightOptions = document.querySelectorAll('#height-container button');
const heightContainer = document.getElementById('height-container')
const weightOptions = document.querySelectorAll('#weight-container button')
const weightContainer = document.getElementById('weight-container')
const backgroundOptions = document.querySelectorAll('#background-container button')
const backgroundContainer = document.getElementById('background-container')
const workoutOptions = document.querySelectorAll('#workout-container button');
const workoutContainer = document.getElementById('workout-container')
const profileOptions = document.querySelectorAll('#profile-container button')
const profileContainer = document.getElementById('profile-container')
const frequencyOptions = document.querySelectorAll('#frequency-container button')
const frequencyContainer = document.getElementById('frequency-container')
const gymAccessOptions = document.querySelectorAll('#gym-access-container button')
const gymAccessContainer = document.getElementById('gym-access-container')
const unitOptions = document.querySelectorAll('#unit-container button')
const unitContainer = document.getElementById('unit-container')



ageOptions.forEach(option => {
    option.addEventListener('click', event => {
        newMalshab.Age = event.target.textContent;
        console.log(newMalshab)
        ageContainer.style.display = 'none';
        heightContainer.style.display = 'flex'



    })
})



heightOptions.forEach(option => {
    option.addEventListener('click', heightEvent => {
        newMalshab.Height = heightEvent.target.textContent;
        console.log(newMalshab)
        heightContainer.style.display = 'none'
        weightContainer.style.display = 'flex'

    })
})

weightOptions.forEach(options => {
    options.addEventListener('click', weightEvent => {
        newMalshab.Weight = weightEvent.target.textContent;
        console.log(newMalshab)
        weightContainer.style.display = 'none'
        backgroundContainer.style.display = 'flex'
    })
})

backgroundOptions.forEach(options => {
    options.addEventListener('click', backgroundEvent => {
        newMalshab.Background = backgroundEvent.target.textContent;
        console.log(newMalshab);
        backgroundContainer.style.display = 'none'
        workoutContainer.style.display = 'flex';
    })
})

workoutOptions.forEach(options => {
    options.addEventListener('click', workoutEvent => {
        newMalshab.Workout = workoutEvent.target.textContent;
        console.log(newMalshab);
        workoutContainer.style.display = 'none'
        profileContainer.style.display = 'flex'
    })
})

profileOptions.forEach(options => {
    options.addEventListener('click', profileEvent => {
        newMalshab.Profile = profileEvent.target.textContent;
        console.log(newMalshab);
        profileContainer.style.display = 'none'
        frequencyContainer.style.display = 'flex'

    })
})

frequencyOptions.forEach(options => {
    options.addEventListener('click', (frequencyEvent) => {
        newMalshab.Frequency = frequencyEvent.target.textContent;
        console.log(newMalshab)
        frequencyContainer.style.display = 'none'
        gymAccessContainer.style.display = 'flex'

    })
})


gymAccessOptions.forEach(options => {
    options.addEventListener('click', (gymAccessEvent) => {
        newMalshab.Gym_access = gymAccessEvent.target.textContent
        gymAccessContainer.style.display = 'none'
        unitContainer.style.display = 'flex';
        console.log(newMalshab)

    })
})

unitOptions.forEach(options => {
    options.addEventListener('click', (unitEvent) => {
        newMalshab.Unit = unitEvent.target.textContent
        unitContainer.style.display = 'flex';
        console.log(newMalshab)
    })
})





