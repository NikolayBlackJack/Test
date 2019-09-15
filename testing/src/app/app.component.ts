import {Component, OnInit} from '@angular/core';
import {Quests} from "./mock-date/quests";
import { QuestionService } from "./question.service";
import { QuestionComponent } from "./question/question.component";
import {Quest} from "./Model/Quest";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  quests = Quests;
  len: number;
  numQuest = 1;
  boole = true;
  isTrueAnswer = false;
  isAnswer: string;


  constructor(private question: QuestionService, private question1: QuestionComponent) {
    this.question.isDisabled.subscribe(x => this.boole = x);
    this.question.answer.subscribe(x => this.isAnswer = x);
  }


  ngOnInit() {
    this.showHiden();
    this.callQuest(this.quests[0]);
    this.len = this.quests.length;

  }

  callQuest(quest) {
    this.question.sub.next(quest.id);
    this.description();
    this.isAnswer = "";
    this.isTrueAnswer = false;
  }

  description() {
    this.question.sub.subscribe(x => this.numQuest = x);
  }


  showHiden(): void {
    let menu = document.querySelector('aside');
    menu.style.width == "200px" ? menu.style.width = "10px" : menu.style.width =  "200px";
  }

  check() {
    if(this.boole == false) return this.boole = true;
  }

  checkChecd() {
    this.question1.checkChecd();
  }

  next(quest: Quest)  {
    this.isAnswer = "";
    this.isTrueAnswer = false;
    this.validate();
    this.callQuest(quest);
    return  quest[this.numQuest += 1];
  }

  validate() {
    let indicator = document.getElementById(`${this.quests[this.numQuest - 1].id}`);
    let isAn = document.getElementById("isAnswer");

    console.log(this.quests[this.numQuest - 1].answer == this.isAnswer);
    if (this.quests[this.numQuest - 1].answer == this.isAnswer) {
      indicator.style.backgroundColor = "green";
      this.isTrueAnswer = true;
      isAn.style.backgroundColor = "green";
    } else if (this.isAnswer == ""){
      return 0;
    } else {
      indicator.style.backgroundColor = 'red';
      this.isTrueAnswer = true;
      isAn.style.backgroundColor = "red";
    }
  }

}
