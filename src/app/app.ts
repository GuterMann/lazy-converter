import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { MainLayoutWithSidebar } from "./shell/main-layout-with-sidebar/main-layout-with-sidebar";


@Component({
  imports: [RouterModule, MainLayoutWithSidebar],
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
