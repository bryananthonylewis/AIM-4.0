import { Component, OnInit, ViewChild } from "@angular/core";
import { ModalDirective } from "ngx-bootstrap/modal";

@Component({
  selector: "app-modal-invoice-only",
  templateUrl: "./modal-invoice-only.component.html",
  styleUrls: ["./modal-invoice-only.component.scss"]
})
export class ModalInvoiceOnlyComponent implements OnInit {
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
