import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserRepository } from './repositories/user-repositoriry';
import { CreateUserDTO } from './dto/create-user-dto';

@Controller()
export class AppController {
  constructor(private userRepository: UserRepository) {}

  @Get('users')
  async getUsers() {
    return await this.userRepository.getUsers();
  }

  @Post('users')
  async create(@Body() body: CreateUserDTO) {
    const { name, email } = body;
    await this.userRepository.create(name, email);
  }

  @Patch('users/:id')
  async updateUser(@Param('id') id: string, @Body() body: CreateUserDTO) {
    const { name, email } = body;
    const updateUser = await this.userRepository.updateUser(id, name, email);
    return updateUser;
  }

  @Delete('users/:id')
  async deleteUser(@Param('id') id: string) {
    await this.userRepository.deleteUser(id);
    return {
      message: 'Usuário deletado com sucesso',
    };
  }
}
