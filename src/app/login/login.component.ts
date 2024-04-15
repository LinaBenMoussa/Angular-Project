import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/authenticate.service';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private session: SessionService,private fb: FormBuilder, private authService: AuthService,private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      uName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm) {

      const loginModel = {
        email: this.loginForm.value.uName,
        motDePasse: this.loginForm.value.password,
        role:0,
        token: ""
      };
      console.log("loginmodel",loginModel);
      this.authService.authenticate(loginModel).subscribe(
        (response) => {
          console.log(response); 
          this.session.setUserId(response.id_compte);
          this.session.setUserName(response.email);
          this.session.setUserRole(response.role);
          console.log("user id",this.session.getUserId());
          console.log("user name",this.session.getUserName());
          this.loginForm.reset();
          this.router.navigate(['/home']);
        },
        (error) => {
          console.error(error); // Gérez les erreurs ici, par exemple, affichage d'un message d'erreur à l'utilisateur
        }
      );
    }
  }
}
