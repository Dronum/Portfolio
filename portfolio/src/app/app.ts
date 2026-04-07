import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { Hero } from './content/hero/hero';
import { Footer } from "./shared/footer/footer";
import { Aboutme } from "./content/aboutme/aboutme";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Hero, Footer, Aboutme],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('portfolio');
}
