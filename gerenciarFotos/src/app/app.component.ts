import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photos = [
    {
      url:"https://i.pinimg.com/474x/a9/cc/a7/a9cca7614b528b291b15aa6a80e9931c.jpg",
      description:"Carro Antigo"
    },
    {
      url:"https://scanautomotive.com/wp-content/uploads/2020/10/2016-Porsche-GT4-P0082-IMG_4-300x225.jpg",
      description:"Ferrari Amarela"
    }
  ]
}


