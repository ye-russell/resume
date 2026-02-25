import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CvComponent } from './cv/cv.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

const routes: Routes = [  {
  path: '',
  component: HomeComponent,
  title: 'Yerassyl Bekberov — Senior Frontend Engineer',
},
{
  path: 'about',
  component: AboutComponent,
  title: 'About — Yerassyl Bekberov',
},
{
  path: 'cv',
  component: CvComponent,
  title: 'CV — Yerassyl Bekberov',
},
{
  path: 'portfolio',
  component: PortfolioComponent,
  title: 'Portfolio — Yerassyl Bekberov',
},
{
  path: 'contact',
  component: ContactComponent,
  title: 'Contact — Yerassyl Bekberov',
},
{
  path: 'privacy',
  component: PrivacyPolicyComponent,
  title: 'Privacy Policy — Yerassyl Bekberov',
},
{
  path: '**',
  redirectTo: '',
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
