import { Component } from '@angular/core';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.css']
})
export class CookiesComponent {
  displaynotification:boolean=false;
  closenotification()
  {
    this.displaynotification=true;
  }
}
