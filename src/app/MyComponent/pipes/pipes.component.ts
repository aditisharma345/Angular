
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
title="ygbvfc";
title2="azsx dcsx wsed";
today=Date();
current(item:string){
  return item.toUpperCase();
}
user={
  name:"alice",
  age:"32",
  number:"123"
}
}
