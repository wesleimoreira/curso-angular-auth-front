import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// aplicação
import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule    
  ]
})

export class AdminModule { }
