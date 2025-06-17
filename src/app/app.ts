import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcome } from './nx-welcome';
import { initFlowbite } from 'flowbite';


@Component({
  imports: [NxWelcome, RouterModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit{
  ngOnInit(): void {
    initFlowbite();
  }
  protected title = 'lazy-converter';
}
