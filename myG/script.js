const button = document.getElementById("bigButton");
const monkey = document.getElementById("monkey");
const sound = document.getElementById("sound");

button.addEventListener("click", () => {
    button.style.display = "none";
    monkey.style.display = "block";

    sound.loop = true;   
    sound.play();
});