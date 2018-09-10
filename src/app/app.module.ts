// Angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

//App components
import { AppComponent } from './app.component';
import { CardViewComponent } from './card-view/card-view.component';
import { MapViewComponent } from './map-view/map-view.component';
import { HeaderComponent } from './header/header.component';

// App pipes
 import { FilterPipe } from './filter.pipe';

// App services
import { ServerService } from './server.service';
import { StoreDataService } from './store-data.service'

//App routing
const appRoutes: Routes = [
  { path: '',component: CardViewComponent},
  { path:'map', component :MapViewComponent},
  
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterPipe,
    CardViewComponent,
    MapViewComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule , 
    HttpClientModule, 
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyATjQ0LxhZFE5GLDbU-8Mybkk8NIc2M-qM'
    })
  ],
  providers: [ServerService, StoreDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
