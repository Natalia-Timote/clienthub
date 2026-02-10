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
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Container, Header, Separator, Contact, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('clienthub');
  
    alphabet: string = 'abcdefghijklmnopqrstuvwxyz';
    contacts: ContactInfo[] = agenda.clients;

    hasContactsWithLetter(letter: string): boolean {
      return this.filterContactsByText().some(contact => 
        contact.name.toLowerCase().startsWith(letter)
      )
    }

    filterByText: string = ''

    private removeAccents(text: string): string {
      return text.normalize("NFD").replace(/[\u0300-\u036f]/g, '');
    }

    filterContactsByText (): ContactInfo[] {
      if(!this.filterByText) {
        return this.contacts;
      } else {
        return this.contacts.filter(contact => {
          return this.removeAccents(contact.name).toLowerCase().includes(this.removeAccents(this.filterByText).toLowerCase());
        })
      }
    }

    filterContactsByInitialLetter(letter: string) : ContactInfo[] {
      return this.filterContactsByText().filter(contact => {
        return this.removeAccents(contact.name).toLowerCase().startsWith(this.removeAccents(letter).toLowerCase());
      })
    }
}
