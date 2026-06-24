import { Component, signal } from '@angular/core';
import { form, FormField, minLength, required } from '@angular/forms/signals';
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
    email: 'test',
    password: 'test'
  })

  loginForm = form(this.loginFormModel, (login) => {
    required(login.email),
    required(login.password),
    minLength(login.password, 8)
  })
  
  isEmailValid() {
  }

  onSubmit(event: Event) {
    event.preventDefault()
    event.stopPropagation()
    // console.log(this.loginForm().controlValue())
    console.log(this.loginForm.password().valid());
    console.log(this.loginForm.password().errors());
    console.log(this.loginForm().errors());
  }

}
