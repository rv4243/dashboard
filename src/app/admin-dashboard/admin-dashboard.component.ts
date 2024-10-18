import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../service/productservice.service';
import { Product } from '../product.model';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  standalone: true,
  imports:[ReactiveFormsModule,CommonModule]
})
export class AdminDashboardComponent implements OnInit {
  productForm: FormGroup;
  products: Product[] = [];

  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.productForm = this.fb.group({
      id: [null],
      name: ['', Validators.required],
      price: ['', Validators.required],
      description: [''],
      imageUrl: ['']
    });
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      this.productService.addOrUpdateProduct(this.productForm.value).subscribe(() => {
        this.loadProducts(); // Reload the products after adding/updating
        this.productForm.reset();
      });
    }
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.loadProducts(); // Reload products after deletion
    });
  }
}
