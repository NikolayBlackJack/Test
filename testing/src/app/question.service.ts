import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  isDisabled = new Subject<boolean>();
  sub = new Subject<number>();
  answer = new Subject<string>();
  isTrueAnswer: boolean;

  constructor() { }

  checkChecd() {

  }
}
