import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormField, MatFormFieldModule, MatInputModule, MatLabel, MatSelectModule } from '@angular/material';
import { GetStylePipe } from './get-style.pipe';



@NgModule({
  declarations: [DetailsComponent, GetStylePipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  exports:[DetailsComponent]
})
export class DetailsModule { }
