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
import { PreferredPharmacyComponent } from './preferred-pharmacy/preferred-pharmacy.component';
import { InsuranceComponent } from './insurance/insurance.component';

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
    PreferredPharmacyComponent,
    InsuranceComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
