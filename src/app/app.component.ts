import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'picture-upload-grid';


  logName(location: string) {
    console.log("clicked on: ", location);
  }

  onButtonClick(event: Event) {
    const target = event.target as HTMLElement;
    if (target.tagName === 'button') {
      const buttonText = target.textContent?.trim();
      if (buttonText) {
        this.handleButtonClick(buttonText);
      }
    }
  }

  handleButtonClick(buttonText: string) {
    // Your logic to handle the button click goes here
    console.log(`Button with text "${buttonText}" was clicked.`);
  }

}
