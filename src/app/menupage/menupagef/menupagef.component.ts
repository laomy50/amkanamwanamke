import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenufService } from 'src/app/services/menuf.service';

@Component({
  selector: 'app-menupagef',
  templateUrl: './menupagef.component.html',
  styleUrls: ['./menupagef.component.css']
})
export class MenupagefComponent implements OnInit {

 
constructor(private parm:ActivatedRoute, private service:MenufService) { }
getMenuId:any;
menuData:any;
  ngOnInit(): void {
    this.getMenuId = this.parm.snapshot.paramMap.get('id');
    console.log(this.getMenuId,'getmenuf');

    if(this.getMenuId){
     this.menuData = this.service.carDetails.filter((value)=>{
        return value.id == this.getMenuId;
      });
      console.log(this.menuData, 'menudata>>')
    }
  }
}
