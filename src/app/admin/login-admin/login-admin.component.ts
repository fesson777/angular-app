import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { User } from 'src/app/shared/interfaces';
import { AuthServices } from '../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent implements OnInit {

  form: FormGroup

  constructor(
    private auth: AuthServices,
    private router: Router
  ) { }

  ngOnInit(): any{
    this.form = new FormGroup({
      email: new FormControl(null, [
        Validators.email,
        Validators.required
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ])
    })
  }

  sumbit() {
    console.log(this.form)
    if(this.form.invalid) {
      return
    }

    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password
    }

    this.auth.login(user).subscribe(()=> {
      this.form.reset()
      this.router.navigate(['/admin', 'dashboard'])
    })
  }

}
