import { Controller, Inject } from '@nestjs/common';
import { ClientGrpc, GrpcMethod } from '@nestjs/microservices';
import { Observable, of } from 'rxjs';
import {
  CreateEmployeeRequest,
  DeleteEmployeeRequest,
  DeleteEmployeeResponse,
  EmployeeResponse,
  GetEmployeeRequest,
  UpdateEmployeeRequest,
} from './employee.interface';

interface EmployeeService {
  getEmployee(data: GetEmployeeRequest): Observable<EmployeeResponse>;
  createEmployee(data: CreateEmployeeRequest): Observable<EmployeeResponse>;
  updateEmployee(data: UpdateEmployeeRequest): Observable<EmployeeResponse>;
  deleteEmployee(
    data: DeleteEmployeeRequest,
  ): Observable<DeleteEmployeeResponse>;
}

@Controller('employee')
export class EmployeeController {
  private employeeService: EmployeeService;

  constructor(@Inject('employee') private readonly client: ClientGrpc) {}

  onModuleInit() {
    this.employeeService =
      this.client.getService<EmployeeService>('EmployeeService');
  }

  @GrpcMethod('EmployeeService', 'GetEmployee')
  getEmployee(data: GetEmployeeRequest): Observable<EmployeeResponse> {
    return of({ id: 1, name: 'test', email: 'te1212st' });
  }

  @GrpcMethod('EmployeeService')
  createEmployee(data: CreateEmployeeRequest): Observable<EmployeeResponse> {
    // Implement logic to handle CreateEmployee gRPC method
    return this.employeeService.createEmployee(data);
  }

  @GrpcMethod('EmployeeService')
  updateEmployee(data: UpdateEmployeeRequest): Observable<EmployeeResponse> {
    // Implement logic to handle UpdateEmployee gRPC method
    return this.employeeService.updateEmployee(data);
  }

  @GrpcMethod('EmployeeService')
  deleteEmployee(
    data: DeleteEmployeeRequest,
  ): Observable<DeleteEmployeeResponse> {
    // Implement logic to handle DeleteEmployee gRPC method
    return this.employeeService.deleteEmployee(data);
  }
}
