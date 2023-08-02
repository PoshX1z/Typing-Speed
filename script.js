//initial variable
const refresh = document.querySelector("#refresh");
const timeTag = document.querySelector("#time span");
const texts = document.querySelector(".texts p");
const typeInput = document.querySelector("input");

//Initial time value and char index

let timer = 30;
let charIndex = 0;
let interval;

//randomParagraph function
const randomParagraph = () => {
  let random = Math.floor(Math.random() * paragraphs.length);
  paragraphs[random].split("").forEach((txt) => {
    let text = `<span>${txt}</span>`;
    texts.innerHTML += text;
  });

  document.addEventListener("keydown", () => typeInput.focus());
  texts.addEventListener("click", () => typeInput.focus());
};

//typing function that will generate texts
const typingText = () => {
  const characters = texts.querySelectorAll("span");
  let typedChar = typeInput.value.split("")[charIndex];

  //if user hasn't entered any words or pressed backspace
  if (typedChar == null) {
    charIndex--;
    characters[charIndex].classList.remove("correct", "incorrect");
  } else {
    if (characters[charIndex].innerText === typedChar) {
      characters[charIndex].classList.add("correct");
    } else {
      characters[charIndex].classList.add("incorrect");
    }
    charIndex++;
  }

  //timer running when start typing
  if (!interval) {
    interval = setInterval(() => {
      if (timer <= 0) {
        clearInterval(interval);
        alert("Time's up!");
        //refresh the page once timer reach 0
        location.reload();
      } else {
        timer--;
        timeTag.innerText = timer;
      }
    }, 1000);
  }
};

randomParagraph(); //call this function as default

//when clicking at "refresh" button it will refresh
refresh.addEventListener("click", () => {
  location.reload();
});

typeInput.addEventListener("input", () => typingText());
