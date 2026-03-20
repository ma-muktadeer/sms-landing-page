import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', loadComponent: () => import('./pages/home/home').then(m => m.Home), pathMatch: 'full'
    },
    {
        path: 'future', loadComponent: () => import('./pages/future/future').then(m => m.Future), pathMatch: 'full'
    },
    {
        path: 'why-eduman', loadComponent: () => import('./pages/why-eduman/why-eduman').then(m => m.WhyEduman), pathMatch: 'full'
    },
    {
        path: 'demo/video', loadComponent: () => import('./pages/demo-video/demo-video').then(m => m.DemoVideo), pathMatch: 'full'
    },
    {
        path: 'graphical/view', loadComponent: () => import('./pages/graphical-view/graphical-view').then(m => m.GraphicalView), pathMatch: 'full'
    },
    {
        path: 'live-software', loadComponent: () => import('./pages/live-software/live-software').then(m => m.LiveSoftware), pathMatch: 'full'
    },
    {
        path: 'tutorial', loadComponent: () => import('./pages/tutorial/tutorial').then(m => m.Tutorial), pathMatch: 'full'
    },
    {
        path: 'pricing', loadComponent: () => import('./pages/price-list/price-list').then(m => m.PriceList), pathMatch: 'full'
    },
    {
        path: 'blog', loadComponent: () => import('./pages/blog/blog').then(m => m.Blog), pathMatch: 'full'
    },
    {
        path: 'support', loadComponent: () => import('./pages/support/support').then(m => m.Support), pathMatch: 'full'
    },
    {
        path: 'faq', loadComponent: () => import('./pages/faq-page/faq-page').then(m => m.FaqPage), pathMatch: 'full'
    },
    {
        path: 'create', loadComponent: () => import('./pages/create/create/create').then(m => m.Create), pathMatch: 'full'
    },
    { path: '**', redirectTo: '' }
];