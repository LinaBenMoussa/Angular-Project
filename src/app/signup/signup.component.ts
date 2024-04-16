import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Compte } from '../Models/Compte.model';
import { Client } from '../Models/Client.model';

import { AuthService } from '../services/authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  constructor(private router: Router, private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      fName: ['', Validators.required],
      uName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.pattern('^\\d{10}$')], // Validation pour un numéro de téléphone à 10 chiffres
      password: ['', Validators.required],
      cPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log("form value",this.signupForm.value);
    if (this.signupForm) {
      console.log("on a dans le if");
      // Créez un objet Compte à partir des valeurs du formulaire
      const compte: Compte = {
        id_compte: 0,
        email: this.signupForm.value.email,
        motDePasse: this.signupForm.value.password,
        role: 0, 
        token: '' 
      };
      console.log("le compte est",compte)

      // Appelez la méthode du service AuthService pour enregistrer le compte
      this.authService.registerCompte(compte).subscribe(
        (response) => {
          const idCompte = response.id_compte;
          console.log("response est ",idCompte); // Gérez la réponse du backend ici
          const client : Client={
            id_client: 0,
            name: this.signupForm.value.fName,
            prenom: this.signupForm.value.uName,
            dateNaissance: new Date(),
            telephone: parseInt(this.signupForm.value.phone, 10),
            id_compte: idCompte
          }
          console.log("client est",client)
          this.authService.registerClient(client).subscribe(
            (response) => {
              console.log("la reponse est ",response); // Gérez la réponse du backend ici
              this.router.navigate(['/login']);
              this.signupForm.reset();
            }
          )
          this.signupForm.reset();
        },
        (error) => {
          console.error(error); // Gérez les erreurs ici
        }
      );
      

     
    }
  }
}
