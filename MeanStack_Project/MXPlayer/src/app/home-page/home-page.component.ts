import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import {faFacebook } from '@fortawesome/free-brands-svg-icons';
import {faTwitter } from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public faPlayCircle = faPlayCircle;
  constructor(private router:Router) { }
  faFacebook=faFacebook;
  faTwitter=faTwitter;
  faInstagram=faInstagram;
  faLinkedin=faLinkedin;
  collapsed=true;
  ngOnInit(): void {
   if (!sessionStorage.getItem('sid')){
      this.router.navigate(['login']);
  }
  }
  logout(){
    sessionStorage.removeItem('sid');
    this.router.navigate(['login']);
  }
}
