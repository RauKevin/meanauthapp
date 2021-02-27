import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class FacultyGuard implements CanActivate {
    constructor(
        private authService: AuthService,
        private router: Router
        ) {}
    
    canActivate() {
        const type = this.authService.getType();
        if (type === 'faculty') {
            this.router.navigate(['/generate']);
            return true;
        }
        return false;
    }
}