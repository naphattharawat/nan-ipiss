import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockcardComponent } from './stockcard/stockcard.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { ShareModule } from '../share/share.module';



@NgModule({
  declarations: [
    StockcardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ClarityModule,
    ShareModule
  ]
})
export class StoreModule { }
