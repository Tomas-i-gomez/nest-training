import { PartialType } from '@nestjs/mapped-types';
import { CreatePayMethodDto } from './create-pay-method.dto';

export class UpdatePayMethodDto extends PartialType(CreatePayMethodDto) {}
