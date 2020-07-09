import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component'
import { ContactInformationComponent } from './contact-information/contact-information.component'
import { HealthMetricsComponent } from './health-metrics/health-metrics.component'
import { ConditionSymptomsComponent } from './condition-symptoms/condition-symptoms.component'
import { MedicationsComponent } from './medications/medications.component'
import { AllergiesComponent } from './allergies/allergies.component'
import { TreatmentOrProceduresComponent } from './treatment-or-procedures/treatment-or-procedures.component'
import { VaccinationsComponent } from './vaccinations/vaccinations.component'
import { LabTestsComponent } from './lab-tests/lab-tests.component'
import { LifestyleComponent } from './lifestyle/lifestyle.component'


const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contactInformation',
    component: ContactInformationComponent
  },
  {
    path: 'healthMetrics',
    component: HealthMetricsComponent
  },
  {
    path: 'conditionandsymptoms',
    component: ConditionSymptomsComponent
  },
  {
    path: 'medication',
    component: MedicationsComponent
  },
  {
    path: 'allergies',
    component: AllergiesComponent
  },
  {
    path: 'treatmentofprocedures',
    component: TreatmentOrProceduresComponent
  },
  {
    path: 'vaccinations',
    component: VaccinationsComponent
  },
  {
    path: 'labTest',
    component: LabTestsComponent
  },
  {
    path: 'lifestyle', 
    component: LifestyleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
