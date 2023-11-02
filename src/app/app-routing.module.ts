import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // quiz
  { path: '', loadChildren: () => import('./quiz/quiz.module').then(m => m.QuizModule), pathMatch: 'prefix' },
  { path: "**", redirectTo: "/quiz" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
