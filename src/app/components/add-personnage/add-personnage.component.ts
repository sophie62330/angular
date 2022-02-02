import { PersonnageService } from './../../services/personnage.service';

import { Component, Output, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PersonnageListComponent } from '../personnage-list/personnage-list.component';
import { EventEmitter } from '@angular/core';

export interface Personnage {
  id:number;
  active:boolean;
  title:string;
  statut:string;
}

@Component({
  selector: 'app-add-personnage',
  templateUrl: './add-personnage.component.html',
  styleUrls: ['./add-personnage.component.scss']
})

export class AddPersonnageComponent implements OnInit {

  formulaire: FormGroup;
  personnage:Personnage;

  constructor(private personnageService: PersonnageService) {
    this.formulaire=new FormGroup({
      name:new FormControl(),
      title: new FormControl()
    })
    this.personnage = {} as Personnage;
   }

   @Output() personnageCreated = new EventEmitter<Personnage>();

  ngOnInit(): void {
 
  }

  save(){
    this.personnageService.create(this.formulaire.value).subscribe({
      next:()=>null,
      error:err =>console.error(err),
      complete:()=>console.log("personnage ajouté") 
    
    })
    console.log(this.formulaire.value)
  }

  onAddPersonnage(){
    const personnage={
      id:this.personnage.id,
      active:this.personnage.active,
      title:this.personnage.title,
      statut:this.personnage.statut
    }
    this.personnageCreated.emit(personnage);
  }
}
