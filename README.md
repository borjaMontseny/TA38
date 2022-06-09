# TA38 Parte 1

![image](https://user-images.githubusercontent.com/68342939/172796334-0249feb0-afce-475e-8636-ac27e2a2b9f3.png)

## service.ts
```js script
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetListaService {

  constructor() { }

  retornar(){
    return [
      {
        id: 1,
        name: "Rick Sanchez",
        status: "Alive",
        species: "Human",
        gender: "Male",
        origin: "Earth",
        location: "Earth",
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
      },
      {
        id: 2,
        name: "Morty Smith",
        status: "Alive",
        species: "Human",
        gender: "Male",
        origin: "Citadel of Ricks",
        location: "Earth",
        image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
      },
      {
        id: 3,
        name: "Summer Smith",
        status: "Alive",
        species: "Human",
        gender: "Female",
        origin: "Earth (Replacement Dimension)",
        image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
      },
      {
        id: 4,
        name: "Beth Smith",
        status: "Dead",
        species: "Human",
        gender: "Female",
        origin: "Earth (Replacement Dimension)",
        location: "Earth",
        image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg"
      },
      {
        id: 5,
        name: "Jerry Smith",
        status: "Dead",
        species: "Human",
        gender: "Male",
        origin: "Earth (Replacement Dimension)",
        location: "Earth",
        image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg"
      }
    ]
  }
}
```
## characters.component.ts
```js script
import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { GetListaService } from './get-lista.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  title = 'characters'

  characters: any = null;

  constructor(private getListaService: GetListaService) { }

  ngOnInit(): void {
    this.characters = this.getListaService.retornar();
  }

}
```
