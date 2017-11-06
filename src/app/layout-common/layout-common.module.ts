import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RowComponent } from './component/row/row.component';
import { ContainerComponent } from './component/container/container.component';
import { ModalComponent } from './component/modal/modal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RowComponent,
    ContainerComponent,
    ModalComponent
  ],
  exports: [
    RowComponent,
    ContainerComponent,
    ModalComponent
  ]

})
export class LayoutCommonModule { }
