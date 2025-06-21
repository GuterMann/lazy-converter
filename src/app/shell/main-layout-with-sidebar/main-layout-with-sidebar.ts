import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { initFlowbite } from 'flowbite';
import { Sidebar } from "../features/sidebar/sidebar";
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-main-layout-with-sidebar',
  imports: [CommonModule, Sidebar, MatTabsModule ],
  templateUrl: './main-layout-with-sidebar.html',
  styleUrl: './main-layout-with-sidebar.css',
})
export class MainLayoutWithSidebar implements OnInit{
  ngOnInit(): void {
    initFlowbite();
  }
}
