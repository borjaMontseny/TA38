import { Character } from './../../models/character.model';
import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent implements OnInit {

  character: Character = {
    name: '',
    status: '',
    species: '',
    gender: '',
    origin: '',
    location: '',
    image: ''
  };

  isCharacterAdded = false;

  constructor(private charactersService: CharacterService) { }

  ngOnInit(): void {
  }

  // Add New
  addCharacter(): void {
    const data = {
      name: this.character.name,
      status: this.character.status,
      species: this.character.species,
      gender: this.character.gender,
      origin: this.character.origin,
      location: this.character.location,
      image: this.character.image
    };
    if (!data.status) {
      alert('Añade todos los campos del Character');
      return;
    }

    this.charactersService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.isCharacterAdded = true;
        },
        error => {
          console.log(error);
        });
  }

  // Reset on adding new
  newCharacter(): void {
    this.isCharacterAdded = false;
    this.character = {
      name: '',
      status: '',
      species: '',
      gender: '',
      origin: '',
      location: '',
      image: ''
    };
  }

}
