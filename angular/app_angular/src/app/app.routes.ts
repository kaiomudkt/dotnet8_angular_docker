import { Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { CategoryComponent } from './components/category-component/category-component';

export const routes: Routes = [
    // {
    //     path: '',
    //     component: HomeComponent
    // },
    {
        path: '',
        component: CategoryComponent
    },
    {
        path: 'categoria',
        component: CategoryComponent
    }
];
