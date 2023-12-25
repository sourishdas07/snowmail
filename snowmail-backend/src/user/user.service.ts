import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {

  // Temporary Array of Users
  private users: User[] = [];

  createUser(id: number, firstname: string, email: string, school: string, major: string, gpa: number, username: string) : number {
    // Changing this later to ensure all users have unique ids
    const userId: number = Math.random() * 100;
    
    const newUser = new User(userId, firstname, email, school, major, gpa, username);
    // Pushing the new user to the array
    this.users.push(newUser);
    return userId;
  }

  getAllUsers() {
    return `This action returns all user`;
  }
  

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
