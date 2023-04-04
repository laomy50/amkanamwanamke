import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenucService } from 'src/app/services/menuc.service';

@Component({
  selector: 'app-menupagec',
  templateUrl: './menupagec.component.html',
  styleUrls: ['./menupagec.component.css']
})
export class MenupagecComponent implements OnInit {

 
constructor(private parm:ActivatedRoute, private service:MenucService) { }
getMenuId:any;
menuData:any;
  ngOnInit(): void {
    this.getMenuId = this.parm.snapshot.paramMap.get('id');
    console.log(this.getMenuId,'getmenu');

    if(this.getMenuId){
     this.menuData = this.service.cultureDetails.filter((value)=>{
        return value.id == this.getMenuId;
      });
      console.log(this.menuData, 'menudata>>')
    }
  }

}
