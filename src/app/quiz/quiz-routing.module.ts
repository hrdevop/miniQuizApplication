import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './quiz.component';
import { QuizQuestionComponent } from './quiz-question/quiz-question.component';
import { FormsModule } from '@angular/forms';
import { QuizResultComponent } from './quiz-result/quiz-result.component';
import { QuizRouteGuard } from './quiz.guard';

const routes: Routes = [
  { path: '', redirectTo: 'quiz', pathMatch: 'full' },
  { path: 'quiz', component: QuizComponent, },
  { path: 'quiz-question', component: QuizQuestionComponent },
  { path: 'quiz-result', component: QuizResultComponent, canActivate: [QuizRouteGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, FormsModule]
})
export class QuizRoutingModule { }
