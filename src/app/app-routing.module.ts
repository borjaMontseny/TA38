import { AddCharacterComponent } from './components/add-character/add-character.component';
import { AboutComponent } from './about/about.component';
import { CharactersComponent } from './characters/characters.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'characters',
    component: CharactersComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },

  { path: '', redirectTo: 'personajes', pathMatch: 'full' },
  { path: 'personajes', component: CharacterListComponent },
  { path: 'personajes/:id', component: CharacterDetailsComponent },
  { path: 'add', component: AddCharacterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
