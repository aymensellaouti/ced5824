import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent {
  @Input({
    required: true,
  })
  messageDePapa = 'pour le moment il n a rien dit';
  @Output() sendMessageToPapa = new EventEmitter<string>();

  sendMessage(): void {
    this.sendMessageToPapa.emit('cc papa !!');
  }

}
