let currentHour = new Date().getHours();

let message;
if (currentHour < 12) {
    message = "Good morning!";
} else {
    message = "Good afternoon!";
}

document.getElementById("greeting").innerText = message;