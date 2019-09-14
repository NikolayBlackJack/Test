import {Component, OnInit} from '@angular/core';
import {Quests} from "./mock-date/quests";
import {Quest} from "./Model/Quest";
import {Subject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  quests = Quests;
  len: number;
  sub = new Subject<number>();
  numQuest = 1;

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
    this.sub.subscribe(x => this.numQuest = x)
  }

  showHiden(): void {
    let menu = document.querySelector('aside');
    menu.style.width == "250px"
      ? menu.style.width = "10px"
      : menu.style.width =  "250px";
  }
}
