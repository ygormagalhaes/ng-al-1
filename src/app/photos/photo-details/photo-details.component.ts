import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
    templateUrl: './photo-details.component.html',
    styleUrls: ['./photo-details.component.scss']
})
export class PhotoDetailsComponent implements OnInit {
    photo$: Observable<Photo>;

    constructor(
        private activatedRoute: ActivatedRoute,
        private photoService: PhotoService
    ) { }

    ngOnInit(): void {
        const photoId = this.activatedRoute.snapshot.params.photoId;
        this.photo$ = this.photoService.findBydId(photoId);
    }
}
