import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet,CounterComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Hola mundo de Angular desde Componente!';

  user: string[] = ['jesus', 'david', 'camacaro', 'ruiz'];

  visible: boolean = true;

  setvisible(): void {
    this.visible = this.visible ? false : true;
  }
}
