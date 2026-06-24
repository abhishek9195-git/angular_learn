import { Component, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { RouterOutlet } from '@angular/router';

export interface LoginFormData {
  email: string 
  password: string 
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormField],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('myapp');

  loginFormModel = signal<LoginFormData>({
    email: '',
    password: ''
  })

  loginForm = form(this.loginFormModel)
  
  isEmailValid() {
  }

  onSubmit(event: Event) {
    event.preventDefault()
    event.stopPropagation()
    console.log(this.loginForm.email())
  }

}
