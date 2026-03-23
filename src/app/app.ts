import { Component, signal, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { filter, map, mergeMap } from 'rxjs';
import { Navbar } from "./layout/navbar/navbar";
import { Footer } from "./layout/footer/footer";
import { SeoService } from './services/seo.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('landing-page');

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private seoService: SeoService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter(route => route.outlet === 'primary'),
      mergeMap(route => route.data)
    ).subscribe((event) => {
      if (event['meta']) {
        this.seoService.updateMetaTags(event['meta']);
      }
      
      if (isPlatformBrowser(this.platformId)) {
        this.seoService.updateCanonicalUrl(window.location.href.split('?')[0]);
      } else {
        this.seoService.updateCanonicalUrl('https://mentorerp.com' + this.router.url.split('?')[0]);
      }
    });
  }
}
