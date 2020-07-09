import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactInformationComponent } from './contact-information/contact-information.component';
import { HealthMetricsComponent } from './health-metrics/health-metrics.component';
import { ConditionSymptomsComponent } from './condition-symptoms/condition-symptoms.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MedicationsComponent } from './medications/medications.component';
import { AllergiesComponent } from './allergies/allergies.component';
import { TreatmentOrProceduresComponent } from './treatment-or-procedures/treatment-or-procedures.component';
import { VaccinationsComponent } from './vaccinations/vaccinations.component';
import { LabTestsComponent } from './lab-tests/lab-tests.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({ 
  declarations: [
    AppComponent,
    AboutComponent,
    ContactInformationComponent,
    HealthMetricsComponent,
    ConditionSymptomsComponent,
    MedicationsComponent,
    AllergiesComponent,
    TreatmentOrProceduresComponent,
    VaccinationsComponent,
    LabTestsComponent,
    LifestyleComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [ 
    MatDatepickerModule,
    MatNativeDateModule  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
