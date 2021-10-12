import { NgModule } from "@angular/core";
import { RouterModule, Routes,ExtraOptions } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { SearchResultPageComponent } from "./search-result-page/search-result-page.component";

const routerOptions: ExtraOptions = {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 64],
  };

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'search/:location_id',
        component: SearchResultPageComponent

    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes, routerOptions)],
    exports: [RouterModule]
})
export class AppRoutingModule{}