// hotel-details.component.ts
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent {
  constructor(private dialogRef: MatDialogRef<HotelDetailsComponent>) { }

  onClose(): void {
    this.dialogRef.close();
  }
}
