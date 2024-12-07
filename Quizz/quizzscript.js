import { malshab } from "./malshab.js";
const newMalshab = { ...malshab };
const ageOptions = document.querySelectorAll("#age-container button");
const ageContainer = document.getElementById("age-container");
const heightOptions = document.querySelectorAll("#height-container button");
const heightContainer = document.getElementById("height-container");
const weightOptions = document.querySelectorAll("#weight-container button");
const weightContainer = document.getElementById("weight-container");
const backgroundOptions = document.querySelectorAll(
  "#background-container button"
);
const backgroundContainer = document.getElementById("background-container");
const workoutOptions = document.querySelectorAll("#workout-container button");
const workoutContainer = document.getElementById("workout-container");
const profileOptions = document.querySelectorAll("#profile-container button");
const profileContainer = document.getElementById("profile-container");
const frequencyOptions = document.querySelectorAll(
  "#frequency-container button"
);
const frequencyContainer = document.getElementById("frequency-container");
const gymAccessOptions = document.querySelectorAll(
  "#gym-access-container button"
);
const gymAccessContainer = document.getElementById("gym-access-container");
const unitOptions = document.querySelectorAll("#unit-container button");
const unitContainer = document.getElementById("unit-container");
const specialUnitOptions = document.querySelectorAll(
  "#special-unit-container button"
);
const specialUnitContainer = document.getElementById("special-unit-container");
const sayarotOptions = document.querySelectorAll("#sayarot-container button");
const sayarotContainer = document.getElementById("sayarot-container");
const InfantryOptions = document.querySelectorAll("#infantry-container button");
const infantryContainer = document.getElementById("infantry-container");
const aFinish = document.querySelectorAll("#a-finish");
const finishContainer = document.getElementById("finish-container");
const progressBar = document.getElementById("progress-bar");
const steps = document.querySelectorAll(".step");
const mainContainer = document.getElementById("hero-main");
let active = 1;
mainContainer.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON" && event.target.type === "submit") {
    active++;
    if (active > steps.length) {
      active = steps.length;
    }
    updateProgress();
  }
});
const updateProgress = () => {
    // Toggle active class on steps
    steps.forEach((step, i) => {
      if (i < active) {
        step.classList.add("active");
      } else {
        step.classList.remove("active");
      }
    });
  
    // Update progress bar width
    progressBar.style.width = ((active - 1) / (steps.length - 1)) * 100 + "%";
  };

ageOptions.forEach((option) => {
  option.addEventListener("click", (event) => {
    newMalshab.Age = event.target.textContent;
    console.log(newMalshab);
    ageContainer.style.display = "none";
    heightContainer.style.display = "flex";
  });
});

heightOptions.forEach((option) => {
  option.addEventListener("click", (heightEvent) => {
    newMalshab.Height = heightEvent.target.textContent;
    console.log(newMalshab);
    heightContainer.style.display = "none";
    weightContainer.style.display = "flex";
  });
});

weightOptions.forEach((options) => {
  options.addEventListener("click", (weightEvent) => {
    newMalshab.Weight = weightEvent.target.textContent;
    console.log(newMalshab);
    weightContainer.style.display = "none";
    backgroundContainer.style.display = "flex";
  });
});

backgroundOptions.forEach((options) => {
  options.addEventListener("click", (backgroundEvent) => {
    newMalshab.Background = backgroundEvent.target.textContent;
    console.log(newMalshab);
    backgroundContainer.style.display = "none";
    workoutContainer.style.display = "flex";
  });
});

workoutOptions.forEach((options) => {
  options.addEventListener("click", (workoutEvent) => {
    newMalshab.Workout = workoutEvent.target.textContent;
    console.log(newMalshab);
    workoutContainer.style.display = "none";
    profileContainer.style.display = "flex";
  });
});

profileOptions.forEach((options) => {
  options.addEventListener("click", (profileEvent) => {
    newMalshab.Profile = profileEvent.target.textContent;
    console.log(newMalshab);
    profileContainer.style.display = "none";
    frequencyContainer.style.display = "flex";
  });
});

frequencyOptions.forEach((options) => {
  options.addEventListener("click", (frequencyEvent) => {
    newMalshab.Frequency = frequencyEvent.target.textContent;
    console.log(newMalshab);
    frequencyContainer.style.display = "none";
    gymAccessContainer.style.display = "flex";
  });
});

gymAccessOptions.forEach((options) => {
  options.addEventListener("click", (gymAccessEvent) => {
    newMalshab.Gym_access = gymAccessEvent.target.textContent;
    gymAccessContainer.style.display = "none";
    unitContainer.style.display = "flex";
    console.log(newMalshab);
  });
});

unitOptions.forEach((options) => {
  options.addEventListener("click", (unitEvent) => {
    unitContainer.style.display = "none";
    console.log(newMalshab);
    if (unitEvent.target.textContent === "Special Operations") {
      specialUnitContainer.style.display = "flex";
      specialUnitOptions.forEach((specialunit) => {
        specialunit.addEventListener("click", (specialUnitEvent) => {
          if (specialUnitEvent.target.textContent === "Sayeret matkal") {
            newMalshab.Unit = "Sayeret_matkal";
            specialUnitContainer.style.display = "none";
            finishContainer.style.display = "flex";
          } else {
            newMalshab.Unit = specialUnitEvent.target.textContent;
            specialUnitContainer.style.display = "none";

            finishContainer.style.display = "flex";
          }
        });
      });
    } else if (unitEvent.target.textContent === "reconnaissance (Sayarot)") {
      sayarotContainer.style.display = "flex";
      sayarotOptions.forEach((options) => {
        options.addEventListener("click", (sayarotEvent) => {
          if (sayarotEvent.target.textContent === "Sayeret Golani") {
            sayarotContainer.style.display = "none";
            finishContainer.style.display = "flex";

            newMalshab.Unit = "Sayeret_Golani";
          } else if (sayarotEvent.target.textContent === "Sayeret Givati") {
            sayarotContainer.style.display = "none";
            finishContainer.style.display = "flex";
            newMalshab.Unit = "Sayeret_Givati";
          } else if (sayarotEvent.target.textContent === "Sayeret Nahal") {
            sayarotContainer.style.display = "none";
            finishContainer.style.display = "flex";
            newMalshab.Unit = "Sayeret_Nahal";
          } else {
            sayarotContainer.style.display = "none";
            finishContainer.style.display = "flex";
            newMalshab.Unit = sayarotEvent.target.textContent;
          }
        });
      });
    } else if (unitEvent.target.textContent === "Infantry") {
      infantryContainer.style.display = "flex";
      InfantryOptions.forEach((options) => {
        options.addEventListener("click", (infantryEvent) => {
          infantryContainer.style.display = "none";
          finishContainer.style.display = "flex";
          newMalshab.Unit = infantryEvent.target.textContent;
        });
      });
    }
  });
});

finishContainer.addEventListener("click", function () {
  localStorage.setItem("DATA", JSON.stringify(newMalshab));
});
