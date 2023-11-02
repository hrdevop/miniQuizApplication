import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './quiz.component';
import { QuizQuestionComponent } from './quiz-question/quiz-question.component';
import { QuizRoutingModule } from './quiz-routing.module';
import { QuizQuestionCardComponent } from './quiz-question/quiz-question-card/quiz-question-card.component';
import { QuizResultComponent } from './quiz-result/quiz-result.component';

@NgModule({
  declarations: [
    QuizComponent,
    QuizQuestionComponent,
    QuizQuestionCardComponent,
    QuizResultComponent
  ],
  imports: [
    CommonModule,
    QuizRoutingModule
  ]
})
export class QuizModule { }
