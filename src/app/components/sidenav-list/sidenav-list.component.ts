import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  filterGenreIconList = ['Hip-hop', 'Rap', 'Dance', 'Jazz', 'Classic', 'Country',
  'Electronic', 'Metal', 'Reggae', 'Rock', 'USmusic'];

  @Output() eventClicked = new EventEmitter<Event>();

  constructor(private iconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
  }

  ngOnInit() {
  }

  onClick(event: Event): void {
    this.eventClicked.emit(event);
  }

  go() {
  }

}
