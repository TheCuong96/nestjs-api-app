import { AuthService } from './auth.service';
import { Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  //auth service is automatically created when inititalizing the controller
  constructor(private authService: AuthService) {}
  //some requests from client
  @Post('register')
  register() {
    return {
      x: 1,
      y: 2,
      name: 'Cường',
    };
  }

  @Post('login')
  login() {
    return 'đã gọi thành công đăng nhập';
  }
}
