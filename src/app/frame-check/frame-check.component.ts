import { Component, OnInit } from "@angular/core";
import { MOCK_DATA } from "./mock.data";

@Component({
  selector: "app-frame-check",
  templateUrl: "./frame-check.component.html",
  styleUrls: ["./frame-check.component.scss"]
})
export class FrameCheckComponent implements OnInit {
  checkframes: any[] = MOCK_DATA;
  allSelected = false;

  constructor() {}

  ngOnInit() {
    this.setSelectionStateForAll(false);
    this.refreshFullState();
  }

  onAllSelectedChanged($event) {
    event.stopPropagation();
    this.allSelected = !this.allSelected;
    this.setSelectionStateForAll(this.allSelected);
  }

  setSelectionStateForAll(state) {
    this.checkframes.forEach((val, i, arr) => {
      arr[i].selected = this.allSelected;
    });
  }

  onSelectionChanged(event, frame) {
    event.stopPropagation();
    frame.selected = !frame.selected;
    this.refreshFullState();
  }

  refreshFullState() {
    let result = this.checkframes.find(entry => entry.selected == false);
    if (result) this.allSelected = false;
    else this.allSelected = true;
  }
}
