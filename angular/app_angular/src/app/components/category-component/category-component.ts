import { Component, inject } from '@angular/core';
import { CategoryService, ICategoryItem } from '../../services/category/category-service';

@Component({
  selector: 'app-category-component',
  imports: [],
  templateUrl: './category-component.html',
  styleUrl: './category-component.css'
})
export class CategoryComponent {
  protected listCategories: ICategoryItem[] = inject(CategoryService).getCategories();
  
}
