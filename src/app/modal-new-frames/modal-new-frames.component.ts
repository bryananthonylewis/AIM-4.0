import { Component, OnInit, ViewChild } from "@angular/core";
import { ModalDirective } from "ngx-bootstrap/modal";

@Component({
  selector: "app-modal-new-frames",
  templateUrl: "./modal-new-frames.component.html",
  styleUrls: ["./modal-new-frames.component.scss"]
})
export class ModalNewFramesComponent implements OnInit {
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
