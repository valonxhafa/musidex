import { Component, OnInit } from '@angular/core';
import { GroupsService } from '../../services/groups.service';
import { ActivatedRoute } from '@angular/router';
import { Group } from '../../models/group';

@Component({
  selector: 'app-view-artist-groups',
  templateUrl: './view-artist-groups.component.html',
  styleUrls: ['./view-artist-groups.component.css'],
  providers: [GroupsService]
})
export class ViewArtistGroupsComponent implements OnInit {

  private sub: any;
  id: string;
  groups: Group[];

  constructor(public albumService: GroupsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; });
      this.getAlbums(this.id);
  }

  getAlbums(id: string) {
    this.albumService.getGroups(id).subscribe(res => {
      this.groups = res;
    });
  }

}
