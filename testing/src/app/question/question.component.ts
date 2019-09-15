import { Component, OnInit } from '@angular/core';
import { Quests } from '../mock-date/quests';
import { AppComponent } from "../app.component";
import {Subject} from "rxjs";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  quests = Quests;
  numQuest = 1;
  options = this.quests[this.numQuest - 1].optionAnswer;

  constructor(private component: AppComponent) { }

  ngOnInit() {
    this.component.sub.subscribe(x =>  this.numQuest = x ? x : 1);
  }

  check(e) {
    let target = e.target;
    if (target.className != "check fas") return;
    this.checkCheked();
    target.className == "check fas" ?  target.className = "check fas fa-check" : target.className = "check fas";
    this.validAnswer(target.parentElement)
  }
  checkCheked() {
    let p = document.querySelectorAll('.check');
    for (let i = 0; i < p.length; i++) if (p[i].className == "check fas fa-check") p[i].className = "check fas";
  }

  validAnswer(e) {
    console.log(e.childNodes);
  }
}
