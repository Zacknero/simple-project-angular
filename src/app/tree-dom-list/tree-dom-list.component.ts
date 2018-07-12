import {Component} from '@angular/core';
import {HttpServicesService} from '../http-services.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-tree-dom-list',
  templateUrl: './tree-dom-list.component.html',
  styleUrls: ['./tree-dom-list.component.css']
})
export class TreeDomListComponent {

  listTree: Observable<any[]>;
  searchText: '';

  constructor(private httpServices: HttpServicesService) {
    this.httpServices.getTreeList()
      .subscribe(response => {
        this.listTree = response.species;
      })
  }

}
