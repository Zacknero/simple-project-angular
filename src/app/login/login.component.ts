import {Component, OnInit} from '@angular/core';
import {HttpServicesService} from '../http-services.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(private httpServices: HttpServicesService, private fb: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formLogin = this.fb.group({
      username: 'f.giovannini@treedom.net',
      password: 'treedom'
    });
  }

  login() {
    this.httpServices.login(this.formLogin.get('username').value, this.formLogin.get('password').value)
      .subscribe(message => {
        console.log(message);
        this.router.navigate(['/treeDomList']);
      });

  }

}
