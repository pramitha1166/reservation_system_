import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SearchseactionComponent } from './common/searchseaction/searchseaction.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchResultPageComponent } from './search-result-page/search-result-page.component';
import { HttpClientModule } from '@angular/common/http';
import { HotelServiceService } from './services/hotel-service.service';
import { AutocompleteLibModule } from 'angular-ng-autocomplete'
import { LocationServiceService } from './services/location-service.service';
import { AngularFireModule } from '@angular/fire'
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { LoginComponent } from './login/login.component';
import { BottomHeaderComponent } from './common/bottom-header/bottom-header.component';
import { RegisterComponent } from './register/register.component';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './appstate/reducer/auth.reducer';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchseactionComponent,
    HomeComponent,
    SearchResultPageComponent,
    LoginComponent,
    BottomHeaderComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AutocompleteLibModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, "cloud"),
    AngularFirestoreModule,
    StoreModule.forRoot(authReducer)
  ],
  providers: [HotelServiceService, LocationServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
