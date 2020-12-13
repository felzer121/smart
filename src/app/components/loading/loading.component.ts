import { Component, OnInit } from '@angular/core';
import {LoadingService} from '../../../services/loading/loading.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  isLoading: boolean;
  constructor(private loadingService: LoadingService) { }

  ngOnInit(): void {
    this.loadingService.getInstance().subscribe(sub => {
      this.isLoading = sub;
    });
  }

}
