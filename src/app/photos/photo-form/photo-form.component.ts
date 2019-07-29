import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PhotoService } from '../photo/photo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ap-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.scss']
})
export class PhotoFormComponent implements OnInit {
  photo: File;
  photoForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private photoService: PhotoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.photoForm = this.formBuilder.group({
      photo: ['', Validators.required],
      description: ['',
        [
          Validators.required,
          Validators.maxLength(300)
        ]
      ],
      comments: [true]
    });
  }

  upload() {
    const description = this.photoForm.get('description').value;
    const comments = this.photoForm.get('comments').value;
    this.photoService.upload(description, comments, this.photo)
      .subscribe(() => this.router.navigate(['']));
  }

}
