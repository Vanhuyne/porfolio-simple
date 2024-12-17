import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private http: HttpClient) {}

  sendEmail(form: any) {
    const emailData = {
      to: 'thanvanhuy@gmail.com',
      subject: 'Contact Form Submission',
      name: form.name,
      email: form.email,
      message: form.message
    };

    this.http.post('https://your-deployed-backend-url.com/send', emailData)
      .subscribe(response => {
        console.log('Email sent successfully', response);
      }, error => {
        console.error('Error sending email', error);
      });
  }
}
