import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import config from './config/config';
import AppController from './app.controller';
import AppService from './app.service';

import FetchModule from './fetch/fetch.module';

@Module({
  imports: [ConfigModule.forRoot({ load: [config] }), FetchModule],
  controllers: [AppController],
  providers: [AppService],
})
export default class AppModule {}
