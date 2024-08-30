import { Component, OnInit } from '@angular/core';
import { homeCarouselData } from 'src/data/mainCarousel';

@Component({
  selector: 'app-main-carousel',
  templateUrl: './main-carousel.component.html',
  styleUrls: ['./main-carousel.component.scss']
})
export class MainCarouselComponent implements OnInit {
  carouselData: any;
  currentSlide = 0;
  private autoPlayInterval: any;

  ngOnInit(): void {
    this.carouselData = homeCarouselData;  
    this.autoPlay();
  }

  autoPlay(): void {
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, 2000);
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.carouselData.length;
  }

  ngOnDestroy(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }
}
