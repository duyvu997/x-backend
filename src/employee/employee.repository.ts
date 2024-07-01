// src/employee/employee.repository.ts

import { DataSource, Repository } from 'typeorm';

import { Employee } from './employee.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeeRepository extends Repository<Employee> {
  constructor(private dataSource: DataSource) {
    super(Employee, dataSource.createEntityManager());
  }

  async createEmployee(name: string, email: string): Promise<Employee> {
    const employee = this.create({ name, email });
    return await this.save(employee);
  }

  async getEmployeeById(id: number): Promise<Employee> {
    return await this.findOne({ where: { id } });
  }

  async getAllEmployees(
    page: number,
    limit: number,
  ): Promise<{ data: Employee[]; count: number }> {
    const [data, count] = await this.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
    });
    return { data, count };
  }

  async updateEmployee(
    id: number,
    name: string,
    email: string,
  ): Promise<Employee> {
    const employee = await this.getEmployeeById(id);
    if (employee) {
      employee.name = name;
      employee.email = email;
      return await this.save(employee);
    }
    return null;
  }

  async deleteEmployee(id: number): Promise<boolean> {
    const result = await this.delete(id);
    return result.affected > 0;
  }
}
