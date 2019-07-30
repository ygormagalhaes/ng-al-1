import { Component, Input, OnInit } from '@angular/core';
import { PhotoComment } from '../../photo/photo-comment';
import { Observable } from 'rxjs';
import { PhotoService } from '../../photo/photo.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'ap-photo-comments',
    templateUrl: './photo-comments.component.html'
})
export class PhotoCommentsComponent implements OnInit {
    @Input()
    photoId: number;

    comments$: Observable<PhotoComment[]>;
    commentForm: FormGroup;

    constructor(
        private photoService: PhotoService,
        private formBuilder: FormBuilder
    ) { }

    ngOnInit(): void {
        this.comments$ = this.photoService.getComments(this.photoId);
        this.createCommentForm();
    }

    private createCommentForm() {
        this.commentForm = this.formBuilder.group({
            comment: ['',
                [
                    Validators.required,
                    Validators.maxLength(300)
                ]
            ]
        });
    }

    save() {
        const comment = this.commentForm.get('comment').value as string;
        this.photoService.addComment(this.photoId, comment)
            .subscribe(() => {
                this.commentForm.reset();
                alert('Comentário adicionado com sucesso!');
            });
    }
}
