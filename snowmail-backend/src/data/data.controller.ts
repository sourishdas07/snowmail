import { Controller, Get, Body } from '@nestjs/common';

interface User {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  school: string;
  major: string;
  gpa: number;
  user: string;
}

@Controller('data')
export class UserDataController {

  @Get()
  getData(): User[] {
    const users: User[] = [
      // { id: 1, name: 'John Doe' },
      // { id: 2, name: 'Jane Doe' },
      // { id: 3, name: 'Alice' },
    ];
    return users;
  }


}