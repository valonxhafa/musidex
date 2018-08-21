import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { AngularFireObject, AngularFireList, AngularFireDatabase } from 'angularFire2/database';
import { Artist } from '../models/artist';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Group } from '../models/group';

@Injectable()
export class GroupsService {

  groupCollection: AngularFirestoreCollection<Group>;
  groups: Observable<Group[]>;

  groupDocument: AngularFirestoreDocument<Group>;
  group: Observable<Group>;

  constructor(private afs: AngularFirestore) {
  }

  public getGroups(id: string) {

    this.groupCollection = this.afs.collection<Group>('Groups', ref => {
      return ref.where('artistID', '==' , id);
    });

    // this.groupCollection = this.afs.collection<Group>('Groups');
    this.groups = this.groupCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Group;
        data.$key = a.payload.doc.id;
        return data;
      });
    });
    return this.groups;
  }

  deleteGroup(group: Group) {
    this.groupCollection.doc(group.$key).delete();
  }

//   addGroups() {
//     this.groupCollection.add({ artistID: '', genres: ['Pop', 'Rock', 'R&B'], name: 'Dangerous',
//     tracks: ['Jam', 'Wou Wanna Trip on Me', 'In the Closet', 'She Drives Me Wild',
//      'Remember the Time', 'Can\'t Let Her Get Away',
//      'Heal the World', 'Black or White', 'Who Is It',
//      'Give In to Me', 'Will You Be There', 'Keep the Faith', 'Gone Too Soon', 'Dangerous'], year: 1991, length: 7303});

//      this.groupCollection.add({ artistID: '', genres: ['Pop', 'Dance', 'Funk', 'Rock'], name: 'Bad',
//      tracks: ['Bad', 'The Way You Make Me Feel', 'Speed Demon', 'Liberian Girl',
//       'Just Good Friends', 'Another Part of Me',
//       'Man in the Mirror', 'I Just Can\'t Stop Loving You', 'Dirty Diana',
//       'Smooth Criminal', 'Leave Me Alone'], year: 1987, length: 4816});

//       this.groupCollection.add({ artistID: '', genres: ['Pop', 'Post-disco', 'Rock'], name: 'Thriller',
//       tracks: ['Wanna Be Startin\' Somethin\'', 'Baby Be Mine', 'The Girl Is Mine',
//        'Thriller', 'Beat It', 'Billie Jean', 'Human Nature', 'P.Y.T. (Pretty Young Thing)',
//        'The Lady In My Life'], year: 1991, length: 4219});
// }

}
