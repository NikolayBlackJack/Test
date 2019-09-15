import { Component, OnInit } from '@angular/core';
import { Quests } from '../mock-date/quests';
import { AppComponent } from "../app.component";
import { QuestionService } from "../question.service";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  quests = Quests;
  numQuest = 1;

  constructor(private question: QuestionService) { }

  ngOnInit() {
    this.question.sub.subscribe(x =>  this.numQuest = x ? x : 1);
  }

  check(e) {
    let target = e.target;
    this.question.isDisabled.next(true);
    if (target.className != "check fas") return;
    this.checkChecd();
    target.className == "check fas" ?  target.className = "check fas fa-check" : target.className = "check fas";
    this.question.isDisabled.next(false);
    this.validAnswer(target.parentElement)
  }

  checkChecd() {
    let p = document.querySelectorAll('.check');
    for (let i = 0; i < p.length; i++) if (p[i].className == "check fas fa-check") p[i].className = "check fas";
    this.question.isTrueAnswer = false;
  }

  validAnswer(e) {
    let str;
    if (e.childNodes[2].innerHTML){
      str = e.childNodes[2].innerText;
      this.question.answer.next(`${str}`);
    } else {
      str = e.childNodes[1].childNodes[0].attributes[2].nodeValue;
      this.question.answer.next(`${str}`);
    }
  }
}
