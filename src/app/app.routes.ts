import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', loadComponent: () => import('./pages/home/home').then(m => m.Home), pathMatch: 'full',
        title: 'Home - MentorERP',
        data: { meta: [{ name: 'description', content: 'MentorERP is the best ERP solution for educational institutions.' }, { property: 'og:title', content: 'Home - MentorERP' }, { property: 'og:description', content: 'MentorERP is the best ERP solution for educational institutions.' }] }
    },
    {
        path: 'future', loadComponent: () => import('./pages/future/future').then(m => m.Future), pathMatch: 'full',
        title: 'Future Features - MentorERP',
        data: { meta: [{ name: 'description', content: 'Discover the future features of MentorERP.' }] }
    },
    {
        path: 'why-eduman', loadComponent: () => import('./pages/why-eduman/why-eduman').then(m => m.WhyEduman), pathMatch: 'full',
        title: 'Why Eduman? - MentorERP',
        data: { meta: [{ name: 'description', content: 'Learn why Eduman is the right choice for your institution.' }] }
    },
    {
        path: 'demo/video', loadComponent: () => import('./pages/demo-video/demo-video').then(m => m.DemoVideo), pathMatch: 'full',
        title: 'Demo Video - MentorERP',
        data: { meta: [{ name: 'description', content: 'Watch our demo video to see MentorERP in action.' }] }
    },
    {
        path: 'graphical/view', loadComponent: () => import('./pages/graphical-view/graphical-view').then(m => m.GraphicalView), pathMatch: 'full',
        title: 'Graphical View - MentorERP',
        data: { meta: [{ name: 'description', content: 'Explore the graphical view of our application.' }] }
    },
    {
        path: 'live-software', loadComponent: () => import('./pages/live-software/live-software').then(m => m.LiveSoftware), pathMatch: 'full',
        title: 'Live Software - MentorERP',
        data: { meta: [{ name: 'description', content: 'Experience the live software of MentorERP.' }] }
    },
    {
        path: 'tutorial', loadComponent: () => import('./pages/tutorial/tutorial').then(m => m.Tutorial), pathMatch: 'full',
        title: 'Tutorials - MentorERP',
        data: { meta: [{ name: 'description', content: 'Learn how to use MentorERP with our comprehensive tutorials.' }] }
    },
    {
        path: 'pricing', loadComponent: () => import('./pages/price-list/price-list').then(m => m.PriceList), pathMatch: 'full',
        title: 'Pricing - MentorERP',
        data: { meta: [{ name: 'description', content: 'Check out the affordable pricing plans for MentorERP.' }] }
    },
    {
        path: 'blog', loadComponent: () => import('./pages/blog/blog').then(m => m.Blog), pathMatch: 'full',
        title: 'Blog - MentorERP',
        data: { meta: [{ name: 'description', content: 'Read our latest insights, news, and tips on the MentorERP blog.' }] }
    },
    {
        path: 'support', loadComponent: () => import('./pages/support/support').then(m => m.Support), pathMatch: 'full',
        title: 'Support - MentorERP',
        data: { meta: [{ name: 'description', content: 'Get 24/7 support for your MentorERP system.' }] }
    },
    {
        path: 'faq', loadComponent: () => import('./pages/faq-page/faq-page').then(m => m.FaqPage), pathMatch: 'full',
        title: 'FAQ - MentorERP',
        data: { meta: [{ name: 'description', content: 'Read the frequently asked questions about MentorERP.' }] }
    },
    {
        path: 'create', loadComponent: () => import('./pages/create/create/create').then(m => m.Create), pathMatch: 'full',
        title: 'Create Account - MentorERP',
        data: { meta: [{ name: 'description', content: 'Create a new account on MentorERP.' }] }
    },
    { path: '**', redirectTo: '' }
];