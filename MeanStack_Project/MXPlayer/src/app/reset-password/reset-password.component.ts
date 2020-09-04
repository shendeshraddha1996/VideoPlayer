import { Component, OnInit } from '@angular/core';
import {  FormBuilder,FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import{faPlayCircle}from '@fortawesome/free-solid-svg-icons';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
    faPlayCircle=faPlayCircle;
    myFormGroup=this.fb.group({
      Email: 	  ['',[Validators.required,]],
      Password:['',[Validators.required,Validators.pattern(/^(?=.*[0-9])(?=.*[!@#%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/)]] 
      
  });

  constructor(private router: Router,private fb:FormBuilder,private http: HttpClient) {}

  ngOnInit(): void {
  }

  async resetpassword() {
    const data = this.myFormGroup.value;
    const url = 'http://localhost:3000/resetpassword';
    await this.http.post(url, data).toPromise();
    this.router.navigate(['login']);
  }
  
}
