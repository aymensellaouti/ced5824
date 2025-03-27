import { Component } from '@angular/core';
import { HighlightDirective } from '../highlight.directive';
import { RainbowDirective } from '../rainbow.directive';
import { FormsModule } from '@angular/forms';
import { NgStyle } from '@angular/common';

@Component({
    selector: 'app-mini-word',
    templateUrl: './mini-word.component.html',
    styleUrls: ['./mini-word.component.css'],
    standalone: true,
    imports: [NgStyle, FormsModule, RainbowDirective, HighlightDirective]
})
export class MiniWordComponent {
  color = 'red';
  size = 75;
  fontFamily = 'garamond';
}
