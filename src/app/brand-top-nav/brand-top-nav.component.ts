import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-brand-top-nav",
  templateUrl: "./brand-top-nav.component.html",
  styleUrls: ["./brand-top-nav.component.scss"]
})
export class BrandTopNavComponent implements OnInit {
  show: boolean = true;

  clicked() {
    this.show = !this.show;
  }

  constructor() {}

  ngOnInit() {}
}
