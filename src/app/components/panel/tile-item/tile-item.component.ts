import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { VideoCheckComponent } from '../../dialogs/video-check/video-check.component';

@Component({
  selector: 'app-tile-item',
  templateUrl: './tile-item.component.html',
  styleUrls: ['./tile-item.component.scss']
})
export class TileItemComponent implements OnInit {
  private isShowAddForm: boolean;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(VideoCheckComponent, {
      width: '70%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  ngOnInit(): void {
  }

  showAddForm(): void {
    this.isShowAddForm = true;
  }

  addIikoServer(): void {
    this.isShowAddForm = false;
  }
}
