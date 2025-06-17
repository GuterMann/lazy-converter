import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-main-layout-with-sidebar',
  imports: [CommonModule],
  templateUrl: './main-layout-with-sidebar.html',
  styleUrl: './main-layout-with-sidebar.css',
})
export class MainLayoutWithSidebar implements OnInit{
  ngOnInit(): void {
    initFlowbite();
  }
}
