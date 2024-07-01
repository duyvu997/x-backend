// src/employee/employee.module.ts

import { ClientsModule } from '@nestjs/microservices';
import { Employee } from './employee.entity';
import { EmployeeController } from './employee.controller';
import { EmployeeRepository } from './employee.repository';
import { EmployeeService } from './employee.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { options } from '../grpc.options';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'employee',
        ...options,
      },
    ]),
    TypeOrmModule.forFeature([Employee])
  ],
  providers: [EmployeeService, EmployeeRepository],

  controllers: [EmployeeController],
})
export class EmployeeModule {}

