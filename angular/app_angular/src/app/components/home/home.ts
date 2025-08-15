import { inject, Component } from '@angular/core';
import { ICategoryItem, Category } from '../../services/category';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  protected listCategories: ICategoryItem[] = inject(Category).getCategories();
  name: string = 'Kaio';
  
}
