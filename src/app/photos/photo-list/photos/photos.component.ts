import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Photo } from '../../photo/photo';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnChanges {
  @Input()
  photos: Photo[] = [];
  rows: any[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.photos) {
      console.log('mudança detectada');
      this.createRows();
    }
  }

  createRows(): void {
    for (let index = 0; index < this.photos.length; index += 3) {
      this.rows.push(this.photos.slice(index, index + 3));
    }
  }
}
