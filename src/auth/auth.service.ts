import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '@src/user/user.service';
import * as argon2 from 'argon2';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findOne(email);
    const passwordIsMatch = await argon2.verify(user.password, password);
    if (user && passwordIsMatch) {
      return user;
    }
    return new UnauthorizedException('User or password are incorrect');
  }
}