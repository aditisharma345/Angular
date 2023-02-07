import { Component } from '@angular/core';
/*  FormControl will handle single input field*/
/* FormGroup will handle the complete form  */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'/* '{{gettitle()}}' */,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
 
  /* courses=["hbgvfc","jnhbgv"]
  gettitle(){
    return this.title;
  }
  constructor(){
    setTimeout(() => {
      this.title="my-first-AppComponent";
    }, 1000);
  } */
}
