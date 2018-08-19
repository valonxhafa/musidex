import { Component, OnInit } from '@angular/core';
import { ArtistsService } from '../../services/artists.service';
import { Artist } from '../../models/artist';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';
import { Album } from '../../models/album';
import { AlbumsService } from '../../services/albums.service';

@Component({
  selector: 'app-view-artist',
  templateUrl: './view-artist.component.html',
  styleUrls: ['./view-artist.component.css'],
  providers: [ArtistsService, AlbumsService]
})
export class ViewArtistComponent implements OnInit {

  id: string;
  private sub: any;
  artist: Artist;
  albums: Album[];
  now = new Date();

  constructor(public artistsService: ArtistsService, public albumService: AlbumsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; });
    this.getArtist();
    this.getAlbums();
  }

  getArtist() {
    this.artistsService.getArtist(this.id).subscribe(res => {
      this.artist = res;
    });
  }

  getAlbums() {
    this.albumService.getAlbums().subscribe(res => {
      this.albums =  res;
    });
  }

  getAge() {
  }

  checkArtistBeforeImgUrl() {
    if (this.artist) {
      return this.artist.imgurl;
    }
  }


}
