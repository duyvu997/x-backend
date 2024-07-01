import { Controller, Logger } from '@nestjs/common';
import {
  CreateEmployeeRequest,
  DeleteEmployeeRequest,
  EmployeeResponse,
  GetEmployeeRequest,
  GetEmployeesRequest,
  UpdateEmployeeRequest,
} from './employee.interface';

import { EmployeeService } from './employee.service';
import { GrpcMethod } from '@nestjs/microservices';

@Controller('employee')
export class EmployeeController {
  private readonly logger = new Logger(EmployeeController.name);

  constructor(private readonly employeeService: EmployeeService) {}

  @GrpcMethod('EmployeeService', 'GetEmployee')
  async getEmployee(data: GetEmployeeRequest): Promise<EmployeeResponse> {
    this.logger.log(`Received GetEmployee request for ID: ${data.id}`);
    try {
      const result = await this.employeeService.getEmployeeById(data.id);
      this.logger.log(`GetEmployee response: ${JSON.stringify(result)}`);
      return result;
    } catch (error) {
      this.logger.error(`Error in GetEmployee: ${error.message}`);
      throw error;
    }
  }

  @GrpcMethod('EmployeeService', 'CreateEmployee')
  async createEmployee(data: CreateEmployeeRequest): Promise<EmployeeResponse> {
    this.logger.log(`Received CreateEmployee request: ${JSON.stringify(data)}`);
    try {
      const result = await this.employeeService.createEmployee(data.name, data.email);
      this.logger.log(`CreateEmployee response: ${JSON.stringify(result)}`);
      return result;
    } catch (error) {
      this.logger.error(`Error in CreateEmployee: ${error.message}`);
      throw error;
    }
  }

  @GrpcMethod('EmployeeService', 'UpdateEmployee')
  async updateEmployee(data: UpdateEmployeeRequest): Promise<EmployeeResponse> {
    this.logger.log(`Received UpdateEmployee request: ${JSON.stringify(data)}`);
    try {
      const result = await this.employeeService.updateEmployee(data.id, data.name, data.email);
      this.logger.log(`UpdateEmployee response: ${JSON.stringify(result)}`);
      return result;
    } catch (error) {
      this.logger.error(`Error in UpdateEmployee: ${error.message}`);
      throw error;
    }
  }

  @GrpcMethod('EmployeeService', 'DeleteEmployee')
  async deleteEmployee(data: DeleteEmployeeRequest) {
    this.logger.log(`Received DeleteEmployee request for ID: ${data.id}`);
    try {
      const result = await this.employeeService.deleteEmployee(data.id);
      this.logger.log(`DeleteEmployee response: ${JSON.stringify(result)}`);
      return result;
    } catch (error) {
      this.logger.error(`Error in DeleteEmployee: ${error.message}`);
      throw error;
    }
  }

  @GrpcMethod('EmployeeService', 'GetEmployees')
  async getEmployees(data: GetEmployeesRequest) {
    this.logger.log(`Received GetEmployees request: ${JSON.stringify(data)}`);
    try {
      const result = await this.employeeService.getEmployees(data.page, data.pageSize);
      this.logger.log(`GetEmployees response: ${JSON.stringify(result)}`);
      return result;
    } catch (error) {
      this.logger.error(`Error in GetEmployees: ${error.message}`);
      throw error;
    }
  }
}
