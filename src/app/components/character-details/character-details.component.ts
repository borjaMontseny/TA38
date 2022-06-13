import { Character } from 'src/app/models/character.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {

  currentCharacter: any;
  message = '';

  constructor(
    private characterService: CharacterService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getCharacter(this.route.snapshot.paramMap.get('id'));
  }

  getCharacter(id: string | null): void {
    this.characterService.getItem(id)
      .subscribe(
        (character: null) => {
          this.currentCharacter = character;
          console.log(character);
        },
        (error: any) => {
          console.log(error);
        });
  }

  setAvailableStatus(status: any): void {
    const data = {
      name: this.currentCharacter.name,
      status: this.currentCharacter.status,
      species: this.currentCharacter.species,
      gender: this.currentCharacter.gender,
      origin: this.currentCharacter.origin,
      location: this.currentCharacter.location,
      image: this.currentCharacter.image
    };

    this.characterService.update(this.currentCharacter.id, data)
      .subscribe(
        response => {
          this.currentCharacter.available = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateCharacter(): void {
    this.characterService.update(this.currentCharacter.id, this.currentCharacter)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The character was updated!';
        },
        error => {
          console.log(error);
        });
  }

  deleteCharacter(): void {
    this.characterService.delete(this.currentCharacter.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/characters']);
        },
        error => {
          console.log(error);
        });
  }
}
