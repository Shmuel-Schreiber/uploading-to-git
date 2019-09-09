import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ErrorComponent } from './pages/error/error.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'error', component: ErrorComponent },



  { path: '', redirectTo: '/contacts', pathMatch: 'full' },
  { path: '**', redirectTo: '/contacts', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
