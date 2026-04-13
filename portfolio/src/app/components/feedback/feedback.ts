import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback',
  imports: [],
  templateUrl: './feedback.html',
  styleUrl: './feedback.scss',
})
export class Feedback {
  currentTestimonial = 0;

  testimonials = [
    {
      name: 'V. Schuster - Team Partner',
      detail:
        "Michael really kept the team together with his great organization and clear communication. We wouldn't have got this far without his commitment.",
      imageSrc: 'assets/feedback1.png',
      display: true,
    },
    {
      name: 'E. Eichinger - Team Partner',
      detail:
        'Michi was a top team colleague at DA. His positive commitment and willingness to take on responsibility made a significant contribution to us achieving our goals.',
      imageSrc: 'assets/feedback2.png',
      display: false,
    },
    {
      name: 'I. Nuber - Frontend Engineer',
      detail:
        'It was a great pleasure to work with Michael. He knows how to push and encourage team members to present the best work possible.',
      imageSrc: 'assets/feedback3.png',
      display: false,
    },
  ];

  activeTestimonial(direction: string): void {
    this.testimonials[this.currentTestimonial].display = false;

    if (direction === 'next') {
      if (this.currentTestimonial === this.testimonials.length - 1) {
        this.currentTestimonial = 0;
      } else {
        this.currentTestimonial += 1;
      }
    } else {
      if (this.currentTestimonial === 0) {
        this.currentTestimonial = this.testimonials.length - 1;
      } else {
        this.currentTestimonial -= 1;
      }
    }

    this.testimonials[this.currentTestimonial].display = true;
  }
}
