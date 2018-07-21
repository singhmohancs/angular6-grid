import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallListingComponent } from './callListing/callListing.component';
import { ServicesModule } from '../services/services.module';
import { CallListingService } from './callListing/callListing.service';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  imports: [
    CommonModule,
    ServicesModule,
    DataTablesModule
  ],
  declarations: [CallListingComponent],
  exports: [CallListingComponent],
  providers: [
    CallListingService,
  ]
})
export class CallHistoryModule { }
