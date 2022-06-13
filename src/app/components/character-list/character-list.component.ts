import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {


  character: any;
  currentCharacter: any;
  currentIndex = -1;
  searchName = '';

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.getAllBooks();
  }

  // Get list
  getAllBooks(): void {
    this.characterService.list()
      .subscribe(
        (characters: any) => {
          this.character = characters;
        },
        (error: any) => {
          console.log(error);
        });
  }

  // Delete action
  deleteCharacter(id:number){
    this.characterService.delete(id)
    .subscribe(
      response => {
        this.getAllBooks();
      },
      error => {
        console.log(error);
      });
  }

  // Search items
  searchByTitle(): void {
    this.characterService.filterByName(this.searchName)
      .subscribe(
        books => {
          this.character = books;
        },
        error => {
          console.log(error);
        });
  }


}
