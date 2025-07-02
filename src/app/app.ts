import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'CoinFlip';
  headUrl = 'https://media.geeksforgeeks.org/wp-content/uploads/20200916123059/SHalfDollarObverse2016head-300x300.jpg'
  tailUrl = 'https://media.geeksforgeeks.org/wp-content/uploads/20200916123125/tails-200x200.jpg'
  imgUrl = this.headUrl

  count = 0
  heads = 0
  tails = 0
  decision = 0
  coinFlip(){
    this.count = this.count += 1;
    this.decision = Math.floor(Math.random() * 2);
    if(this.decision == 1){
      this.imgUrl = this.tailUrl
      this.tails += 1
      return this.imgUrl
    } 
    else{
    this.imgUrl = this.headUrl
    this.heads += 1
    return this.imgUrl
    }
   
  }
  Reset(){
    this.count = 0
    this.heads = 0
    this.tails = 0
  }
}
