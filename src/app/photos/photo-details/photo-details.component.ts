import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
    templateUrl: './photo-details.component.html'
})
export class PhotoDetailsComponent implements OnInit {
    photo$: Observable<Photo>;
    photoId: number;

    constructor(
        private activatedRoute: ActivatedRoute,
        private photoService: PhotoService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.photoId = this.activatedRoute.snapshot.params.photoId;
        this.photo$ = this.photoService.findBydId(this.photoId);
    }

    remove(): void {
        this.photoService.remove(this.photoId)
            .subscribe(() => this.router.navigate(['']));
    }
}
