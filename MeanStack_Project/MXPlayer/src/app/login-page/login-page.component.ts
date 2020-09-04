import { Component, OnInit } from '@angular/core';
import {  FormBuilder,FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import{faPlayCircle}from '@fortawesome/free-solid-svg-icons';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
    faPlayCircle=faPlayCircle;
    public uiCredential=false;
  myFormGroup=this.fb.group({
    Email: 	  ['',[Validators.required,Validators.pattern(/^[A-Za-z0-9._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/)]],
    Password:['',[Validators.required,Validators.pattern(/^(?=.*[0-9])(?=.*[!@#%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/)]] 
  });
  constructor(private router: Router,private fb:FormBuilder,private http: HttpClient) {}
  ngOnInit(): void {
  }

  async loginuser() {
    
    const data = this.myFormGroup.value;
    const url = 'http://localhost:3000/AuthenticateUser';
    const output: any = await this.http.post(url, data).toPromise();
    if (output && output.opr) {
      sessionStorage.setItem('sid', 'true');
      this.router.navigate(['home']);
    } else {
      this.uiCredential=true;
     // this.router.navigate(['login']);
    }
  }

}
