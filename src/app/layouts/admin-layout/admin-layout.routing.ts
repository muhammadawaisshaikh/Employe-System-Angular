import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';

import { MainDashboardComponent } from '../../pages/main-dashboard/main-dashboard.component';
import { EmployeesComponent } from '../..//pages/employees/employees.component';
import { AddEmployeeComponent } from '../../pages/add-employee/add-employee.component';
import { EmployeeDetailsComponent } from '../../pages/employee-details/employee-details.component';
import { FormEmployeeHandbookComponent } from '../../pages/form-employee-handbook/form-employee-handbook.component';
import { FormW4Component } from '../../pages/form-w4/form-w4.component';
import { FormI9Component } from '../../pages/form-i9/form-i9.component';
import { FormDirectDepositComponent } from '../../pages/form-direct-deposit/form-direct-deposit.component';
import { EmployeeHandbookPdfMakingComponent } from '../../pages/employee-handbook-pdf-making/employee-handbook-pdf-making.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TableComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    
    { path: 'main-dashboard', component: MainDashboardComponent },
    { path: 'employees', component: EmployeesComponent },
    { path: 'add-employee', component: AddEmployeeComponent },
    { path: 'employee-details', component: EmployeeDetailsComponent },
    { path: 'employee-handbook', component: FormEmployeeHandbookComponent },
    { path: 'form-w4', component: FormW4Component },
    { path: 'form-I9', component: FormI9Component },
    { path: 'form-direct-deposit', component: FormDirectDepositComponent },
    { path: 'employee-handbook-pdf-view', component: EmployeeHandbookPdfMakingComponent },
];
