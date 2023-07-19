import { Component, Inject } from '@angular/core';
import {NgIf, NgFor} from '@angular/common';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';


export interface DialogData { // picture location options
  location: 'front middle' | 'front left' | 'front right' |
  'left side' | 'right side' | 'dashboard' | 'rear middle' | 
  'rear left' | 'rear right';
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title='product';
  constructor(public dialog: MatDialog) {}

  logName(location: string) {
    this.dialog.open(CameraDialogue, {
      data: {
        location: location,
      },
    });
    console.log(location, 'passed...');
    console.warn(`${location} clicked`);
  }
}

// Dialogue Component
@Component({
  selector: 'camera-dialogue',
  templateUrl: 'camera-dialogue.html',
  standalone: true,
  imports: [MatDialogModule, NgIf, NgFor],
})
export class CameraDialogue {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  runCamera() {
    alert('camera');
    console.log('camera passed...');
    
  }

  takePhoto(id: number) {
    for (let i = 0; i < id; i++) {
      console.log(i);
    }
  }
}