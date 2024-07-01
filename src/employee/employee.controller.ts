import { ClientGrpc, GrpcMethod } from '@nestjs/microservices';
import { Controller, Inject } from '@nestjs/common';
import {
  CreateEmployeeRequest,
  DeleteEmployeeRequest,
  DeleteEmployeeResponse,
  EmployeeResponse,
  GetEmployeeRequest,
  GetEmployeesRequest,
  UpdateEmployeeRequest
} from './employee.interface';

import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  onModuleInit() {}

  @GrpcMethod('EmployeeService', 'GetEmployee')
  async getEmployee(data: GetEmployeeRequest): Promise<EmployeeResponse> {
    return await this.employeeService.getEmployeeById(data.id);
  }

  @GrpcMethod('EmployeeService', 'CreateEmployee')
  async createEmployee(data: CreateEmployeeRequest): Promise<EmployeeResponse> {
    return await this.employeeService.createEmployee(data.name, data.email);
  }

  @GrpcMethod('EmployeeService', 'UpdateEmployee')
  async updateEmployee(data: UpdateEmployeeRequest): Promise<EmployeeResponse> {
    return await this.employeeService.updateEmployee(data.id, data.name, data.email);
  }

  @GrpcMethod('EmployeeService', 'DeleteEmployee')
  async deleteEmployee(data: DeleteEmployeeRequest) {
    return await this.employeeService.deleteEmployee(data.id);
  }

  @GrpcMethod('EmployeeService', 'GetEmployees')
  async getEmployees(data: GetEmployeesRequest) {
    return await this.employeeService.getEmployees(data.page, data.pageSize);
  }
}
