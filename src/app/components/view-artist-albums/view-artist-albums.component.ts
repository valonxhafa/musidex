import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../../services/albums.service';
import { Album } from '../../models/album';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-view-artist-albums',
  templateUrl: './view-artist-albums.component.html',
  styleUrls: ['./view-artist-albums.component.css'],
  providers: [AlbumsService]
})
export class ViewArtistAlbumsComponent implements OnInit {

  albums: Album[];
  columnsToDisplay = ['name', 'length'];
  dataSource = new MatTableDataSource(this.albums);

  constructor(public albumService: AlbumsService) { }

  ngOnInit() {
    this.getAlbums();
    // this.albumService.addAlbums(); //VOEG TEST ALBUMS TOE
  }

  getAlbums() {
    this.albumService.getAlbums().subscribe(res => {
      this.albums = res;
    });
  }

  toDigital(length: number) {
    let formattedLength = '';
    const lengthString = length.toString();

    if (length) {
      const minutes = lengthString.substring(0, 2);
      const secondes = lengthString.substring(2, 4);
      formattedLength = minutes + ':' + secondes;
    }
    return formattedLength;
  }

}

