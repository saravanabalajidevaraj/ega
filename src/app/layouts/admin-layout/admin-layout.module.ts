import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
import { UserComponent }            from '../../pages/user/user.component';
import { TableComponent }           from '../../pages/table/table.component';
import { TypographyComponent }      from '../../pages/typography/typography.component';
import { IconsComponent }           from '../../pages/icons/icons.component';
import { MapsComponent }            from '../../pages/maps/maps.component';
import { NotificationsComponent }   from '../../pages/notifications/notifications.component';
import { UpgradeComponent }         from '../../pages/upgrade/upgrade.component';

import { OverviewComponent }         from '../../pages/organization/overview/overview.component';
import { AchievementsComponent }       from '../../pages/organization/achievements/achievements.component';

import { OrganizationChartComponent }       from '../../pages/organization/organization-chart/organization-chart.component';
import {GradingStatusComponent  }       from '../../pages/organization/grading-status/grading-status.component';
import {AppreciationLettersComponent  }       from '../../pages/organization/appreciation-letters/appreciation-letters.component';

import { EmployeeDashboardComponent }       from '../../pages/employees/employee-dashboard/employee-dashboard.component';

import { SiteDashboardComponent }       from '../../pages/sites/site-dashboard/site-dashboard.component';

import {SiteCreateComponent  }       from '../../pages/sites/site-create/site-create.component';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {PdfViewerModule } from 'ng2-pdf-viewer';
import { DataTablesModule } from 'angular-datatables';
import { ToastyModule } from 'ng2-toasty';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    PdfViewerModule,
    ToastyModule,
    DataTablesModule,
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
    OverviewComponent,
    AchievementsComponent,
    AppreciationLettersComponent,
    GradingStatusComponent,
    OrganizationChartComponent,
    EmployeeDashboardComponent,
    SiteDashboardComponent,
    SiteCreateComponent
  ]
})

export class AdminLayoutModule {}
