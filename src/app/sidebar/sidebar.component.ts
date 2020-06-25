import { Component, OnInit } from '@angular/core';
import { AuthDataService } from '../shared/services/auth-data/auth-data.service';

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    type: string
}

export const ROUTES: RouteInfo[] = [
    { path: '/main-dashboard', title: 'Main Dashboard', icon:'nc-bank', class: '', type: 'admin' },
    { path: '/employees', title: 'Employees', icon:'nc-tile-56', class: '', type: 'admin' },
    { path: '/add-employee', title: 'Add Employee', icon:'nc-single-02', class: '', type: 'admin' },
    { path: '/employee-details', title: 'Employee Details', icon:'nc-single-02', class: 'none', type: 'admin' },
    { path: 'user-forms/employee-handbook', title: 'Employee Handbook', icon:'nc-paper', class: '', type: 'user' },
    { path: 'user-forms/form-w4', title: 'W-4 Form', icon:'nc-paper', class: '', type: 'user' },
    { path: 'user-forms/form-I9', title: 'I-9 Form', icon:'nc-paper', class: '', type: 'user' },
    { path: 'user-forms/form-direct-deposit', title: 'Direct Deposit Form', icon:'nc-paper', class: '', type: 'user' },

    // { path: '/dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: '' },
    // { path: '/icons',         title: 'Icons',             icon:'nc-diamond',    class: '' },
    // { path: '/maps',          title: 'Maps',              icon:'nc-pin-3',      class: '' },
    // { path: '/notifications', title: 'Notifications',     icon:'nc-bell-55',    class: '' },
    // { path: '/user',          title: 'User Profile',      icon:'nc-single-02',  class: '' },
    // { path: '/table',         title: 'Table List',        icon:'nc-tile-56',    class: '' },
    // { path: '/typography',    title: 'Typography',        icon:'nc-caps-small', class: '' },
    // { path: '/upgrade',       title: 'Upgrade to PRO',    icon:'nc-spaceship',  class: 'active-pro' },

];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    authType: string = '';

    constructor(
        private authData: AuthDataService
    ){}

    ngOnInit() {
        this.checkAuthType();
    }

    checkAuthType() {
        this.authType = this.authData.getAuthData()[6];
        console.log(this.authType);
        
        this.menuItems = ROUTES.filter(menuItem => menuItem.type === this.authType);
    }
}
