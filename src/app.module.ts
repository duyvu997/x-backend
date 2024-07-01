import { Employee } from './employee/employee.entity';
import { EmployeeModule } from './employee/employee.module';
// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT, 10) || 5432,
      username: process.env.DB_USERNAME || 'yourUsername',
      password: process.env.DB_PASSWORD || 'yourPassword',
      database: process.env.DB_DATABASE || 'yourDatabase',
      entities: [Employee], // Add your entities here
      synchronize: true, // Set to false in production
    }),
    EmployeeModule,
  ],
})
export class AppModule {}
