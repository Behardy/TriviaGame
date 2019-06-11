import { Component, OnInit } from '@angular/core';
import { QuizService} from '../quiz.service';
@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  question: any;

  constructor(private quizService: QuizService) {
this.quizService.getQuestion().subscribe(response =>{
  this.question = response;
})
   }
submitAnswer(){
  this.quizService.addScores

}
  ngOnInit() {
  }

}
