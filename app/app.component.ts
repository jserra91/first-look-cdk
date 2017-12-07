import { Component } from '@angular/core';
import { LoginServiceService } from './login-service/login-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private loadingSpinner: LoginServiceService) {
    this.loadData();
  }

    loadData() {
      this.loadingSpinner.reveal();
      setTimeout(() => this.loadingSpinner.hide(), 10000);
    }
}
