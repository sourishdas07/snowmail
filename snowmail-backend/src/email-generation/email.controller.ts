// import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
// import { EmailService } from './email.service';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';

// @Controller('user')
// export class EmailController {
//   constructor(private readonly emailService: EmailService) {}
// }

import { Controller, Get} from '@nestjs/common';
import { EmailService } from './email.service';

// localhost:8000/email
@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Get()
  getHello(): string {
    return this.emailService.getHello();
  }

}