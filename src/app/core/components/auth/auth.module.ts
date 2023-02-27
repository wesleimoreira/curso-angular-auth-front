import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// aplicação
import { AuthRoutingModule } from './auth-routing.module';
import { SignComponent } from './pages/sign/sign.component';

@NgModule({
  declarations: [
    SignComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})

export class AuthModule { }
