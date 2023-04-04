import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenudService } from 'src/app/services/menud.service';

@Component({
  selector: 'app-menupaged',
  templateUrl: './menupaged.component.html',
  styleUrls: ['./menupaged.component.css']
})
export class MenupagedComponent implements OnInit {

 
constructor(private param:ActivatedRoute, private service:MenudService) { }
getMenuId:any;
menuData:any;
  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId,'getmenud');

    if(this.getMenuId){
     this.menuData = this.service.decoDetails.filter((value)=>{
        return value.id == this.getMenuId;
      });
      console.log(this.menuData, 'menudata>>')
    }
  }

}
