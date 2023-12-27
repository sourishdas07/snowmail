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

  async generateEmail(prompt: string): Promise<string> {
    const response = await openai.Completion.create({
      engine: 'text-davinci-002',
      prompt,
      max_tokens: 300,
      temperature: 0.7,
    });

    return response.choices[0].text.trim();
  }

}
