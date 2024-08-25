import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleTestComponent } from './TypingTest/simple-test/simple-test.component';
import { AdvancedTestComponent } from './TypingTest/advanced-test/advanced-test.component';
import { StatisticsComponent } from './TypingTest/statistics/statistics.component';
import { AboutUsComponent } from './TypingTest/about-us/about-us.component';
import { ProfileComponent } from './TypingTest/profile/profile.component';
import { PageNotFoundComponent } from './TypingTest/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'simple', component: SimpleTestComponent },
  { path: 'advanced', component: AdvancedTestComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', redirectTo: '/simple', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
