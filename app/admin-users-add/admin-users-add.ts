import { Component, inject, signal } from '@angular/core';
import { InputGroup } from "primeng/inputgroup";
import { InputText } from "primeng/inputtext";
import { InputGroupAddon } from "primeng/inputgroupaddon";
import { ButtonModule } from "primeng/button";
import { FloatLabelModule } from "primeng/floatlabel";
import { CardModule } from "primeng/card";
import { form, FormField } from '@angular/forms/signals';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { HongfaService } from '../services/hongfa.service';
interface userData {
  username: string;
  email: string;
  password: string;
}

@Component({
  selector: 'admin-users-add',
  imports: [
    InputGroup,
    InputText,
    InputGroupAddon,
    ButtonModule,
    FloatLabelModule,
    CardModule,
    FormField,
    SelectModule,
    FormsModule
  ],
  templateUrl: './admin-users-add.html',
  styleUrl: './admin-users-add.css',
})

export class AdminUsersAdd {
  roles = [
    { name: 'Admin', code: 'ADM' },
    { name: 'User', code: 'USR' },
    { name: 'Guest', code: 'GST' }
  ];

  hongfaService = inject(HongfaService);

  selectedRole: { name: string; code: string } = { name: 'User', code: 'USR' };

  addUserModel = signal<userData>({
    username: '',
    email: '',
    password: ''
  });

  addUserForm = form(this.addUserModel);

  onSubmit(event: Event) {
    event.preventDefault();
    console.log("username:", this.addUserModel().username, "\nemail:", this.addUserModel().email, "\nrole:", this.selectedRole.code, "\npassword:", this.addUserModel().password);

    this.hongfaService.addUser(this.addUserModel().username, this.addUserModel().email, this.selectedRole.code, this.addUserModel().password).subscribe({
      next: (response: any) => {
        console.log("User added successfully:", response);
        // Optionally, reset the form or provide feedback to the user
      },
      error: (error: any) => {
        console.error("Error adding user:", error);
        // Optionally, provide feedback to the user about the error
      }
    });
  }
}
