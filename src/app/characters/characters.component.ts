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
