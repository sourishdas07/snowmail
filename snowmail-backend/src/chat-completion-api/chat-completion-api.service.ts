import { Injectable } from '@nestjs/common';
import { ChatHistoryManager } from './entities/chat-history-manager';
import { ChatOpenAI } from 'langchain/chat_models/openai';
import { GetChatCompletionAnswerInputDto, GetChatCompletionAnswerOutputDto } from './entities/chat-completition-answer.dto';

const DEFAULT_TEMPERATURE = 1;
const DEFAULT_MODEL = 'gpt-3.5-turbo';

@Injectable()
export class ChatCompletionApiService {
  private readonly chatHistory: ChatHistoryManager;
  private readonly chat: ChatOpenAI;

  constructor() {
    this.chatHistory = new ChatHistoryManager();
    this.chat = new ChatOpenAI({
      temperature: DEFAULT_TEMPERATURE,
      openAIApiKey: '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',
      modelName: DEFAULT_MODEL,
    });
  }

  async getAiModelAnswer(data: GetChatCompletionAnswerInputDto) {
    this.chatHistory.addHumanMessage(data.message);
    const result = await this.chat.predictMessages(
      this.chatHistory.chatHistory,
    );

    // Added JSON stringify to convert it to a string
    const aiMessage = JSON.stringify(result.content);

    this.chatHistory.addAiMessage(aiMessage);

    return GetChatCompletionAnswerOutputDto.getInstance(aiMessage);
  }
}