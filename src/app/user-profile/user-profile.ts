import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  imports: [CommonModule, FormsModule],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css',
})
export class UserProfile {
  Name: string = "John Doe";
  Email: string = "johndoe12@gmail.com";
  Bio: string = "Hi, I'm John Doe — a web developer who loves creating clean, responsive, and user-friendly applications. I enjoy working with Angular and modern web technologies, and I'm always exploring new ways to improve my skills and build better digital experiences.";
  Image: string = "data:image/webp;base64,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"
  showDetails: boolean = true;

  toggle() {
    this.showDetails = !this.showDetails;
  }
}