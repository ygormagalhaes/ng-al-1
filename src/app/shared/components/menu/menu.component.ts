import { Component } from '@angular/core';

@Component({
    selector: 'ap-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
    isShow = false;

    toggle(): void {
        console.log('alterando estado de visualização');
        this.isShow = !this.isShow;
    }
}
