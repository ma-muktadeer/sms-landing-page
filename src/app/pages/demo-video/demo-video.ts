import { Component } from '@angular/core';
import { Featuress } from "../../components/feature-component/featuress/featuress";
import { Cards } from "../../components/feature-component/cards/cards";
import { MoneyBackSlider } from "../../components/home-coponent/money-back-slider/money-back-slider";
import { VideoShowcaseSection } from '../../components/home-coponent/video-showcase-section/video-showcase-section';

@Component({
  selector: 'app-demo-video',
  imports: [Featuress, VideoShowcaseSection, Cards, MoneyBackSlider],
  templateUrl: './demo-video.html',
  styleUrl: './demo-video.css',
})
export class DemoVideo {

}
