import { Component, inject, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category/category-service';
import { CategoryModel } from '../../model/category-model';

@Component({
  selector: 'app-category-component',
  imports: [],
  templateUrl: './category-component.html',
  styleUrl: './category-component.css'
})
export class CategoryComponent implements OnInit {
  protected listCategories: CategoryModel[];
  
  constructor(private categoryService: CategoryService) {
    this.listCategories = [];
  }
  
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe({
      next: (data) => {
        this.listCategories = data;
      },
      error: (err) => {
        console.error('Erro ao carregar categorias', err);
      }
    });
  }

}
