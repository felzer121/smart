import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {TariffPlanService} from '../../../../services/api/tariff-plan.service';
import {TariffPlan} from '../../../../model/tariff-plan';

@Component({
  selector: 'app-tariff-plans-dialog',
  templateUrl: './tariff-plans-dialog.component.html',
  styleUrls: ['./tariff-plans-dialog.component.scss']
})
export class TariffPlansDialogComponent implements OnInit {

  public tariffPlans: TariffPlan[];

  constructor(
    public dialogRef: MatDialogRef<TariffPlansDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TariffPlan,
    private tariffPlanService: TariffPlanService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.tariffPlanService.getAll().subscribe(result => {
      this.tariffPlans = result;
    });
  }

}
