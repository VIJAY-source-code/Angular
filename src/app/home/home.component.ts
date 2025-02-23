import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories: string[] = [];
  products: any[] = [];
  searchQuery: string = '';
  searchResults: any[] = [];

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.apiService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  loadProducts(category: string): void {
    this.apiService.getProductsByCategory(category).subscribe(data => {
      this.products = data;
    });
  }

  viewProduct(id: number): void {
    this.router.navigate(['/product', id]);
  }

  searchProducts(): void {
    if (this.searchQuery.length > 0) {
      this.apiService.getAllProducts().subscribe(products => {
        this.searchResults = products.filter(product =>
          product.title.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      });
    } else {
      this.searchResults = [];
    }
  }
}
