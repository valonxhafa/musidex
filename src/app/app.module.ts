import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularFire2/database';
import { AppMaterialModule } from './app-material/app-material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { SearchArtistsComponent } from './components/search-artists/search-artists.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { ViewArtistComponent } from './components/view-artist/view-artist.component';
import { SidenavListComponent } from './components/sidenav-list/sidenav-list.component';
import { UICarouselModule } from 'ui-carousel';

export const firebaseConfig = environment.firebaseConfig;

const appRoutes: Routes = [
  { path: '', component: SearchArtistsComponent }
  { path: 'search', component: SearchArtistsComponent },
  { path: 'artist', component: ViewArtistComponent },
  { path: 'artist/:id', component: ViewArtistComponent },

  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchArtistsComponent,
    ViewArtistComponent,
    SidenavListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppMaterialModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireModule,
    HttpClientModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    LayoutModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes),
    UICarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
