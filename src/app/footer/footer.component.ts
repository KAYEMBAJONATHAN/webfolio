import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  linkedIn = '';
  emailAdress = '';

  constructor (public router: Router){}

  OnHome() {
    this.router.navigate([])
  }
  OnAbout() {
    this.router.navigate([])
  }
  OnContact(){
    this.router.navigate([])
  }
  OnEmail() {
    this.router.navigate([])
  }
}
