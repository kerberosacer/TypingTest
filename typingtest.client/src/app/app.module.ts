import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FooterComponent } from './footer/footer.component';
import { SimpleTestComponent } from './TypingTest/simple-test/simple-test.component';
import { AdvancedTestComponent } from './TypingTest/advanced-test/advanced-test.component';
import { StatisticsComponent } from './TypingTest/statistics/statistics.component';
import { AboutUsComponent } from './TypingTest/about-us/about-us.component';
import { ProfileComponent } from './TypingTest/profile/profile.component';
import { PageNotFoundComponent } from './TypingTest/page-not-found/page-not-found.component';
import { TestDurationComponent } from './TypingTest/test-duration/test-duration.component';
import { TestBoxComponent } from './TypingTest/test-box/test-box.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TimePipe } from './pipes/time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    FooterComponent,
    SimpleTestComponent,
    AdvancedTestComponent,
    StatisticsComponent,
    AboutUsComponent,
    ProfileComponent,
    PageNotFoundComponent,
    TestDurationComponent,
    TestBoxComponent,
    TimePipe
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
