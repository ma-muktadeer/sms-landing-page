import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-money-back-slider',
  imports: [NgOptimizedImage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './money-back-slider.html',
  styleUrl: './money-back-slider.css',
})
export class MoneyBackSlider {
  readonly cards = [
    { title: 'শিক্ষা ব্যবস্থাপনার সকল সমাধান', img: 'h-ss.png' },
    { title: 'রকেটের গতিতে প্রতিষ্ঠান পরিচালনা', img: 'h-ss1.png' },
    { title: 'ফি কালেকশন হবে ডিজিটাল', img: 'square .png' },
    { title: 'আধুনিক ব্যবস্থাপনা', img: 'fiss.jpeg' },
    { title: 'আধুনিক ব্যবস্থাপনা', img: 'h-ss1.png' },
  ];
}

