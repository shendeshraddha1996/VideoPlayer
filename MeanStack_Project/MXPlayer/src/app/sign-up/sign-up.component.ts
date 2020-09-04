import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {  FormBuilder,FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import{faPlayCircle}from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  collapsed = true;
  faPlayCircle=faPlayCircle;
  myFormGroup=this.fb.group({
    FirstName:['',[Validators.required,Validators.pattern(/[A-Za-z ]{3,20}$/)]],
    LastName: ['',[Validators.required,Validators.pattern(/[A-Za-z ]{3,20}$/)]],
    Email: 	  ['',[Validators.required,Validators.pattern(/^[A-Za-z0-9._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/)]],
    Password:['',[Validators.required,Validators.pattern(/^(?=.*[0-9])(?=.*[!@#%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/)]]
  });


  constructor(private router: Router,private fb:FormBuilder,private http: HttpClient) {}

  ngOnInit(): void {
  }

async RegisterHere() {
  const data = this.myFormGroup.value;

  const url = 'http://localhost:3000/AddUser';
  await this.http.post(url, data).toPromise();

  this.myFormGroup.reset();
  this.router.navigate(['login']);
}
}



