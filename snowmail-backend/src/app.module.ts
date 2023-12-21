import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserDataController } from './data/data.controller';

@Module({
  imports: [],
  controllers: [AppController, UserDataController],
  providers: [AppService],
})
export class AppModule {}
