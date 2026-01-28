import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('thoughtful-ui');
  width = 10;
  height = 10;
  length = 10;
  mass = 1;
  stack = '';

  constructor(private http: HttpClient) {}

  submit() {
    const payload = {
      width: this.width,
      height: this.height,
      length: this.length,
      mass: this.mass,
    };

    this.http.post('http://localhost:3000/sort', payload)
      .subscribe(res => {
        const response = res as { stack: string };
        this.stack = response.stack;
        alert(`Stack: ${this.stack}`);
    });
  }

}
