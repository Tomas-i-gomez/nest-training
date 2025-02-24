import { Module } from '@nestjs/common';
import { PayMethodsService } from './pay-methods.service';
import { PayMethodsController } from './pay-methods.controller';

@Module({
  controllers: [PayMethodsController],
  providers: [PayMethodsService],
})
export class PayMethodsModule {}
