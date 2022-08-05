import { Module } from '@nestjs/common';
// import FetchController from './fetch.controller';
import FetchService from './fetch.service';
import FetchGateway from './fetch.gateway';

@Module({
  // imports: [],
  // controllers: [FetchController],
  providers: [FetchService, FetchGateway],
})
export default class FetchModule {}
