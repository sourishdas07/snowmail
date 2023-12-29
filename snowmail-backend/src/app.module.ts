import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserDataController } from './data/data.controller';
import { UserModule } from './user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot(),
    MailerModule.forRootAsync({
      inject: [ConfigService],
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({

        // Change these when doing actual implementations 
        // Only works in mailtrap for now
        transport: {
          host: configService.get<string>('MAIL_HOST'),
          port: configService.get<string>('MAIL_PORT'),
          secure: false,
          auth: {
            user: configService.get<string>('MAIL_USER'),
            pass: configService.get<string>('MAIL_PASSWORD'),
          }
        },
        defaults: {
          from: configService.get<string>('MAIL_SENDER'),
        }
      })
    })
  ],

  controllers: [
    AppController, 
    UserDataController
  ],
  
  providers: [
    AppService
  ],
})
export class AppModule {}
