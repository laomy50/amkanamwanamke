import { Component, OnInit } from '@angular/core';
import { MenudService } from 'src/app/services/menud.service';

@Component({
  selector: 'app-menud',
  templateUrl: './menud.component.html',
  styleUrls: ['./menud.component.css']
})
export class MenudComponent implements OnInit {

  decoData:any;
  constructor(private service:MenudService) { }

  ngOnInit(): void {
    this.decoData = this.service.decoDetails;
  }

}
