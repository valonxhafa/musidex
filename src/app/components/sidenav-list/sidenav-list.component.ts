import { Component, OnInit } from '@angular/core';
import { MatIconRegistry, MatIconModule } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

export interface Tile {
  color: string;
  text: string;
}

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {

  numbre: number;
  tilecolor = 'lightpink';

  filterYearIconList = ['60w', '70w', '80w', '90w'];
  filterGenreIconList = ['hiphop', 'rap', 'dance', 'jazz', 'classicw', 'countryw',
  'electronic', 'metal', 'punk', 'reggae', 'rock', 'usmusic'];

  constructor(private iconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
  }

  ngOnInit() {
  }

  go() {
    console.log('waddup');
    const map = new Map();
    map.set('name', 'Anand Deep Singh');
  }

}
