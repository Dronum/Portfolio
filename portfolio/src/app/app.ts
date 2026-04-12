import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { Hero } from './components/hero/hero';
import { Footer } from "./shared/footer/footer";
import { Aboutme } from "./components/aboutme/aboutme";
import { Myskill } from './components/myskill/myskill';
import { Portfolio } from './components/portfolio/portfolio';
import { Feedback } from './components/feedback/feedback';
import { Contact } from './components/contact/contact';
import { Footerend } from './components/footerend/footerend';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Hero, Footer, Aboutme,Myskill,Portfolio,Feedback,Contact,Footerend],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('portfolio');
}
