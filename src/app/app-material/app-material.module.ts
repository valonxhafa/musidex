import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatGridListModule,
    MatIconModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatGridListModule,
    MatIconModule
  ],
  declarations: []
})


export class AppMaterialModule {
}
