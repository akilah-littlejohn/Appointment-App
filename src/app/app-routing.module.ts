import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { DatepickerComponent } from './datepicker/datepicker.component';

const routes: Routes = [
  {path:'datepicker', component:DatepickerComponent},
  {path:'confirmation', component:ConfirmationComponent},
  { path: '', redirectTo: 'datepicker', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
