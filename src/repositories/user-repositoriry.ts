import { CreateUserDTO } from 'src/dto/create-user-dto';

export abstract class UserRepository {
  abstract create(name: string, email: string): Promise<void>;
  abstract getUsers(): Promise<CreateUserDTO[]>;
}
