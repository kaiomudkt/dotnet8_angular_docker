import { Component } from '@angular/core';
import { BtnPrimary } from "../btn-primary/btn-primary";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'category-form',
  imports: [BtnPrimary, ReactiveFormsModule],
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.css'
})
export class CategoryFormComponent {
  categoryForm!: FormGroup

  constructor() {
    this.categoryForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required])
    })
  }

  onSubmit() {
    console.log(this.categoryForm.value)
  }
}
