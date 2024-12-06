// קריאה של נתוני המשתמש מ-localStorage
const userData = JSON.parse(localStorage.getItem("DATA")); // המידע נשמר כאן בסיום התהליך

// בדיקה והמרת הטווח שנבחר לגובה מדויק במטרים
let height;
switch (userData.Height) {
    case "1.60 and below":
        height = 1.60; // 1.60 מטר
        break;
    case "1.60-1.70":
        height = (160 + 170) / 2 / 100; // ממוצע הטווח בסנטימטרים, מומרים למטרים
        break;
    case "1.70-1.80":
        height = (170 + 180) / 2 / 100;
        break;
    case "1.80-1.90":
        height = (180 + 190) / 2 / 100;
        break;
    case "1.90 and above":
        height = 1.90; // 1.90 מטר
        break;
}

// בדיקה והמרת הטווח שנבחר למשקל מדויק
let weight;
switch (userData.Weight) {
    case "60 and below":
        weight = 60;
        break;
    case "60-65":
        weight = (60 + 65) / 2; // ממוצע הטווח
        break;
    case "65-70":
        weight = (65 + 70) / 2;
        break;
    case "70-75":
        weight = (70 + 75) / 2;
        break;
    case "75-80":
        weight = (75 + 80) / 2;
        break;
    case "85 and above":
        weight = 85;
        break;
}

// יצירת URL דינמי עם הערכים שחושבו
const url = `https://body-mass-index-bmi-calculator.p.rapidapi.com/metric?weight=${weight}&height=${height}`;
console.log("Generated URL:", url);

// פונקציה אסינכרונית לשליחת בקשה ל-API
(async () => {
    const options = {
        method: "GET",
        headers: {
            "x-rapidapi-key": "aa926f172dmsh32ee6ea23f14c75p13556cjsn95c0f6eb83c4",
            "x-rapidapi-host": "body-mass-index-bmi-calculator.p.rapidapi.com",
        },
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();

        // עדכון תוכן האלמנט עם ערך ה-BMI
        const bmiElement = document.getElementById("result-bmi");
        bmiElement.textContent = `Your BMI : ${result.bmi.toFixed(2)}`; // עדכון הטקסט

        console.log("BMI Result:", result);
    } catch (error) {
        console.error("Error fetching BMI data:", error);
    }
})();
