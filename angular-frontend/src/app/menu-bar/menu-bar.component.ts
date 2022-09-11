
import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatDialog,  } from '@angular/material/dialog';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  navBarColor: ThemePalette = 'primary';
  menuColor: ThemePalette = 'primary'

}
