import { Component, Input } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  title="Angular Reactive Form";
  contactForm=new FormGroup({
    name:new FormControl(),
    uname:new FormControl(),
    email:new FormControl()
  });
  submit(){
    const mes=`Hello ${this.contactForm.value.name}!`
    alert(mes)
    console.warn(this.contactForm.value)
  }

}
