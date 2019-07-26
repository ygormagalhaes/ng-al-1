import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { SiginComponent } from './home/signin/signin.component';
import { AuthGuard } from './core/auth/auth.guard';

const routes: Routes = [
    { path: '', component: SiginComponent, canActivate: [ AuthGuard ] },
    {
        path: 'user/:username', component: PhotoListComponent, resolve: {
            photos: PhotoListResolver
        }
    },
    { path: 'p/add', component: PhotoFormComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutesModule { }
