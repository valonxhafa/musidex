import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../../services/albums.service';
import { Album } from '../../models/album';
import {MatTableDataSource} from '@angular/material';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view-artist-albums',
  templateUrl: './view-artist-albums.component.html',
  styleUrls: ['./view-artist-albums.component.css'],
  providers: [AlbumsService]
})
export class ViewArtistAlbumsComponent implements OnInit {

  albums: Album[];
  private sub: any;
  id: string;


  constructor(public albumService: AlbumsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; });
    this.getAlbums(this.id);
    // this.albumService.addAlbums(); //VOEG TEST ALBUMS TOE
  }

  getAlbums(id: string) {
    this.albumService.getAlbums(id).subscribe(res => {
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

