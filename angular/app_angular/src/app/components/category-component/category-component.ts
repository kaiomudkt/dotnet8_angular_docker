import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category/category-service';
import { CategoryModel } from '../../model/category-model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Header } from "../header/header";
import { CategoryFormComponent } from "../category-form.component/category-form.component";

@Component({
  selector: 'app-category-component',
  templateUrl: './category-component.html',
  styleUrl: './category-component.css',
  standalone: true,
  imports: [CommonModule, Header, CategoryFormComponent],
})
export class CategoryComponent implements OnInit {
  protected listCategories$!: Observable<CategoryModel[]>;

  trackById(index: number, category: CategoryModel): number {
    return category.id ? parseInt(category.id, 10) : 0;
  }

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.listCategories$ = this.categoryService.getCategories();
  }
}
