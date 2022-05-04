
   
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Company } from '../company';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { CompanyService } from '../company.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  submitted = false;
  companies: any;

  constructor(private employeeService: EmployeeService,
    private companyService: CompanyService,
    private router: Router) { }

  ngOnInit() {
    // this.getCompanies();
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }

  save() {
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Employee();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/employees']);
  }



  getCompanies() {
    this.companies = this.companyService.getCompaniesList();
    console.log(this.companies);
  }
}