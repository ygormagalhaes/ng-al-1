import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[darkenOnHover]' // [] para directive ser utilizada como property
})
export class DarkenOnHoverDirective {

    constructor(private el: ElementRef, private renderer: Renderer2) { }

    @HostListener('mouseenter')
    darkenOn(): void {
        this.renderer.setStyle(this.el.nativeElement, 'filter', 'brightness(70%)');
    }

    @HostListener('mouseleave')
    darkenOff(): void {
        this.renderer.setStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
    }
}
