import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cordova Demo';

  people = [
    {name: "Igor", desc: "Come see Igor's talk, later today at Devoxx"},
    {name: "Misko", desc: "Founder, awesome guy, AKA Papa Misko"},
    {name: "Alex", desc: "What a great developer and person"},
    {name: "Rob", desc: "Always able to answer any question you might have."}
  ];
}
