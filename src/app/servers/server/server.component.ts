import { Component, input, signal } from '@angular/core';
import { Server } from '../../shared/models/server.model';
import { NgClass, NgIf } from '@angular/common';
import { SpinnerComponent } from '../../shared/spinner/spinner/spinner.component';
import { ButtonLoadingDirective } from '../../shared/button-loading/button-loading.directive';

@Component({
  selector: 'app-server',
  imports: [NgClass, SpinnerComponent, ButtonLoadingDirective, NgIf],
  templateUrl: './server.component.html',
  styleUrl: './server.component.css',
})
export class ServerComponent {
  server = input.required<Server>();
  isLoading = signal(false);

  toggleStatus() {
    this.isLoading.set(true);
    let x = setTimeout(() => {
      this.server().isOnline = !this.server().isOnline;
      this.isLoading.set(false);
      clearTimeout(x);
    }, 1000);
  }
}
