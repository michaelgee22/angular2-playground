import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

//Polymer Modules
import { PolymerModule } from '@codebakery/origami';
import { IronElementsModule, PaperElementsModule } from '@codebakery/origami/lib/collections';

import { AppComponent } from './app.component';
//Layout Components
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
//Route Components
import { HomeComponent } from './routes/home/home.component';
//Sports Components
import { SportsComponent } from './routes/sports/sports.component';
  import { SportDetailComponent } from './routes/sports/sport-detail/sport-detail.component';
  import { SportListComponent } from './routes/sports/sport-list/sport-list.component';
//Playground Components
import { PlaygroundComponent } from './routes/playground/playground.component';
  import { TwoWayBindingComponent } from './routes/playground/two-way-binding/two-way-binding.component';
  import { ViewEncapsulationComponent } from './routes/playground/view-encapsulation/view-encapsulation.component';
  import { LocalReferencesComponent } from './routes/playground/local-references/local-references.component';
  import { NgContentComponent } from './routes/playground/ng-content/ng-content.component';
  import { ComponentLifecycleComponent } from './routes/playground/component-lifecycle/component-lifecycle.component';
    import { ParentComponent } from './routes/playground/component-communication/parent.component';
    import { ChildComponent } from './routes/playground/component-communication/child/child.component';
  import { DirectivesComponent } from './routes/playground/directives/directives.component';
  import { ServicesComponent } from './routes/playground/services/services.component';
  import { RoutingComponent } from './routes/playground/routing/routing.component';

//Playground Directives
import { BasicDirective } from './routes/playground/directives/attribute-directives/basic.directive';
import { BestPraciceDirective } from './routes/playground/directives/attribute-directives/best-pracice.directive';
import { StructuralDirective } from './routes/playground/directives/structural-directives/structural.directive';

//Services
import { LocationService } from './@services/location.service';
import { ObservablesComponent } from './routes/playground/observables/observables.component';

const appRoutes:Routes = [
  { path: '', component: HomeComponent },
  { path: 'playground', component: PlaygroundComponent },
  { path: 'sports-demo', component: SportsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    //Layout Declarations
    HeaderComponent,
    FooterComponent,
    //Route Components
    HomeComponent,
    RoutingComponent,
    SportsComponent,
      SportDetailComponent,
      SportListComponent,
    //Playground Components
    PlaygroundComponent,
      TwoWayBindingComponent,
      ViewEncapsulationComponent,
      LocalReferencesComponent,
      NgContentComponent,
      ComponentLifecycleComponent,
      ParentComponent,
        ChildComponent,
        DirectivesComponent,
      ServicesComponent,
      //Playground Directives
      //Like components, directives must also be included in the declarations of the app.module
      BasicDirective, //Attribute Directive
      BestPraciceDirective, //Attribute Directive
      StructuralDirective, ObservablesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //Router
    RouterModule.forRoot(appRoutes),
    //Polymer
    PolymerModule,
    IronElementsModule,
    PaperElementsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  //Include services instances here that you want to be available within the ENTIRE application
  providers: [ LocationService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
