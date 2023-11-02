import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { QuizResultInterface } from '../quiz.interface';

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.css']
})
export class QuizResultComponent implements OnInit {
  constructor(private _quizService: QuizService) {
  }
  result!: QuizResultInterface
  ngOnInit(): void {
    this.result = this._quizService.result
  }
  getPercentage(): number {
    return (this.result.correct / this.result.answered) * 100;
  }
}
