// import { Injectable } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
// import { Email } from './entities/email.entity';
// // import OpenAI from "openai";

// const { Configuration, OpenAIApi } = require("openai");

// @Injectable()
// export class EmailService {

//   private readonly client: typeof OpenAIApi;

//   constructor(
//     private readonly configService: ConfigService,
//   ) {
//      const configuration = new Configuration({
//       apiKey: configService.get('OPENAI_API_KEY'),
//       organization: configService.get('OPENAI_ORG_ID'),
//     });

//     this.client = new OpenAIApi(configuration);
//   }

//   // TODO: Implement OpenAI API

// }
import { Injectable } from '@nestjs/common';
import OpenAI from "openai";


@Injectable()
export class EmailService {
  // TODO: Implement OpenAI API

  async GenerateEmail(): Promise<String> {
    const openai = new OpenAI();
    const completion = await openai.chat.completions.create({
      messages: [{"role": "system", "content": "You are a helpful assistant."},
          {"role": "user", "content": "Who won the world series in 2020?"},
          {"role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020."},
          {"role": "user", "content": "Where was it played?"}],
      model: "gpt-3.5-turbo",
    });

    console.log(completion.choices[0]);
    return "Email printed";
  }

  getHello(): string {
    return 'Hello Worldsssssss!';
  }

  
}