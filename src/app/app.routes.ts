
import { Routes } from '@angular/router';
import { Create } from './pages/create/create/create';
import { Home } from './pages/home/home';
import { Future } from './pages/future/future';
import { WhyEduman } from './pages/why-eduman/why-eduman';
import { DemoVideo } from './pages/demo-video/demo-video';
import { GraphicalView } from './pages/graphical-view/graphical-view';
import { LiveSoftware } from './pages/live-software/live-software';
import { Tutorial } from './pages/tutorial/tutorial';
import { PriceList } from './pages/price-list/price-list';
import { Blog } from './pages/blog/blog';
import { Support } from './pages/support/support';
import { FaqPage } from './pages/faq-page/faq-page';


export const routes: Routes = [
    {
        path: '', loadComponent: () => Home, pathMatch: 'full'
    },
    {
        path: 'future', loadComponent: () => Future, pathMatch: 'full'
    },
    {
        path: 'why-eduman', loadComponent: () => WhyEduman, pathMatch: 'full'
    },
    {
        path: 'demo/video', loadComponent: () => DemoVideo, pathMatch: 'full'
    },
    {
        path: 'graphical/view', loadComponent: () => GraphicalView, pathMatch: 'full'
    },
    {
        path: 'live-software', loadComponent: () => LiveSoftware, pathMatch: 'full'
    },
    {
        path: 'tutorial', loadComponent: () => Tutorial, pathMatch: 'full'
    },
    {
        path: 'pricing', loadComponent: () => PriceList, pathMatch: 'full'
    },
    {
        path: 'blog', loadComponent: () => Blog, pathMatch: 'full'
    },
    {
        path: 'support', loadComponent: () => Support, pathMatch: 'full'
    },
    {
        path: 'faq', loadComponent: () => FaqPage, pathMatch: 'full'
    },

    {
        path: 'create', loadComponent: () => Create, pathMatch: 'full'
    },


    { path: '**', redirectTo: '' }
];