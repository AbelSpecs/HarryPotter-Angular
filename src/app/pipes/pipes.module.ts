import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EdadPipe } from './edad.pipe';



@NgModule({
  declarations: [EdadPipe],
  exports: [EdadPipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
