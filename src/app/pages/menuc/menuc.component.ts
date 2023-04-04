import { Component, OnInit } from '@angular/core';
import { MenucService } from 'src/app/services/menuc.service';

@Component({
  selector: 'app-menuc',
  templateUrl: './menuc.component.html',
  styleUrls: ['./menuc.component.css']
})
export class MenucComponent implements OnInit {

  cultureData:any;
  constructor(private service:MenucService) { }

  ngOnInit(): void {
    this.cultureData = this.service.cultureDetails;
  }

}
