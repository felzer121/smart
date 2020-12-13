import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-title-table',
  templateUrl: './title-table.component.html',
  styleUrls: ['./title-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TitleTableComponent implements OnInit {

  options: FormGroup;
  colorControl = new FormControl('primary');
  fontSizeControl = new FormControl(16, Validators.min(10));

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      color: this.colorControl
    });
  }

  ngOnInit(): void {
  }
}
