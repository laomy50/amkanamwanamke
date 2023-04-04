import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // emailjs
  
  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_tz6kcxq', 'template_v5wim5d', e.target as HTMLFormElement, 'B6644dbZmRt9ab4RL')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error: { text: any; }) => {
        console.log(error.text);
      });
  }
  // end

  sendContact(){
    var params = {
      from_name : document.getElementById
    }
  }
}
