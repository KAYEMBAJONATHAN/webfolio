import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
 userForm: any;

 constructor(public formBuilder: FormBuilder) {

 }
 ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: [null],
      email: [null],
      message: [null]
    })
 }
 onSubmit() {
    console.log('submitted', this.userForm.value);
 }
}
