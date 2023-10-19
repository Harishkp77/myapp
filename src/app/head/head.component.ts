import { Component,Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent {
@Input () name:string = "";

@Output() Phone: EventEmitter<string>= new EventEmitter<string>();

emitPhoneEvent(event:any){
this.Phone.emit((<HTMLInputElement>event.target).value )
}
}
