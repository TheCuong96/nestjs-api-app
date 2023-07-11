import { Injectable } from '@nestjs/common';

@Injectable({}) // this is Dependency Injection
export class AuthService {
  doSomething() {
    console.log('====================================');
    console.log('authService.dosomething');
    console.log('====================================');
  }
}
