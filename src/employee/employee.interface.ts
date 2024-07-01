// employee.interface.ts

export interface GetEmployeeRequest {
  id: number;
}

export interface CreateEmployeeRequest {
  name: string;
  email: string;
}

export interface UpdateEmployeeRequest {
  id: number;
  name: string;
  email: string;
}

export interface DeleteEmployeeRequest {
  id: number;
}

export interface EmployeeResponse {
  id: number;
  name: string;
  email: string;
}

export interface DeleteEmployeeResponse {
  success: boolean;
  message: string;
}

export interface GetEmployeesRequest {
  page: number;
  pageSize: number;
}

export interface GetEmployeesResponse {
  employees: EmployeeResponse[];
  total: number;
}

