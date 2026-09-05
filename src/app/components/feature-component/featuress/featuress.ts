import { Component, input, Input } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'app-featuress',
  templateUrl: './featuress.html',
  styleUrl: './featuress.css',
  imports: [NgOptimizedImage],
})
export class Featuress {
  bgImage = input<string>('future.png');
  @Input() minHeight: string = '70vh';
}