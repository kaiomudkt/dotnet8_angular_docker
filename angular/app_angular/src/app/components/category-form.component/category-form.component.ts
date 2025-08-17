import { Component, signal } from '@angular/core';
import { BtnPrimary } from "../btn-primary/btn-primary";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CategoryService } from '../../services/category/category-service';
import { CategoryModel } from '../../model/category-model';

@Component({
  selector: 'category-form',
  imports: [BtnPrimary, ReactiveFormsModule],
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.css'
})
export class CategoryFormComponent {
  categoryForm!: FormGroup
  loading = signal(false);
  constructor(private categoryService: CategoryService) {
    this.categoryForm = new FormGroup({
      name: new FormControl('', [Validators.required])
    })
  }

  onSubmit() {
    this.loading.set(true);
    const categoryModel: CategoryModel = {
      name: this.categoryForm.get('name')?.value,
    };
    this.categoryService.createCategory(categoryModel);
    this.loading.set(false);
  }
}
