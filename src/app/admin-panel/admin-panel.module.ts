import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel.component';
import { RouterModule } from '@angular/router';
import { StatusPanelComponent } from './status-panel/status-panel.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AdminPanelComponent,
    StatusPanelComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdminPanelComponent
      }
    ])
  ]
})
export class AdminPanelModule { }
