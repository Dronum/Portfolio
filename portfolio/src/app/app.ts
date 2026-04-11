import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { Hero } from './components/hero/hero';
import { Footer } from "./shared/footer/footer";
import { Aboutme } from "./components/aboutme/aboutme";
import { Myskill } from './components/myskill/myskill';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Hero, Footer, Aboutme,Myskill],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('portfolio');
}
