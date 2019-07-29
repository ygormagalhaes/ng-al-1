import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from '../core/auth/login.guard';
import { SiginComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [LoginGuard],
        children: [
            { path: '', component: SiginComponent },
            { path: 'signup', component: SignupComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class HomeRoutesModule { }
