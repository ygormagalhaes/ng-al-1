import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/photo';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit, OnDestroy {
  filter = '';
  photos: Photo[] = [];
  debounce: Subject<string> = new Subject<string>();
  hasMore = true;
  currentPage = 1;
  username: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService
  ) { }

    ngOnInit(): void {
      this.username = this.activatedRoute.snapshot.params.username;
      this.photos = this.activatedRoute.snapshot.data.photos;
      this.debounce
      .pipe(debounceTime(300))
      .subscribe(filter => this.filter = filter);
    }

    ngOnDestroy(): void {
      this.debounce.unsubscribe();
    }

    load() {
      this.photoService.listPhotosFromUserPaginated(this.username, ++this.currentPage)
        .subscribe(photos => this.setHasMoreValue(photos));
        // .subscribe(photos => this.setHasMoreValue(photos)); FIXME: Problema com 'this' com esse uso.
    }

    private setHasMoreValue(photos: Photo[]): void {
      if (photos.length) {
        this.photos = this.photos.concat(photos);
        if (photos.length < 3) {
          this.hasMore = false;
        } else {
          this.hasMore = true;
        }
      } else {
        this.hasMore = false;
      }
    }

}
