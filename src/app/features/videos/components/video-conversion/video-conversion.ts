import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-video-conversion',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './video-conversion.html',
  styleUrl: './video-conversion.css',
})
export class VideoConversion {
  private fb = inject(FormBuilder);

  destinationFolderForm = this.fb.group({
    path: ["", {
      validators: [Validators.required]
    }]
  });
}
