import { ChatCompletionApiService } from './chat-completion-api.service';
import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { GetChatCompletionAnswerInputDto } from './entities/chat-completition-answer.dto';

@Controller('chat-completion-api')
export class ChatCompletionApiController {
     constructor(private readonly service: ChatCompletionApiService) {}

     @Post()
     getChatCompletionMessage(
          @Body(new ValidationPipe({ transform: true }))
          data: GetChatCompletionAnswerInputDto,
     ) {
          return this.service.getAiModelAnswer(data);
     }
}

