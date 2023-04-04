import { Component, OnInit } from '@angular/core';
import { MenufService } from 'src/app/services/menuf.service';

@Component({
  selector: 'app-menuf',
  templateUrl: './menuf.component.html',
  styleUrls: ['./menuf.component.css']
})
export class MenufComponent implements OnInit {

  carData:any;
  constructor(private service:MenufService) { }

  ngOnInit(): void {
    this.carData = this.service.carDetails;
  }

}
