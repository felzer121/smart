import { Component, OnInit } from '@angular/core';
import {IikoProfileService} from '../../../../services/api/iiko-profile.service';
import {IikoProfile} from '../../../../model/iiko-profile';
import {MatDialog} from '@angular/material/dialog';
import {TariffPlansDialogComponent} from '../../dialogs/tariff-plans-dialog/tariff-plans-dialog.component';
import {TariffPlan} from '../../../../model/tariff-plan';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'iiko-servers',
  templateUrl: './iiko-servers.component.html',
  styleUrls: ['./iiko-servers.component.css']
})
export class IikoServersComponent implements OnInit {

  public iikoProfiles: IikoProfile[];
  public isShowAddForm: boolean;

  public newTariffPlans = {
    host: '',
    login: '',
    password: '',

  };

  animal: string;
  name: string;

  constructor(private iikoProfileService: IikoProfileService, public dialog: MatDialog) {
    this.isShowAddForm = true;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TariffPlansDialogComponent, {
      width: '70%',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.animal = result;
    });
  }

  ngOnInit(): void {
    this.iikoProfileService.getAll().subscribe(res => {
      this.iikoProfiles = res;
      if (res.length === 0) {
        this.isShowAddForm = true;
      } else {
        this.isShowAddForm = false;
      }
    });
  }

  showAddForm(): void {
    this.isShowAddForm = true;
  }

  addIikoServer(): void {
    this.isShowAddForm = false;
  }

}
