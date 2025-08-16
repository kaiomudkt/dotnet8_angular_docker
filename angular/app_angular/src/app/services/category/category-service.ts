import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { CategoryModel } from '../../model/category-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // <--- isso diz ao Angular para registrar o serviço no injector global
})
export class CategoryService {
  private apiDotnet: string;
  private apiCategory: string;

  constructor(private http: HttpClient) {
    this.apiDotnet = environment.api_dotnet;
    console.log('API URL:', this.apiDotnet);
    this.apiCategory = `${this.apiDotnet}/categoria`;
  }

  getCategories(): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>(this.apiCategory);
  }

  getCategoryById(id: number): Observable<CategoryModel> {
    return this.http.get<CategoryModel>(`${this.apiCategory}/${id}`);
  }

  createCategory(category: CategoryModel): Observable<CategoryModel> {
    return this.http.post<CategoryModel>(this.apiCategory, category);
  }

  updateCategory(id: number, category: CategoryModel): Observable<CategoryModel> {
    return this.http.put<CategoryModel>(`${this.apiCategory}/${id}`, category);
  }

  deleteCategory(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiCategory}/${id}`);
  }

}
