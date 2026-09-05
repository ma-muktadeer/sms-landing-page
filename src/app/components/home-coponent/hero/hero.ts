import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { NgOptimizedImage } from "@angular/common";

register();

@Component({
  selector: 'app-hero',
  imports: [NgOptimizedImage],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Hero {

}

