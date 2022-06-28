const myInformation = {
  myName: "Raime",
  age: 32,
  birthday: "June 9",
  pineapplePizza: false,
  lifeEvents: [
    "I was born in Grand Rapids, Michigan",
    "I played varsity softball at Michigan State.",
    "I am a classically-trained oil painter.",
    "I love dogs — a lot.",
  ],
};

if (pineapplePizza === true) {
  console.log(
    `My name is ${myName} and I like pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
} else {
  console.log(
    `My name is ${myName} and I'm not into pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
}

//Write a for loop that starts at 0 and iterates by increments of 1 while i is less than the length of the lifeEvents array. Each iteration of the loop should log a new sentence from the lifeEvents array. You should only have one console.log method.
for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

for (lifeEvent of lifeEvents) {
  console.log(lifeEvent);
}


let counter = 0;
while (counter <= 100) {
  console.log(counter);

}

let randomNumber = Math.floor(Math.random() * 10) + 1;


if (randomNumber != 5) {
    console.log(“randomNumber !== 5");
  } else if (me.excitementLevel >= 4 && me.excitementLevel <= 7) {
    console.log(“5 === 5. It took counter iterations to randomly generate the number 5.”);
    break;

  }