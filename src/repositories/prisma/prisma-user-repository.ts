import { Injectable } from '@nestjs/common' 
import { randomUUID } from 'node:crypto';
import { UserRepository } from '../user-repositoriry';
import { PrismaService } from '../../database/prisma.service';
import { CreateUserDTO } from 'src/dto/create-user-dto';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}
  
  async create(name: string, email: string): Promise<void> {
    await this.prisma.user.create({
      data: {
        id: randomUUID(),
        name,
        email,
      },
    })
  }

  async getUsers(): Promise<CreateUserDTO[]> {
    const users = await this.prisma.user.findMany();
    return users;
  }
}