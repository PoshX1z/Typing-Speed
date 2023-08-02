const paragraphs = [
  "the streets are paved now and the telephone and electric companies are cutting down more and more of the shade the water oaks the maples and locusts to make room for iron poles bearing clusters of bloated and ghostly and bloodless grapes, and we have a city laundry which makes the rounds on Monday morning, gathering the bundles of clothes into bright colored specially made motor cars the soiled wearing of a whole week now flees apparitionlike behind alert and irritable electric horns with a long diminishing noise of rubber and asphalt like tearing silk and even the Negro women who still take in white people washing after the old custom fetch then",
  "as he crossed toward the pharmacy at the corner he involuntarily turned his head because of a burst of light that had from his temple and saw with that quick smile with which we greet a rainbow or a rose a blindingly white parallelogram of sky being unloaded from the dresser with mirrors across which as across a cinema screen passed a flawlessly clear reflection of boughs sliding and swaying not arboreally but with a human vacillation produced by the nature of those who were carrying this sky these boughs this gliding that good",
  "all i know is that i stood spellbound in his high ceilinged studio room with its north facing windows in front of the heavy mahogany bureau at which Michael said he no longer worked because the room was so cold, even in midsummer and that while we talked of the difficulty of heating old houses a strange feeling came upon me, as if it were not he who had abandoned that place of work but I as if the spectacles cases letters and writing materials that had evidently lain untouched for months in the soft north light had once been ",
  "sometimes though there is a ghostly rumble among the drums an asthmatic whisper in the trombones that swings me back into the early twenties when we drank wood alcohol and every day in every way grew better and better and there was a first abortive shortening of the skirts and girls all looked alike in sweater dresses and people you did want to know said we have no bananas and it seemed only a question of a few years before the older people would step aside and let the world be run by those who want to deliver the darkness",

  "we are thieves in a world that don't want us no more I try and in the end i did it i gave you all i had i gave you everything be loyal to what matter I would kill for it and i would happily die for it i wish things were different but it is not us who change the world have changed so much all them year dutch for this snake we can not change what done we can only move on we are more ghost than people we aint both gonna make it here take this it would mean a lot to me go get yourself and be a goddamn man you are my brother",

  " i always was a good theif that you was go get outta here there is a good man within you but he is wrestling with a giant i am really sorry for you son it is a hell of thing our time is pretty much passed may the wind be at your back good fortune touch your hand may the cards lay out a straight all from your command that the way it is that the way it is you saved my life you are a good man thank you fella you know there is not enough kindness on this world that for sure maybe it is a sign arthur try try to do a good things arthur",
];

//initial variable
const refresh = document.querySelector("#refresh");
const timeTag = document.querySelector("#time span");
const texts = document.querySelector(".texts p");
const typeInput = document.querySelector("input");

//Initial time value and char index

let charIndex = 0;

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
};

randomParagraph(); //call this function as default

//when clicking at "refresh" button it will refresh
const refreshText = () => {
  texts.innerHTML = "";
  randomParagraph();
};

//eventlistener that recieve "click" and do its function
refresh.addEventListener("click", () => refreshText());
typeInput.addEventListener("input", () => typingText());
