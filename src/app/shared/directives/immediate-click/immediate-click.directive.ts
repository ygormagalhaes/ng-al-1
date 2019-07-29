import { OnInit, Directive, ElementRef } from '@angular/core';
import { PlatformDetectorService } from 'src/app/core/platform/platform-detector.service';

@Directive({
    selector: '[immediateClick]'
})
export class ImmediateClickDirective implements OnInit {

    constructor(
        private element: ElementRef<any>,
        private platformDetectorService: PlatformDetectorService
    ) { }

    ngOnInit(): void {
        if (this.platformDetectorService.isPlaftormBrowser()) {
            this.element.nativeElement.click();
        }
    }
}
