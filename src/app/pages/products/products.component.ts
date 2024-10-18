import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';



@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatButtonModule,MatCardModule,MatToolbarModule,CommonModule, HttpClientModule,MatListModule,MatSidenavModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  providers: [HttpClient]
})
export class ProductsComponent implements OnInit {
  imageList : Array<any> = [];
  filteredList : Array<any> = [];


  ngOnInit() {
    this.getData();
  }

  constructor(public router: Router,
            public httpClient: HttpClient
  ) { }

  getData() {
    let url : string = '/assets/data/products.json';
    this.httpClient.get(url).subscribe((data: any) => {
      console.log(data);
      this.imageList = (data && data.items && data.items.length > 0 ) ? data.items : [];
      this.doFilter();
    });
  }

  doFilter(input: any = null) {
    if(input) {
      this.filteredList = (this.imageList && this.imageList.length > 0) ? this.imageList.filter((x:any) => {
        return (x && x.gender === input) ? true : false;
      }) : []
    } else {
      this.filteredList = this.imageList;
    }
  }

  onCardClick(route: string) {
    this.router.navigate([route]);
  }
}
