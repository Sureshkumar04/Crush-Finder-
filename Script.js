function checkCrush() {
    const crushName = document.getElementById("crushName").value.trim();
    const dateOfBirth = document.getElementById("dateOfBirth").value.trim();
    dateOfBirth.max = new Date().toISOString().split("T")[0];

    if (!crushName || !dateOfBirth) {
        alert("Please fill in both the Name and date of birth.");
        hideCrushImage();
        return;
    }

    const crushNameMatch = [
        { name: "Monica R", dateOfBirth: "2004-06-07", result: "S", result01: "H" },
        { name: "Monica R", dateOfBirth: "2003-06-07", result: "S", result01: "H" },
        { name: "Monica R", dateOfBirth: "2005-06-07", result: "S", result01: "H" },
        { name: "Monica R", dateOfBirth: "2006-06-07", result: "S", result01: "H" },
        { name: "Monica", dateOfBirth: "2004-06-07", result: "S", result01: "H" },
        { name: "Monica", dateOfBirth: "2003-06-07", result: "S", result01: "H" },
        { name: "Monica", dateOfBirth: "2005-06-07", result: "S", result01: "H" },
        { name: "Monica", dateOfBirth: "2006-06-07", result: "S", result01: "H" },
        { name: "Suresh Kumar P", dateOfBirth: "2001-10-04", result: "M", result01: "A"},
        { name: "Suresh Kumar", dateOfBirth: "2001-10-04", result: "M", result01: "A"},
        { name: "Suresh", dateOfBirth: "2001-10-04", result: "M", result01: "A"},
    ];

    for (const crush of crushNameMatch) {
        if (crushName.toLowerCase() === crush.name.toLowerCase() && dateOfBirth === crush.dateOfBirth) {
            const resultMessage = `Hi <span>${crushName}</span>, your crush's name starts with "<span>${crush.result}</span>" and ends with "<span>${crush.result01}</span>"!`;
            document.getElementById("result").textContent = resultMessage;
            document.getElementById("result").innerHTML = resultMessage;
            displayCrushImage();
            return;
        }
    }

    const randomLetter = getRandomLetter();
    const randomLetter01 = getRandomLetter01();
    const resultMessage = `Hi <span>${crushName}</span>, Your crush's name starts with "<span>${randomLetter}</span>" and ends with "<span>${randomLetter01}</span>"!`;
    document.getElementById("result").textContent = resultMessage;
    document.getElementById("result").innerHTML = resultMessage;
    displayCrushImage();
}


function displayCrushImage() {
    var imageElement = document.getElementById('crushImage');
    imageElement.style.display = 'block';
}

function hideCrushImage() {
    var imageElement = document.getElementById('crushImage');
    imageElement.style.display = 'none';
}



function getRandomLetter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    return alphabet[randomIndex].toUpperCase();
}
function getRandomLetter01() {
    const alphabet = "ahinougjklnmc";
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    return alphabet[randomIndex].toUpperCase();
}

