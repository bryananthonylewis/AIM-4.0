import { Component, OnInit, ViewChild } from "@angular/core";
import { ModalDirective } from "ngx-bootstrap/modal";

@Component({
  selector: "app-modal-total-inventory",
  templateUrl: "./modal-total-inventory.component.html",
  styleUrls: ["./modal-total-inventory.component.scss"]
})
export class ModalTotalInventoryComponent implements OnInit {
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
