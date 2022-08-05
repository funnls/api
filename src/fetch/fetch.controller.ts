import { Controller, Get, Post, Body } from '@nestjs/common';
import FetchService from './fetch.service';
import FetchRequestDto from './fetch_request.dto';

@Controller('fetch')
class FetchController {
  constructor(private readonly fetchService: FetchService) {}

  @Get('hello')
  getHello(): string {
    return this.fetchService.getHello();
  }

  @Post()
  async update(@Body() fetchRequestDto: FetchRequestDto) {
    return this.fetchService.fetchUrl(fetchRequestDto);
  }
}

export default FetchController;
