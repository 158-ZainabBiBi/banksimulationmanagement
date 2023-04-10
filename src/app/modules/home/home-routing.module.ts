import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotfoundComponent } from '../../pages/notfound/notfound.component';
import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { TellersComponent } from '../../modules/banksimulations/tellers/tellers.component';
import { AdvisorsComponent } from '../../modules/banksimulations/advisors/advisors.component';
import { AtmsComponent } from '../../modules/banksimulations/atms/atms.component';
import { CustomersComponent } from '../../modules/banksimulations/customers/customers.component';

import { IndexComponent } from 'src/app/components/home/index/index.component';
import { ServicesComponent } from 'src/app/components/home/services/services.component';
import { ContactComponent } from 'src/app/components/home/contact/contact.component';
import { AboutComponent } from 'src/app/components/home/about/about.component';

const routes: Routes = [{
  path: '', component: HomeComponent,
  children: [
    { path: 'dashboard', component: DashboardComponent },

    { path: 'tellers', component: AboutComponent },
    { path: 'customers', component: ContactComponent },
    { path: 'atms', component: IndexComponent },
    { path: 'advisors', component: ServicesComponent },

    { path: '', redirectTo: 'dashboard' },
    { path: '**', component: NotfoundComponent }
  ]
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
