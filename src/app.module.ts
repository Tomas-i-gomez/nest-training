import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from './clients/clients.module';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from './products/products.module';
import { PayMethodsModule } from './pay-methods/pay-methods.module';

@Module({
  imports: [ClientsModule, ConfigModule.forRoot(), ProductsModule, PayMethodsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
