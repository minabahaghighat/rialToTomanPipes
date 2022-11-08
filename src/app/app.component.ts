import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rialToTomanPipes';
  inputAmount: number=0;

  handleInputAmount(value:number){
      this.inputAmount=value
  }
}
