import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'shopping',
    loadChildren: () => import('./pages/shopping/shopping.module').then( m => m.ShoppingPageModule)
  },
  {
    path: 'shipping',
    loadChildren: () => import('./pages/shipping/shipping.module').then( m => m.ShippingPageModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import('./pages/favorites/favorites.module').then( m => m.FavoritesPageModule)
  },
  {
    path: 'myorders',
    loadChildren: () => import('./pages/myorders/myorders.module').then( m => m.MyordersPageModule)
  },
  {
    path: 'message',
    loadChildren: () => import('./pages/message/message.module').then( m => m.MessagePageModule)
  },
  {
    path: 'post-requirement',
    loadChildren: () => import('./pages/post-requirement/post-requirement.module').then( m => m.PostRequirementPageModule)
  },
  {
    path: 'view-all-catogaries',
    loadChildren: () => import('./pages/view-all-catogaries/view-all-catogaries.module').then( m => m.ViewAllCatogariesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
