import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    childMenu:Array<object>;
}

export const ROUTES: RouteInfo[] = [
    {
        path: '/dashboard', title: 'Dashboard', icon:'nc-laptop', class: '',
        childMenu: null
    },


     { path: '', title: 'Organization', icon:'nc-bank', class: '', 
        childMenu: [
            {path: '/overview', title: 'Overview', icon: 'fa fa-angle-double-right', class: ''},
            {path: '/achievements', title: 'Awards & Achievements', icon: 'fa fa-angle-double-right', class: ''},
            {path: '/appreciation-letters', title: 'Client Appreciation', icon: 'fa fa-angle-double-right', class: ''},
            {path: '/grading-status', title: 'Grading Status', icon: 'fa fa-angle-double-right', class: ''},
            {path: '/organization-chart', title: 'Organization Chart', icon: 'fa fa-angle-double-right', class: ''},
        ]
    },

    { path: '', title: 'Employee Manage', icon:'nc-single-02', class: '', 
        childMenu: [
            {path: '/users', title: 'Add Employee', icon: 'fa fa-angle-double-right', class: ''},
             {path: '/employee-dashboard', title: 'Employee Dashboard', icon: 'fa fa-angle-double-right', class: ''},

         //   {path: '/roles', title: 'Attendance Report', icon: 'fa fa-angle-double-right', class: ''},
        //    {path: '/roles', title: 'Vacation', icon: 'fa fa-angle-double-right', class: ''},
        ]
    },

      { path: '', title: 'Site Management', icon:'nc-refresh-69', class: '', 
        childMenu: [
            {path: '/site-create', title: 'Add Site', icon: 'fa fa-angle-double-right', class: ''},
         //    {path: '/site-dashboard', title: 'Site Dashboard', icon: 'fa fa-angle-double-right', class: ''},

         //   {path: '/#', title: 'Client Satisfactory', icon: 'fa fa-angle-double-right', class: ''},
        //    {path: '/#', title: 'Clocking Report', icon: 'fa fa-angle-double-right', class: ''},
         //   {path: '/#', title: 'Occurrence Book', icon: 'fa fa-angle-double-right', class: ''},
        //    {path: '/#', title: 'Back Fill', icon: 'fa fa-angle-double-right', class: ''},
        ]
    }

];

// [
//     { path: '/users',         title: 'User List',         icon:'nc-bank',       class: '' },
//     { path: '/dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: '' },
//     { path: '/icons',         title: 'Icons',             icon:'nc-diamond',    class: '' },
//     { path: '/maps',          title: 'Maps',              icon:'nc-pin-3',      class: '' },
//     { path: '/notifications', title: 'Notifications',     icon:'nc-bell-55',    class: '' },
//     { path: '/user',          title: 'User Profile',      icon:'nc-single-02',  class: '' },
//     { path: '/table',         title: 'Table List',        icon:'nc-tile-56',    class: '' },
//     { path: '/typography',    title: 'Typography',        icon:'nc-caps-small', class: '' }
// ];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
         // userDisplayName = '';
    public menuItems: any[];

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
       // this.userDisplayName = sessionStorage.getItem('loggedUser');

         

    }
}
