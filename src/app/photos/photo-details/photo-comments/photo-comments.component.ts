import { Component, Input } from '@angular/core';
import { PhotoComment } from '../../photo/photo-comment';

@Component({
    selector: 'ap-photo-comments',
    templateUrl: './photo-comments.component.html'
})
export class PhotoCommentsComponent {
    @Input()
    comments: PhotoComment[];
}
