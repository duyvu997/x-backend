// src/employee/employee.service.ts

import { Employee } from './employee.entity';
import { EmployeeRepository } from './employee.repository';
import { GetEmployeesResponse } from './employee.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeeService {
  constructor(private readonly employeeRepository: EmployeeRepository) {}

  async createEmployee(name: string, email: string): Promise<Employee> {
    return this.employeeRepository.createEmployee(name, email);
  }

  async getEmployeeById(id: number): Promise<Employee> {
    return this.employeeRepository.getEmployeeById(id);
  }

  async updateEmployee(
    id: number,
    name: string,
    email: string,
  ): Promise<Employee> {
    return this.employeeRepository.updateEmployee(id, name, email);
  }

  async deleteEmployee(id: number): Promise<boolean> {
    return this.employeeRepository.deleteEmployee(id);
  }

  async getEmployees(page = 1, pageSize = 10): Promise<GetEmployeesResponse> {
    const [employees, total] = await this.employeeRepository.findAndCount({
      skip: (+page - 1) * +pageSize,
      take: pageSize,
    });
    const employeeResponses = employees.map((employee) => ({
      id: employee.id,
      name: employee.name,
      email: employee.email,
    }));
    return { employees: employeeResponses, total };
  }
}
