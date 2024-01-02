import { IsNotEmpty, IsString } from 'class-validator';

export class GetChatCompletionAnswerInputDto {
  @IsNotEmpty()
  @IsString()
  message: string;
}

export class GetChatCompletionAnswerOutputDto {
  @IsNotEmpty()
  @IsString()
  aiMessage: string;

  static getInstance(aiMessage: string) {
    const result = new GetChatCompletionAnswerOutputDto();
    result.aiMessage = aiMessage;
    return result;
  }
}
