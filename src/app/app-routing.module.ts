import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileResultsComponent } from './components/profile-results/profile-results.component';

const routes: Routes = [
  { path: '', component: ProfileResultsComponent },
  { path: 'about', component: ProfileResultsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
