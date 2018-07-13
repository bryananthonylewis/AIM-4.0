import { Component, OnInit, ViewChild } from "@angular/core";
import { ModalDirective } from "ngx-bootstrap/modal";

@Component({
  selector: "app-modal-realignment-frames",
  templateUrl: "./modal-realignment-frames.component.html",
  styleUrls: ["./modal-realignment-frames.component.scss"]
})
export class ModalRealignmentFramesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @ViewChild("childModal") childModal: ModalDirective;

  showChildModal(): void {
    this.childModal.show();
  }

  hideChildModal(): void {
    this.childModal.hide();
  }
}
