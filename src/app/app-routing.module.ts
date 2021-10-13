import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CareersComponent } from './careers/careers.component';
import { ContactComponent } from './contact/contact.component';
import { ExamplesComponent } from './examples/examples.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PricingComponent } from './pricing/pricing.component';
import { ReportComponent } from './report/report.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  { path: '/home', component: HomeComponent },
  { path: '/team', component: TeamComponent },
  { path: '/pricing', component: PricingComponent },
  { path: '/examples', component: ExamplesComponent  },
  { path: '/about', component:  AboutComponent},
  { path: '/login', component:  LoginComponent},
  { path: '/careers', component:  CareersComponent},
  { path: '/report', component:  ReportComponent},
  { path: '/contact', component:  ContactComponent},
  { path: '', redirectTo: 'home',  pathMatch: 'full' },
  { path: '**', redirectTo: 'home',  pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
