import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getEmployee(id: number): Observable<any> {
    return this.http.get(environment.baseUrl + "/getEmployee"+ "/"+id);
  }

  createEmployee(employee: Object): Observable<Object> {
    return this.http.post(environment.baseUrl + "/addEmployee", employee);
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(environment.baseUrl+"/employee/update/"+ id, value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(environment.baseUrl + "/deleteEmployee/" +id, { responseType: 'text' });
  }

  getEmployeesList(): Observable<any> {
    return this.http.get(environment.baseUrl + "/getEmployees");
  }
}