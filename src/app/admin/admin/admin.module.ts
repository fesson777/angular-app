import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminLayoutComponent } from '../shared/components/admin-layout/admin-layout.component';
import { LoginAdminComponent } from '../login-admin/login-admin.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CreatePageComponent } from '../create-page/create-page.component';
import { EditPageComponent } from '../edit-page/edit-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthServices } from '../shared/services/auth.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthGuard } from '../shared/services/auth.guard';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    LoginAdminComponent,
    DashboardComponent,
    CreatePageComponent,
    EditPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdminLayoutComponent,
        children: [
          { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
          { path: 'login', component: LoginAdminComponent },
          {
            path: 'dashboard',
            component: DashboardComponent,
            canActivate: [AuthGuard],
          },
          {
            path: 'create',
            component: CreatePageComponent,
            canActivate: [AuthGuard],
          },
          {
            path: 'post/:id/edit',
            component: EditPageComponent,
            canActivate: [AuthGuard],
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
  providers: [AuthServices, AuthGuard],
})
export class AdminModule {}
