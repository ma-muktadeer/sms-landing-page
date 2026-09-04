import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef, AfterViewInit, Inject, PLATFORM_ID, computed } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-logo-slider',
  imports: [],
  templateUrl: './logo-slider.html',
  styleUrl: './logo-slider.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LogoSlider implements AfterViewInit {
  private readonly platformId = Inject(PLATFORM_ID);
  readonly isBrowser = computed(()=>isPlatformBrowser(this.platformId));
  @ViewChild('swiperRef') swiperRef!: ElementRef;

  // constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  slides = [
    { image: 'c1.jpg', title: 'লোগো ১' },
    { image: 'c2.jpg', title: 'লোগো ২' },
    { image: 'c3.jpg', title: 'লোগো ৩' },
    { image: 'c4.png', title: 'লোগো ৪' },
    { image: 'c5.png', title: 'লোগো ৫' },
    { image: 'c6.png', title: 'লোগো ৬' },
    { image: 'c7.png', title: 'লোগো ৭' },
    { image: 'c8.png', title: 'লোগো ৮' },
    { image: 'c9.png', title: 'লোগো ৯' },
    { image: 'c10.png', title: 'লোগো ১০' }
  ];

  ngAfterViewInit() {
    if (this.isBrowser()){

      setTimeout(()=>{
        if (this.swiperRef?.nativeElement) {
          const swiperEl = this.swiperRef.nativeElement;

          const swiperParams = {
            slidesPerView: 3,
            spaceBetween: 20,
            loop: true,
            observer: true, // DOM পরিবর্তন ট্র্যাক করার জন্য
            observeParents: true,
            autoplay: {
              delay: 2500,
              disableOnInteraction: false
            },
            breakpoints: {
              640: { slidesPerView: 4 },
              1024: { slidesPerView: 6 },
              1440: { slidesPerView: 8 }
            }
          };

          Object.assign(swiperEl, swiperParams);

          if (typeof swiperEl.initialize === 'function') {
            swiperEl.initialize();
          }

        }
      },10);
    }
  }

  goPrev() {
     if (this.swiperRef?.nativeElement?.swiper) {
      this.swiperRef.nativeElement.swiper.slidePrev();
    }
  }

  goNext() {
    if (this.swiperRef?.nativeElement?.swiper) {
      this.swiperRef.nativeElement.swiper.slideNext();
    }
  }
}