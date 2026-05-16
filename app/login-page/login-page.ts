import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import { MenubarModule } from "primeng/menubar";
import { InputGroup } from "primeng/inputgroup";
import { InputGroupAddonModule } from "primeng/inputgroupaddon";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { form, FormField } from '@angular/forms/signals';
import { HongfaService } from '../services/hongfa.service';

interface LoginData {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login-page',
  imports: [
    NgOptimizedImage,
    MenubarModule,
    InputGroup,
    InputGroupAddonModule,
    InputTextModule,
    ButtonModule,
    FormField,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login-page.html',
  styleUrl: './login-page.css'
})
export class LoginPage {

  hongfaService: HongfaService = inject(HongfaService);
  loginModel = signal<LoginData>({
    username: '',
    password: '',
  });

  loginForm = form(this.loginModel);

  onSubmit(event: Event) {
    event.preventDefault();
    console.log("username:", this.loginModel().username, "\npassword:", this.loginModel().password);

    this.hongfaService.login(this.loginModel().username, this.loginModel().password).subscribe({
      next: (response) => {
        console.log("Login successful:", response);
      },
      error: (error) => {
        console.error("Login failed:", error);
      }
    });
  }
}