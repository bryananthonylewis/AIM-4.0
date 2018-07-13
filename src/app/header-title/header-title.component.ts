import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-header-title",
  templateUrl: "./header-title.component.html",
  styleUrls: ["./header-title.component.scss"]
})
export class HeaderTitleComponent implements OnInit {
  @Input() pageName: string = "Page Name";
  @Input() title: string = "Title";
  @Input() visibility: boolean;

  constructor() {}

  ngOnInit() {}
}
