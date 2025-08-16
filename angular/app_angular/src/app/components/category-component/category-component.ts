import { Component, inject, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category/category-service';
import { CategoryModel } from '../../model/category-model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-component',
  templateUrl: './category-component.html',
  styleUrl: './category-component.css',
  standalone: true,
  imports: [CommonModule],
})
export class CategoryComponent implements OnInit {
  protected listCategories$!: Observable<CategoryModel[]>;

  trackById(index: number, category: CategoryModel): number {
    return category.id ? parseInt(category.id, 10) : 0;
  }

  constructor(private categoryService: CategoryService) {
    // this.listCategories = ;
  }

  ngOnInit(): void {
    this.listCategories$ = this.categoryService.getCategories();
  }
}
