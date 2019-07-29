import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { TokenService } from './token/token.service';

@NgModule({
    declarations: [ HeaderComponent ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [ HeaderComponent ],
    providers: [ TokenService ]
})
export class CoreModule { }
