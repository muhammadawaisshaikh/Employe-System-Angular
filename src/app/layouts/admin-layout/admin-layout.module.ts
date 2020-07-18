import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from "ngx-toastr";

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
import { UserComponent }            from '../../pages/user/user.component';
import { TableComponent }           from '../../pages/table/table.component';
import { TypographyComponent }      from '../../pages/typography/typography.component';
import { IconsComponent }           from '../../pages/icons/icons.component';
import { MapsComponent }            from '../../pages/maps/maps.component';
import { NotificationsComponent }   from '../../pages/notifications/notifications.component';
import { UpgradeComponent }         from '../../pages/upgrade/upgrade.component';

import { MainDashboardComponent } from '../../pages/main-dashboard/main-dashboard.component';
import { EmployeesComponent } from '../../pages/employees/employees.component';
import { AddEmployeeComponent } from '../../pages/add-employee/add-employee.component';
import { EmployeeDetailsComponent } from '../../pages/employee-details/employee-details.component';
import { FormEmployeeHandbookComponent } from '../../pages/form-employee-handbook/form-employee-handbook.component';
import { FormW4Component } from '../../pages/form-w4/form-w4.component';
import { FormI9Component } from '../../pages/form-i9/form-i9.component';
import { FormDirectDepositComponent } from '../../pages/form-direct-deposit/form-direct-deposit.component';
import { EmployeeHandbookPdfMakingComponent } from '../../pages/employee-handbook-pdf-making/employee-handbook-pdf-making.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule }    from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TableComponent,
    UpgradeComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    MainDashboardComponent,
    EmployeesComponent,
    AddEmployeeComponent,
    EmployeeDetailsComponent,
    FormEmployeeHandbookComponent,
    FormW4Component,
    FormI9Component,
    FormDirectDepositComponent,
    EmployeeHandbookPdfMakingComponent
  ]
})

export class AdminLayoutModule {}
