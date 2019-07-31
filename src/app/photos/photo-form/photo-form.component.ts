import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PhotoService } from '../photo/photo.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { UserService } from 'src/app/core/user/user.service';

@Component({
  selector: 'ap-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.scss']
})
export class PhotoFormComponent implements OnInit {
  photo: File;
  photoForm: FormGroup;
  previewBase64: string;

  constructor(
    private formBuilder: FormBuilder,
    private photoService: PhotoService,
    private router: Router,
    private alertService: AlertService,
    private userService: UserService
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
      .subscribe(() => {
        this.alertService.success('Photo uploaded!', true);
        this.router.navigate(['/user', this.userService.getUsername()]);
      });
  }

  handleInputFileChange(photo: File) {
    this.photo = photo;
    const fileReader = new FileReader();
    fileReader.onload = (event: any) => this.previewBase64 = event.target.result;
    fileReader.readAsDataURL(photo);
  }

}
