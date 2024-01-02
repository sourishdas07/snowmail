import { Module } from '@nestjs/common';
import { ChatCompletionApiController } from './chat-completion-api.controller';
import { ChatCompletionApiService } from './chat-completion-api.service';

@Module({
  controllers: [ChatCompletionApiController],
  providers: [ChatCompletionApiService]
})
export class ChatCompletionApiModule {}
