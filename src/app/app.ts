import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Container } from './components/container/container';
import { Header } from './components/header/header';
import { Separator } from './components/separator/separator';
import { Contact } from './components/contact/contact';

interface ContactInfo {
  id: number,
  name: string,
  email: string,
  phone: string,
  status: string,
  enterprise: string,
  notes: string,
  createdAt: string
}

import agenda from './agenda.json';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Container, Header, Separator, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('clienthub');
  
    alphabet: string = 'abcdefghijklmnopqrstuvwxyz';
    contacts: ContactInfo[] = agenda.clients;

    filterContactsByInitialLetter(letter: string) : ContactInfo[] {
      return this.contacts.filter(contact => {
        return contact.name.toLowerCase().startsWith(letter)
      })
    }
}
