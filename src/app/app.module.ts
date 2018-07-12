import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {HttpServicesService} from './http-services.service';
import {LoginComponent} from './login/login.component';
import {TreeDomListComponent} from './tree-dom-list/tree-dom-list.component';
import {FilterTreePipe} from './filter-tree.pipe';

const appRoutes: Routes = [
  {
    path: 'treeDomList',
    component: TreeDomListComponent
  },
  {
    path: 'login',
    component: LoginComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TreeDomListComponent,
    FilterTreePipe
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [HttpServicesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
