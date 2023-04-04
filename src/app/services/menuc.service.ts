import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenucService {

  constructor() { }

  
// cardetails
cultureDetails = [
  {
    id:1,
    // carName:"Alphard",
    // carBrand:"Toyota",
    // carPrice:200,
   cultureImage:"../../../assets/kichanga-lodge.jpg"
  },
  {
    id:2,
    // carName:"Harrier",
    // carBrand:"Lexus",
    // carPrice:250,
    cultureImage:"../../../assets/ZUU 25.png"
  },
  {
    id:3,
    // carName:"Harrier",
    // carBrand:"Toyota",
    // carPrice:220,
    cultureImage:"../../../assets/unnamed.webp"
  },
  {
    id:4,
    // carName:"Noah",
    // carBrand:"Toyota",
    // carPrice:200,
    cultureImage:"../../../assets/IMG-20220926-WA0077.jpg"
  },
  {
    id:5,
    // carName:"BMW M5",
    // carBrand:"BMW",
    // carPrice:300,
    cultureImage:"../../../assets/IMG-20220926-WA0076.jpg"
  },
  {
    id:6,
    // carName:"Mercede Benz",
    // carBrand:"Mercede",
    // carPrice:400,
    cultureImage:"../../../assets/eight.jpg"
  },
  ]
}
