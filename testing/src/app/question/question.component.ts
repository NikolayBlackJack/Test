import { Component, OnInit } from '@angular/core';
import { Quests } from '../mock-date/quests';
import { AppComponent } from "../app.component";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  quests = Quests;
  numQuest = 1;
  constructor(private component: AppComponent) { }

  ngOnInit() {
    this.component.sub.subscribe(x =>  this.numQuest = x ? x : 1);
  }

}
