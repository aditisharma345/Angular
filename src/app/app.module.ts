import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipesComponent } from './MyComponent/pipes/pipes.component';
import { CustomPipePipe } from './pipes/custom-pipe.pipe';
import { FormsComponent } from './Mycomponents/forms/forms.component';
import { DirectiveDirective } from './Mycomponents/directive.directive';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { NoPageComponent } from './no-page/no-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AboutCompanyComponent } from './about-company/about-company.component';

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    CustomPipePipe,
    FormsComponent,
    DirectiveDirective,
    HomeComponent,
    AboutComponent,
    UserComponent,
    NoPageComponent,
    AboutMeComponent,
    AboutCompanyComponent,
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
