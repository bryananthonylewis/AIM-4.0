import { Component, OnInit, ViewChild } from "@angular/core";
import { ModalDirective } from "ngx-bootstrap/modal";

@Component({
  selector: "app-modal-invoice-and-restock",
  templateUrl: "./modal-invoice-and-restock.component.html",
  styleUrls: ["./modal-invoice-and-restock.component.scss"]
})
export class ModalInvoiceAndRestockComponent implements OnInit {
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
