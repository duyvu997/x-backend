import { ClientsModule } from '@nestjs/microservices';
import { EmployeeController } from './employee.controller';
import { Module } from '@nestjs/common';
import { options } from '../grpc.options';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'employee',
        ...options,
      },
    ]),
  ],
  controllers: [EmployeeController],
})
export class EmployeeModule {}
