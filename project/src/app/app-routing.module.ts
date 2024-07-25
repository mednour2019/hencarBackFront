import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddConciergeComponent } from './components/concierge/add-concierge/add-concierge.component';
import { ListeConciergeComponent } from './components/concierge/liste-concierge/liste-concierge.component';
import { UpdateConciergeComponent } from './components/concierge/update-concierge/update-concierge.component';
import { VisualiseConciergeComponent } from './components/concierge/visualise-concierge/visualise-concierge.component';
import { AddContratComponent } from './components/contrat/add-contrat/add-contrat.component';
import { AddImmeubleComponent } from './components/immeuble/add-immeuble/add-immeuble.component';
import { ListeImmeubleComponent } from './components/immeuble/liste-immeuble/liste-immeuble.component';
import { UpdateImmeubleComponent } from './components/immeuble/update-immeuble/update-immeuble.component';
import { VisualiseImmeubleComponent } from './components/immeuble/visualise-immeuble/visualise-immeuble.component';

import { IndexComponent } from './components/index/index.component';
import { AddLocataireComponent } from './components/locataire/add-locataire/add-locataire.component';
import { ListeLocataireComponent } from './components/locataire/liste-locataire/liste-locataire.component';
import { UpdateLocataireComponent } from './components/locataire/update-locataire/update-locataire.component';
import { VisualiseLocataireComponent } from './components/locataire/visualise-locataire/visualise-locataire.component';
import { AddLocateurComponent } from './components/locateur/add-locateur/add-locateur.component';
import { ListeLocateurComponent } from './components/locateur/liste-locateur/liste-locateur.component';
import { UpdateLocateurComponent } from './components/locateur/update-locateur/update-locateur.component';
import { VisualiseLocateurComponent } from './components/locateur/visualise-locateur/visualise-locateur.component';
import { AddMaisonComponent } from './components/maison/add-maison/add-maison.component';
import { EtatMaisonComponent } from './components/maison/etat-maison/etat-maison.component';
import { ListeMaisonComponent } from './components/maison/liste-maison/liste-maison.component';
import { UpdateMaisonComponent } from './components/maison/update-maison/update-maison.component';
import { VisualizeMaisonComponent } from './components/maison/visualize-maison/visualize-maison.component';

const routes: Routes = [
  {path:"",component:IndexComponent},
  {
    path:"addConcierge",
    component:AddConciergeComponent
  },
  {
    path:"listeConcierge",
    component:ListeConciergeComponent
  },
  {
    path:"updateConcierge/:id",
    component:UpdateConciergeComponent
  },
  {
    path:"visualizeConcierge/:id",
    component:VisualiseConciergeComponent
  },
  {
    path:"listeLocataire",
    component:ListeLocataireComponent
  },
  {
    path:"addLocataire",
    component:AddLocataireComponent
  },
  {
    path:"visualizeLocataire/:id",
    component:VisualiseLocataireComponent
  },
  {
    path:"updateLocataire/:id",
    component:UpdateLocataireComponent
  },
  {
    path:"addLocateur",
    component:AddLocateurComponent
  },
  {
    path:"listeLocateur",
    component:ListeLocateurComponent
  },
  {
    path:"updateLocateur/:id",
    component:UpdateLocateurComponent
  },
  {
    path:"visualizeLocateur/:id",
    component:VisualiseLocateurComponent
  },
  {
    path:"listeImmeuble",
    component:ListeImmeubleComponent
  },
  {
    path:"addImmeuble",
    component:AddImmeubleComponent
  },
  {
    path:"updateImmeuble/:id",
    component:UpdateImmeubleComponent
  },
  {
    path:"visualizeImmeuble",
    component:VisualiseImmeubleComponent
  },
  {
    path:"addMaison/:id",
    component:AddMaisonComponent
  },
  {
    path:"listeMaison/:id",
    component:ListeMaisonComponent
  },
   {
    path:"visualizeMaison/:id",
    component:VisualizeMaisonComponent
  },
  {
    path:"updateMaison/:id",
    component:UpdateMaisonComponent
  },
  {
    path:"addContrat",
    component:AddContratComponent
  },
  {
    path:"etatMaison",
    component:EtatMaisonComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
