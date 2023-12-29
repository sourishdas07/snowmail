
import { Controller, Get, Post } from '@nestjs/common';
import { AppService, SendEmailDto } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/send-email')
  sendEmail() {
    const dto: SendEmailDto = {
      sender: { name: 'HR', address: 'sourish10das@gmail.com' },
      recipients: [{ name: 'TESTING', address: 's4das@uwaterloo.ca' }],
      subject: 'Test email',
      text: '"This is a test email"',
      html: '',
    }

    return this.appService.sendEmail(dto);
  }

  
}
