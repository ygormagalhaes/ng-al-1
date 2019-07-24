import { Component, OnInit } from '@angular/core';

import { PhotoService } from '../photo/photo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {

  title = 'Gallery';
  photos: object[];

  constructor(
    private photoService: PhotoService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const username: string = this.activatedRoute.snapshot.params.username;
    this.photoService
      .listPhotosFromUser(username)
      .subscribe(photos => this.photos = photos);
  }

}
