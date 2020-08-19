import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';


const routes: Routes = [
  {
    path:'',
    component: LandingpageComponent

  },
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
