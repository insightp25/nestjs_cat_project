import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CatsService } from './cats/services/cats.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
