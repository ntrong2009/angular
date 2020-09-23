import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListSidebarComponent } from './product-list-sidebar/product-list-sidebar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AComponentComponent } from './acomponent/acomponent.component';
import { BComponentComponent } from './bcomponent/bcomponent.component';
import { CComponentComponent } from './ccomponent/ccomponent.component';
import { DComponentComponent } from './dcomponent/dcomponent.component';

const routes: Routes = [
  // {
  //   path:"",
  //   component: SideBarComponent
  // },
  // {
  //   path: "products",
  //   component: ProductListComponent
  // },
  // {
  //   path: "products",
  //   outlet: "sidebar",
  //   component: ProductListSidebarComponent,
  // },

  {
    path: 'A',
    component: AComponentComponent,
    data: {
      state: 'AnimationA'
    }
  },
  {
    path: 'B',
    component: BComponentComponent,
    data: {
      state: 'AnimationB'
    }
  },
  {
    path: 'C',
    component: CComponentComponent,
    outlet: 'secondRouter',
    data: {
      state: 'AnimationC'
    }
  },
  {
    path: 'D',
    component: DComponentComponent,
    outlet: 'secondRouter',
    data: {
      state: 'AnimationD'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
