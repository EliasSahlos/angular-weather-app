import {Component, Input} from '@angular/core';
import {faInfo} from "@fortawesome/free-solid-svg-icons/faInfo";
@Component({
  selector: 'app-alert-box',
  templateUrl: './alert-box.component.html',
  styleUrls: ['./alert-box.component.css']
})
export class AlertBoxComponent {
  @Input() alertTitle:string = ''
  @Input() alertMessage:string = ''
  faInfo = faInfo
}
