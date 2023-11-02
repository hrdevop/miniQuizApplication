import { Component, Input } from '@angular/core';
import { QuizAnswerInterface } from '../../quiz.interface';

@Component({
  selector: 'app-quiz-question-card',
  templateUrl: './quiz-question-card.component.html',
  styleUrls: ['./quiz-question-card.component.css']
})
export class QuizQuestionCardComponent {
  @Input() question!: QuizAnswerInterface;
}
