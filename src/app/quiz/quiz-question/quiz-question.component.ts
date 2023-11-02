import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { map } from 'rxjs';
import { QuizAnswerInterface } from '../quiz.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.css'],
})
export class QuizQuestionComponent implements OnInit {
  constructor(
    private _quizService: QuizService,
    private _router: Router
  ) { }


  public isLoading: boolean = true;
  public questions: QuizAnswerInterface[] = [];
  public currentQuestionIndex: number = 0;

  ngOnInit() {
    this._quizService
      .getQuestions$()
      .pipe(
        map(questions => questions.map(q => ({ ...q, answer: '' })))
      )
      .subscribe(res => {
        this.questions = res;
        this.isLoading = false;
      });
  }

  public onNavigation(direction: 'next' | 'previous') {
    if (
      (direction === 'next' && this.currentQuestionIndex !== this.questions.length - 1) ||
      (direction === 'previous' && this.currentQuestionIndex !== 0)
    ) {
      this.currentQuestionIndex += direction === 'next' ? 1 : -1;
    }
  }


  public submitAnswers() {
    const data = this.questions.map(q => ({ id: q.id, answer: q.answer }))
    this._quizService.submitAnswers$(data).subscribe(res => {
      this._router.navigateByUrl('/quiz-result')
    })
  }

}
