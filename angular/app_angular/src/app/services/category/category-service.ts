import { Injectable } from '@angular/core';

export interface ICategoryItem {
  name: string;
  id: string;
}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  getCategories(): ICategoryItem[] {
    return [
      { name: 'Category 1', id: '1' },
      { name: 'Category 2', id: '2' },
      { name: 'Category 3', id: '3' }
    ];
  }
}
