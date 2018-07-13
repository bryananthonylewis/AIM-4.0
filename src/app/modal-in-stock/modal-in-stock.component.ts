import { Component, OnInit, ViewChild } from "@angular/core";
import { ModalDirective } from "ngx-bootstrap/modal";

@Component({
  selector: "app-modal-in-stock",
  templateUrl: "./modal-in-stock.component.html",
  styleUrls: ["./modal-in-stock.component.scss"]
})
export class ModalInStockComponent implements OnInit {
  // constructor() {}
  ngOnInit() {}

  @ViewChild("childModal") childModal: ModalDirective;

  showChildModal(): void {
    this.childModal.show();
  }

  hideChildModal(): void {
    this.childModal.hide();
  }
}
