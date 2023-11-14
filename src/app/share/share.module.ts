import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberDirective } from './number.directive';
import { AlertService } from './alert.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { DateThPipe } from './date-th.pipe';
import { LoadingComponent } from './loading/loading.component';
import { LoadingService } from './loading.service';



@NgModule({
  declarations: [
    NumberDirective,
    DateThPipe,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ClarityModule
  ],
  providers: [
    AlertService,
    LoadingService
  ],
  exports: [LoadingComponent]
})
export class ShareModule { }
