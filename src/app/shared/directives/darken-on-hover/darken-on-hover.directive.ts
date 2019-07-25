import { Directive, HostListener, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
    selector: '[darkenOnHover]' // [] para directive ser utilizada como property
})
export class DarkenOnHoverDirective {

    @Input()
    brightness = '70%';

    constructor(private el: ElementRef, private renderer: Renderer2) { }

    @HostListener('mouseenter')
    darkenOn(): void {
        this.renderer.setStyle(this.el.nativeElement, 'filter', `brightness(${this.brightness})`);
    }

    @HostListener('mouseleave')
    darkenOff(): void {
        this.renderer.setStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
    }
}
