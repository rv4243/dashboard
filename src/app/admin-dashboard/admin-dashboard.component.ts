import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../service/productservice.service';
import { Product } from '../product.model';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  standalone: true,
  imports:[CommonModule,ReactiveFormsModule],
})
export class AdminDashboardComponent {
  productForm: FormGroup;

  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      description: [''],
      imageUrl: [''],
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      this.productService.addProduct(this.productForm.value).subscribe((res) => {
        console.log('Product added successfully');
        // You can refresh the product list or show a message
      });
    }
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      console.log('Product deleted successfully');
      // Refresh the product list
    });
  }

  products: Product[] = [];

ngOnInit() {
  this.productService.getProducts().subscribe((data) => {
    this.products = data;
  });
}

}
