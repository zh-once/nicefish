import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { manageRouting } from './manage.routes';
import { ManageMainComponent } from './manage-main/manage-main.component';
import { UserTableComponent } from './user-table/user-table.component';
import { SysParamComponent } from './sys-param/sys-param.component';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    manageRouting
  ],
  declarations: [ManageMainComponent, UserTableComponent, SysParamComponent],
  providers: []
})
export class ManageModule { }
