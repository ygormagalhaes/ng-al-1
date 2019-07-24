import { Component, OnInit } from '@angular/core';

import { PhotoService } from '../photo/photo.service';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photo';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {
  filter = '';
  photos: Photo[] = [];

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.photos = this.activatedRoute.snapshot.data.photos;
  }

}
