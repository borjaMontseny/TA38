# TA41
Evolutivo de la TA38 a la TA41, adjunto capturas del CRUD Angular en funcionamiento

## CREATE (crear personaje)
![image](https://user-images.githubusercontent.com/68342939/173434497-9b389924-061b-43a5-93a0-1778fabe6d07.png)
<br>
![image](https://user-images.githubusercontent.com/68342939/173434539-64a458dd-f3ef-454b-bc84-ab82189ebaa1.png)
<br>
![image](https://user-images.githubusercontent.com/68342939/173434611-b078b268-0721-4651-9129-7a070774b946.png)



## READ (listar personajes)
![image](https://user-images.githubusercontent.com/68342939/173433482-27145307-0cbc-4a15-ba2d-9f0676a6d2ab.png)

## UPDATE (actualizar personaje)
![image](https://user-images.githubusercontent.com/68342939/173432756-43e0cf79-3381-469b-b09b-160c2315f799.png)

## DELETE (borrar personaje)
![image](https://user-images.githubusercontent.com/68342939/173433510-e6f3d7df-b8b9-495b-830b-0e128251d4a9.png)
![image](https://user-images.githubusercontent.com/68342939/173433575-217efacb-7ca4-4f96-9eca-a3c31602a4a4.png)


# TA38

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
