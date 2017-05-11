
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders} from '@angular/core';
import { LoginComponent} from './login/login.component';
import { RegisterComponent } from './register/register.component';
const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
     
];

export const routing = RouterModule.forRoot(appRoutes,{useHash: true});