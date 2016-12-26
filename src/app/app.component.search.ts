import { Component,Output,EventEmitter } from '@angular/core';
@Component({
  selector: 'app-search',
  templateUrl: './app.search.componenet.html'
})
export class SearchComponent 
{
 onClick(searchVal)
 {
  this.searchEmployeeSearcher.emit(searchVal);
 }
 @Output() searchEmployeeSearcher: EventEmitter<string> = new EventEmitter<string>();
}