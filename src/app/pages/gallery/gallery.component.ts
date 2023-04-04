import { Component, OnInit } from '@angular/core';
import { MenucService } from 'src/app/services/menuc.service';
import { MenudService } from 'src/app/services/menud.service';
import { MenufService } from 'src/app/services/menuf.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  cultureData:any;
  carData:any;
  decoData:any;
  constructor(private service1:MenucService,private service2:MenudService,private service3:MenufService) { }

  ngOnInit(): void {
    this.cultureData = this.service1.cultureDetails;
    this.decoData = this.service2.decoDetails;
    this.carData = this.service3.carDetails;
  }

}
