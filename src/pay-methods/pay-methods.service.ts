import { Injectable } from '@nestjs/common';
import { CreatePayMethodDto } from './dto/create-pay-method.dto';
import { UpdatePayMethodDto } from './dto/update-pay-method.dto';

@Injectable()
export class PayMethodsService {
  create(createPayMethodDto: CreatePayMethodDto) {
    return 'This action adds a new payMethod';
  }

  findAll() {
    return `This action returns all payMethods`;
  }

  findOne(id: number) {
    return `This action returns a #${id} payMethod`;
  }

  update(id: number, updatePayMethodDto: UpdatePayMethodDto) {
    return `This action updates a #${id} payMethod`;
  }

  remove(id: number) {
    return `This action removes a #${id} payMethod`;
  }
}
