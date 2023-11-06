import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent {
  @Input() message: string = '';
  @Output() closeNotification = new EventEmitter<void>();
  visible: boolean = true;

  close() {
    this.visible = false;
    this.closeNotification.emit();
  }

}
