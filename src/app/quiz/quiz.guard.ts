import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { QuizService } from './quiz.service';

@Injectable({
  providedIn: 'root'
})
export class QuizRouteGuard implements CanActivate {

  constructor(private _quizService: QuizService, private _router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this._quizService.answersSubmitted) {
      return true;
    } else {
      return this._router.parseUrl('/quiz');
    }
  }
}
