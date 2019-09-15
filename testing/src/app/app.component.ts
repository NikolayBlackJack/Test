import {Component, OnInit} from '@angular/core';
import {Quests} from "./mock-date/quests";
import {Subject} from "rxjs";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  isDisabled = new Subject<boolean>();
  sub = new Subject<number>();
  quests = Quests;
  len: number;
  numQuest = 1;
  boole = true;
  answer = new Subject<string>();
  isAnswer = "";
  isTrueAnswer = false;


  constructor() {
    this.isDisabled.subscribe(x => this.boole = x);
  }


  ngOnInit() {
    this.showHiden();
    this.callQuest(this.quests[0]);
    this.len = this.quests.length;

  }

  callQuest(quest) {
    this.sub.next(quest.id);
    this.description();
  }

  description() {
    this.sub.subscribe(x => this.numQuest = x);
  }


  showHiden(): void {
    let menu = document.querySelector('aside');
    menu.style.width == "200px"
      ? menu.style.width = "10px"
      : menu.style.width =  "200px";
  }

  check() {
    if(this.boole == false) return this.boole = true;
  }

  next():any  {
    return  this.quests[this.numQuest]
  }

  validate() {
    this.answer.subscribe(x => this.isAnswer = x)
    if (this.quests[this.numQuest - 1].answer == this.isAnswer) {
      console.log(this.isAnswer)
    }
  }

}
