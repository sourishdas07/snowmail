import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Email } from './entities/email.entity';
import OpenAI from "openai";

const { OpenAIAPI, Configuration, CreateCompletionRequest } = require('openai');

@Injectable()
export class EmailService {
  private openai: OpenAI;

  constructor(
    private readonly configService: ConfigService,
  ) {
    this.openai = new OpenAI({
      organization: 'org-2J8U1tpCkIVsR1jdJVFcxwEg',
    });
  }

  async main() {
    const completion = await this.openai.chat.completions.create({
      // Content Needs to be changed accordingly
      messages: [{ role: "system", content: "You are a helpful assistant." }],
      model: "gpt-3.5-turbo",
    });

    console.log(completion.choices[0]);
  }

  // TODO: Implement OpenAI API
}


