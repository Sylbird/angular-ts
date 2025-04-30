import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [ButtonModule, CardModule, CarouselModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent implements OnInit {
  products = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  responsiveOptions: any[] | undefined;

  prodIndex = this.products.length;

  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: '2200px',
        numVisible: 4,
        numScroll: 4,
      },
      {
        breakpoint: '1760px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '1320px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '880px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
}
