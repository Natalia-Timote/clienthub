import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  @Input() name: string = ''
  @Input() phone: string = ''
  @Input() enterprise: string = ''
  @Input() status: string = ''
}
