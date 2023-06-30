import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';

import{routing,appRoutingProviders} from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { UsersConfigComponent } from './components/users-config/users-config.component';

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent,    
    LoginComponent,    
    ErrorComponent, UserRegisterComponent, NewPostComponent, PostDetailComponent, UsersConfigComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,HttpClientModule,
    AngularEditorModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
