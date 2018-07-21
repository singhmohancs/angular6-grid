import { Component, ViewChild, OnInit} from '@angular/core';
import { CallListingService } from './callListing.service';
import { DataTableDirective } from 'angular-datatables';
import { CallListing } from './callListing.model';


@Component({
  selector: 'app-call-listing',
  templateUrl: './call-listing.component.html',
  styleUrls: ['./call-listing.component.scss']
})
export class CallListingComponent implements OnInit{
  
  dtOptions: DataTables.Settings = {};
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;

  callsListing: CallListing[];
  numbers;
  allNumbers;
  selectedNumber: number;
  loading: Boolean = false;
  constructor(private callListingService: CallListingService) { }
 
  ngOnInit() {
    this.loading = true;
    this.callListingService.getNumbers().subscribe(resp => {
    this.selectedNumber = resp.data.numbers[0].number;
    this.numbers = resp.data.numbers;
    this.allNumbers = Object.assign([], this.numbers);
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.draw();
    });
    })
    this.loadData();
  }

  loadData() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      serverSide: true,
      processing: true,
      responsive: true,
      ajax: (dataTablesParameters: any, callback) => {
        if(this.selectedNumber) {
          this.loading = true;
          this.callListingService.getData(dataTablesParameters.length, dataTablesParameters.start, this.selectedNumber).subscribe(resp => {
            this.loading = false;
            this.callsListing = resp.data;
            callback({
              recordsTotal: resp.pagination.total_count,
              recordsFiltered: resp.pagination.total_count,
              data: []
            });
          });
        }
      },
      columns: [
        { data: 'call_from' },
        { data: 'call_to' },
        { data: 'call_type' },
        { data: 'bill_hrsmin' },
        { data: 'billmin' },
        { data: 'start_time' }
      ]
    };
  }

  onChangeNumber(number) {
    this.selectedNumber = number;
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.draw();
    });
  }

  SearchNumber(event: any) {
    if (event.target.value) {
      this.numbers = this.allNumbers.filter(function(num) {
        return num.number.indexOf(event.target.value) > -1;
      })
    } else {
      this.numbers = Object.assign([], this.allNumbers);
    }
    
  }
}
