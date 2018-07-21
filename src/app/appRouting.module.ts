import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CallListingComponent } from './callHistory/callListing/callListing.component';
import { NotFoundComponent } from './miscellaneous/notFound/notFound.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'call-history',
    pathMatch: 'full'
  },
  {
    path: 'call-history',
    component: CallListingComponent
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}