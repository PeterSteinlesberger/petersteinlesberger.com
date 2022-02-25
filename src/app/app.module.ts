import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainsectionComponent } from './mainsection/mainsection.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { ProjectSectionComponent } from './project-section/project-section.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { FooterComponent } from './footer/footer.component';
import { ImprintComponent } from './imprint/imprint.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { NavigationService } from './navigation.service';
import { InViewPortService } from './in-view-port.service';
import { ViewportScroller } from '@angular/common';
import { Router, Scroll } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainsectionComponent,
    SkillsSectionComponent,
    ProjectSectionComponent,
    AboutSectionComponent,
    ContactSectionComponent,
    FooterComponent,
    ImprintComponent,
    MainpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonToggleModule,
    MatButtonModule,
    FormsModule,
    

    
  ],
  providers: [
    NavigationService,
    InViewPortService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(router: Router, viewportScroller: ViewportScroller) {
    viewportScroller.setOffset([0, 0]);
    router.events
      .pipe(filter((e) => e instanceof Scroll))
      .subscribe((e: Scroll) => {
        //a good solve but it still does not scroll to anchor element after second click on the same anchor
        //one fix should be to set routing config option onSameUrlNavigation: 'reload',
        if (e.anchor) {
          // anchor navigation
          /* setTimeout is the core line to solve the solution */
          setTimeout(() => {
            viewportScroller.scrollToAnchor(e.anchor);
          });
        } else if (e.position) {
          // backward navigation
          viewportScroller.scrollToPosition(e.position);
        } else {
          // forward navigation
          viewportScroller.scrollToPosition([0, 0]);
        }
      });
  }
}
