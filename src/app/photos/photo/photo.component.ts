import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'ap-photo',
    templateUrl: './photo.component.html'
})
export class PhotoComponent {
    private readonly API_URL = environment.apiUrl;
    realUrl: string;

    @Input()
    description: string;

    @Input()
    set url(urlParam: string) {
        if (!urlParam.startsWith('data')) {
            this.realUrl = `${this.API_URL}imgs/${urlParam}`;
        } else {
            this.realUrl = urlParam;
        }
    }

    get url(): string {
        return this.realUrl;
    }
}
