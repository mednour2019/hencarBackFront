import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AddConciergeComponent } from './components/concierge/add-concierge/add-concierge.component';
import { ListeConciergeComponent } from './components/concierge/liste-concierge/liste-concierge.component';
import { IndexComponent } from './components/index/index.component';
import { UpdateConciergeComponent } from './components/concierge/update-concierge/update-concierge.component';
import { VisualiseConciergeComponent } from './components/concierge/visualise-concierge/visualise-concierge.component';
//import { AppMaterialModule } from './module/app-material/app-material.module';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { DialogExampleComponent } from './components/dialog-example/dialog-example.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DataTableComponent } from './components/data-table/data-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ListeLocataireComponent } from './components/locataire/liste-locataire/liste-locataire.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import { AddLocataireComponent } from './components/locataire/add-locataire/add-locataire.component';
import { VisualiseLocataireComponent } from './components/locataire/visualise-locataire/visualise-locataire.component';
import { SearchfilterPipe } from './module/searchfilter.pipe';
import { UpdateLocataireComponent } from './components/locataire/update-locataire/update-locataire.component';
import { AddLocateurComponent } from './components/locateur/add-locateur/add-locateur.component';
import { ListeLocateurComponent } from './components/locateur/liste-locateur/liste-locateur.component';
import { Searchfilter2Pipe } from './module/searchfilter2.pipe';
import { UpdateLocateurComponent } from './components/locateur/update-locateur/update-locateur.component';
import { VisualiseLocateurComponent } from './components/locateur/visualise-locateur/visualise-locateur.component';
import { ListeImmeubleComponent } from './components/immeuble/liste-immeuble/liste-immeuble.component';
import { AddImmeubleComponent } from './components/immeuble/add-immeuble/add-immeuble.component';
import { Searchfilter3Pipe } from './module/searchfilter3.pipe';
import { UpdateImmeubleComponent } from './components/immeuble/update-immeuble/update-immeuble.component';
import { VisualiseImmeubleComponent } from './components/immeuble/visualise-immeuble/visualise-immeuble.component';
import { AddMaisonComponent } from './components/maison/add-maison/add-maison.component';
import { ListeMaisonComponent } from './components/maison/liste-maison/liste-maison.component';
import { VisualizeMaisonComponent } from './components/maison/visualize-maison/visualize-maison.component';
import { UpdateMaisonComponent } from './components/maison/update-maison/update-maison.component';
import { AddContratComponent } from './components/contrat/add-contrat/add-contrat.component';
import { Searchfilter4Pipe } from './module/searchfilter4.pipe';
import { Searchfilter5Pipe } from './module/searchfilter5.pipe';
import { Searchfilter6Pipe } from './module/searchfilter6.pipe';

import { EtatMaisonComponent } from './components/maison/etat-maison/etat-maison.component';












@NgModule({
  declarations: [
    AppComponent,
    AddConciergeComponent,
    ListeConciergeComponent,
    IndexComponent,
    UpdateConciergeComponent,
    VisualiseConciergeComponent,
    DialogExampleComponent,
    DataTableComponent,
    ListeLocataireComponent,
    AddLocataireComponent,
    VisualiseLocataireComponent,
    SearchfilterPipe,
    UpdateLocataireComponent,
    AddLocateurComponent,
    ListeLocateurComponent,
    Searchfilter2Pipe,
    UpdateLocateurComponent,
    VisualiseLocateurComponent,
    ListeImmeubleComponent,
    AddImmeubleComponent,
    Searchfilter3Pipe,
    UpdateImmeubleComponent,
    VisualiseImmeubleComponent,
    AddMaisonComponent,
    ListeMaisonComponent,
    VisualizeMaisonComponent,
    UpdateMaisonComponent,
    AddContratComponent,
    Searchfilter4Pipe,
    Searchfilter5Pipe,
    Searchfilter6Pipe,
   
    EtatMaisonComponent,

    
  ],
  entryComponents:[DialogExampleComponent,AddConciergeComponent,AddLocataireComponent,VisualiseLocataireComponent,AddLocateurComponent,AddImmeubleComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
   // AppMaterialModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
