import {Component, Input, OnInit} from '@angular/core';
import {faInfo} from "@fortawesome/free-solid-svg-icons/faInfo";
import {AlertBoxHandlerService} from "../../services/alert-box-handler/alert-box-handler.service";

@Component({
  selector: 'app-alert-box',
  templateUrl: './alert-box.component.html',
  styleUrls: ['./alert-box.component.css']
})
export class AlertBoxComponent implements OnInit {
  constructor(private alertBoxHandlerService: AlertBoxHandlerService) {}

  alertTitle: string = '';
  alertMessage: string = '';
  isError: boolean = false
  @Input() errorCode: number = 0;
  @Input() cityName: string = '';
  faInfo = faInfo;

  ngOnInit(): void {
    this.updateAlert();
  }

  ngOnChanges(): void {
    this.updateAlert();
  }

  updateAlert(): void {
    this.alertBoxHandlerService.setErrorStatus(this.cityName, this.errorCode);
    this.alertTitle = this.alertBoxHandlerService.getAlertTitle();
    this.alertMessage = this.alertBoxHandlerService.getAlertMessage();
    this.isError = this.alertBoxHandlerService.getIsError()
  }
}
