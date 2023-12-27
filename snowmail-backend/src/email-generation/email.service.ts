import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Email } from './entities/email.entity';
import OpenAI from "openai";


@Injectable()
export class EmailService {
  constructor(
    private readonly configService: ConfigService,
  ) {
    const openai = new OpenAI();
  }

  // TODO: Implement OpenAI API

}
