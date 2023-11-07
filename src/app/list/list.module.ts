import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { CompactListComponent } from './compact-list/compact-list.component';



@NgModule({
  declarations: [
    ListComponent,
    CompactListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ListModule { }
