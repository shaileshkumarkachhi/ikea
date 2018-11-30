import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ApiCallLoginService } from '../shared';
import { LoginService } from './login.service';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [HttpModule, CommonModule, TranslateModule, LoginRoutingModule],
  declarations: [LoginComponent],
  providers: [ApiCallLoginService, LoginService]
})
export class LoginModule {}
