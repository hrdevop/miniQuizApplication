import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { QuizPostAnswerInterface, QuizQuestionInterface, QuizResponseAnswerInterface, QuizResultInterface } from './quiz.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private _http: HttpClient) { }

  public getQuestions$(): Observable<QuizQuestionInterface[]> {
    return this._http.get<QuizQuestionInterface[]>('assets/data/quiz-questions.json')
  }


  public submitAnswers$(data: QuizPostAnswerInterface[]) {
    return this._http.get<QuizResponseAnswerInterface[]>('/assets/data/quiz-answer.json').pipe(tap(res => this._checkAnswer(data, res), catchError((error: any) => {
      return throwError(error);
    })))
  }
  answersSubmitted: boolean = false;
  public result!: QuizResultInterface
  private _checkAnswer(userAnswer: QuizPostAnswerInterface[], correctAnswer: QuizResponseAnswerInterface[]) {
    this.result = {
      questions: 0,
      answered: 0,
      correct: 0
    };

    this.result.questions = correctAnswer.length;
    this.result.answered = userAnswer.filter(a => a.answer !== "").length;

    userAnswer.forEach(ua => {
      let cAns = correctAnswer.find(c => c.questionId === ua.id);
      if (!cAns) return;

      cAns.answer === ua.answer ? this.result.correct++ : '';
    });

    this.answersSubmitted = true;
  }

}
