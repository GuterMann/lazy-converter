import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { VideoConversion } from "./components/video-conversion/video-conversion";

@Component({
  selector: 'app-videos',
  imports: [CommonModule, MatTabsModule, VideoConversion],
  templateUrl: './videos.html',
  styleUrl: './videos.css',
})
export class Videos {}
