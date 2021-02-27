import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private authService: AuthService,
        private router: Router
        ) {}
    
    canActivate() {
        if(this.authService.loggedIn()) {
            return true;
        } else {
            this.router.navigate(['/welcome']);
            return false;
        }
    }

    // studentOnly() {
    //     const type = this.authService.getType();
    //     return type === 'student';
    // }

    // facultyOnly() {
    //     const type = this.authService.getType();
    //     if (type === 'faculty') {
    //         this.router.navigate(['/generate']);
    //         return true;
    //     }
    //     return false;
    // }
}