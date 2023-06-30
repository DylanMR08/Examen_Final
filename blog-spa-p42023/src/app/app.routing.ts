import {ModuleWithProviders} from '@angular/core';
import{Routes,RouterModule,Route} from '@angular/router';

import{HomeComponent} from './components/home/home.component';
import{LoginComponent} from './components/login/login.component';
import{ErrorComponent} from './components/error/error.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { UsersConfigComponent } from './components/users-config/users-config.component';

const appRoutes:Routes=[
  {path:'',component:HomeComponent},  
  {path:'login',component:LoginComponent},
  {path:'registro',component:UserRegisterComponent},
  {path:'nuevo-post',component:NewPostComponent},
  {path:'categoria/:id',component:HomeComponent},
  {path:'logout/:sure',component:LoginComponent},
  {path:'post-detalle/:id',component:PostDetailComponent},
  {path:'config', component:UsersConfigComponent},
  {path:'**',component:ErrorComponent}
];

export const appRoutingProviders:any[]=[];
export const routing:ModuleWithProviders<Route>=RouterModule.forRoot(appRoutes);
