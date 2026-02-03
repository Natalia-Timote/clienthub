import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Container } from './components/container/container';
import { Header } from './components/header/header';
import { Separator } from './components/separator/separator';
import { Contact } from './components/contact/contact';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Container, Header, Separator, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('clienthub');
  
    alphabet: string = 'abcdefghijklmnopqrstuvwxyz';
}
