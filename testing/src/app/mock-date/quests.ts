import {Quest} from "../Model/Quest";

export const Quests: Quest[] = [
    {
      id: 1,
      description: "Hello World",
      answer: "World",
      optionAnswer: {
        answer1: "scalawag",
        answer2: "saddled",
        answer3: "World",
        answer4: "adana"
      }
    },
    {
      id: 2,
      description: "What symbol symbolizes movement?",
      answer: "../assets/img/1-1.jpg",
      optionImgAnswer: {
        img1: "../assets/img/1-2.jpg",
        img2: "../assets/img/1-1.jpg",
        img3: "../assets/img/1-3.jpg",
        img4: "../assets/img/1-4.jpg"
      },
    },
    {
      id: 3,
      description: "Це вбивство?",
      answer: "Клоун спить",
      optionAnswer: {
        answer1: "Так",
        answer2: "Клоун спить",
        answer3: "Це просто марево",
        answer4: "Який ще клоун?"
      },
      video: "../assets/video.mp4"
    }
];
