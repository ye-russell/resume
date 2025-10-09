import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CvComponent } from './cv/cv.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

const routes: Routes = [  {
  path: '',
  component: HomeComponent,
},
{
  path: 'about',
  component: AboutComponent,
},
{
  path: 'cv',
  component: CvComponent,
},
{
  path: 'portfolio',
  component: PortfolioComponent,
},
{
  path: 'contact',
  component: ContactComponent,
},
{
  path: 'privacy',
  component: PrivacyPolicyComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
