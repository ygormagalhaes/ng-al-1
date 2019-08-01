import { Component } from '@angular/core';

@Component({
    selector: 'ap-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
    isShown = false;

    toggle(): void {
        console.log('alterando estado de visualização');
        this.isShown = !this.isShown;
    }
}
