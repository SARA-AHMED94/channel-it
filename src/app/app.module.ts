//Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule,HttpClient } from '@angular/common/http';

//App component

import { AppComponent } from './app.component';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';



// App services
import { ApiService } from 'src/app/api.service';
import { TempPipe } from './temp.pipe';


//App routing
const appRoutes: Routes = [
  { path: '',component:WeatherWidgetComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    WeatherWidgetComponent,
    TempPipe,
  
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(appRoutes), 
   ],

  providers: [ ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
