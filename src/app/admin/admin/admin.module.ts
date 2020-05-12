import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminLayoutComponent } from '../shared/components/admin-layout/admin-layout.component';
import { LoginAdminComponent } from '../login-admin/login-admin.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CreatePageComponent } from '../create-page/create-page.component';
import { EditPageComponent } from '../edit-page/edit-page.component';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    LoginAdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: AdminLayoutComponent , children: [
        {path: '', redirectTo: '/admin/login', pathMatch:'full'},
        {path: 'login', component: LoginAdminComponent},
        {path: 'dashboard', component: DashboardComponent},
        {path:'create', component: CreatePageComponent},
        {path:'post/:id/edit', component:EditPageComponent}
      ]}
    ])
  ],
  exports: [RouterModule]
})
export class AdminModule { }
