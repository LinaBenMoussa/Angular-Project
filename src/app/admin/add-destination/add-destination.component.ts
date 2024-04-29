import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DestinationService } from 'src/app/services/destination.service';

@Component({
  selector: 'app-add-destination',
  templateUrl: './add-destination.component.html',
  styleUrls: ['./add-destination.component.css']
})
export class AddDestinationComponent {
  destinationForm: FormGroup;

  constructor(private fb: FormBuilder, private DS:DestinationService) {
    this.destinationForm = this.fb.group({
      nom: ['', Validators.required],
      img: [null, Validators.required]
    });
  }

  onFileSelect(event: Event): void {
    const target = event.target as HTMLInputElement;
    const file: File | null = target.files ? target.files[0] : null;
    if (file) {
      console.log('File selected',file.name);
      this.destinationForm.patchValue({ img: file.name });

    }
  }

  submitForm(): void {
    const formData=this.destinationForm.value;
    console.log("formdata",formData);

    this.DS.addDestination(formData).subscribe({
      next: (response) => console.log('Upload successful', response),
      error: (error) => console.error('Upload failed', error)
    });
  }
}
