import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { AuthGuardService } from 'app/auth-guard.service';

import { OverviewComponent } from '../../pages/organization/overview/overview.component';
import { AchievementsComponent } from '../../pages/organization/achievements/achievements.component';
import {AppreciationLettersComponent  }       from '../../pages/organization/appreciation-letters/appreciation-letters.component';
import {GradingStatusComponent  }       from '../../pages/organization/grading-status/grading-status.component';

import { OrganizationChartComponent }       from '../../pages/organization/organization-chart/organization-chart.component';

import { EmployeeDashboardComponent }       from '../../pages/employees/employee-dashboard/employee-dashboard.component';
import { SiteDashboardComponent }       from '../../pages/sites/site-dashboard/site-dashboard.component';

import {SiteCreateComponent  }       from '../../pages/sites/site-create/site-create.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', canActivate:[AuthGuardService],      component: DashboardComponent },

    //Organization
      { path: 'overview',        component: OverviewComponent },
      { path: 'achievements',        component: AchievementsComponent },
      { path: 'organization-chart',        component: OrganizationChartComponent },
      { path: 'appreciation-letters',           component: AppreciationLettersComponent },
      { path: 'grading-status',           component: GradingStatusComponent },

     //Employee

      { path: 'employee-dashboard',        component: EmployeeDashboardComponent },

       

     //site

     { path: 'site-create',        component: SiteCreateComponent },
      { path: 'site-dashboard',        component: SiteDashboardComponent },

    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TableComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'users', canActivateChild:[AuthGuardService],
      loadChildren: () => import('../../admin/users/user.module').then(m => m.UserModule),
    },
    { path: 'roles',canActivateChild:[AuthGuardService],
      loadChildren: () => import('../../admin/roles/role.module').then(m => m.RoleModule),
    }
];
