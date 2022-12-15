import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UserRepository } from './repositories/user-repositoriry';
import { CreateUserDTO } from './dto/create-user-dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private userRepository: UserRepository,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('users')
  async create(@Body() body: CreateUserDTO) {
    const { name, email } = body;
    await this.userRepository.create(name, email);
  }

  @Get('users')
  async getUsers() {
    return await this.userRepository.getUsers();
  }
}
