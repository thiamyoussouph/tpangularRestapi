import {Component, OnInit} from '@angular/core';
import {Apprenant} from "../../models/Apprenant";

import {AprenantService} from "../services/aprenant.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-apprenants',
  templateUrl: './apprenants.component.html',
  styleUrls: ['./apprenants.component.css']
})
export class ApprenantsComponent implements OnInit{
  donnes:Apprenant[]=[]
  apprenantForm: FormGroup;


  constructor(private apprenantService:AprenantService , private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getApprenants();
    this.initForm();
  }
  getApprenants() {
    this.apprenantService.getApprenants().subscribe((data) => {
      if (data.success) {
        this.donnes = data.data;
      } else {
        console.log("La requête n'a pas réussi.");
      }
    }, (error) => {
      console.log(error);
    });
  }



  initForm() {
    this.apprenantForm = this.fb.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.apprenantForm.valid) {
      const nouvelApprenant: Apprenant = this.apprenantForm.value;

      this.apprenantService.ajouterApprenant(nouvelApprenant).subscribe(
        (response) => {
          console.log('Apprenant ajouté avec succès !', response);
          this.apprenantForm.reset(); // Réinitialisez le formulaire après l'ajout réussi
          this.getApprenants(); // Rafraîchissez la liste des apprenants
        },
        (error) => {
          console.error('Erreur lors de l\'ajout de l\'apprenant :', error);
        }
      );
    }
  }

}
