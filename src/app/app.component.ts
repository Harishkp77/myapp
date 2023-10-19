import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstname = 'myapp';
  receivedPhoneNumber: string = '';
  handlePhoneEvent(phoneNumber: string) {
    this.receivedPhoneNumber = phoneNumber;
  }

}
