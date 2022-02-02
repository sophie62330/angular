import { PersonnageService } from './../../services/personnage.service';
import { Component, OnInit, Input } from '@angular/core';
import { Personnage } from 'src/app/models/personnage';

@Component({
  selector: 'app-personnage-list',
  templateUrl: './personnage-list.component.html',
  styleUrls: ['./personnage-list.component.scss']
})
export class PersonnageListComponent implements OnInit {
  listePersonnages: Personnage[] = []
  value:string="";
  showActive: boolean = true;
  showAll=true;
  @Input() personnages:Personnage[]=[];
  constructor(private service : PersonnageService) { }

  ngOnInit(): void {
    console.log("Création");
    this.getAll();
    
  }

  //FONCTIONS
  /**
   * Permet d'afficher/de cacher la liste active
   * la liste passive disparait quand on appuie sur le bouton
   */
   changeActive():void{
    this.showActive=!this.showActive;
    this.showAll=false;
    console.log("allo");
    
    }



  private getAll(){
    this.service.getAll().subscribe({
      next:data=>this.listePersonnages = data,
      error:err => console.error(err),
      complete:()=>console.log("récup tous les persos ok")
  
    })
  }

  
  private getId(id:number){
    this.service.getById(id).subscribe({
      error:err => console.log(err),
      complete:()=>console.log()
    })
  }

  affiche(){
    this.getAll();
    this.showAll=true;
  }

  delete(id:number){
    this.service.delete(id).subscribe(()=>this.getAll())
  }

  btnRadio(p:Personnage){
    p.active=!p.active;
    this.service.put(p);
  }


}
