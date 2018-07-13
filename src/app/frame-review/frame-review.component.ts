import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-frame-review",
  templateUrl: "./frame-review.component.html",
  styleUrls: ["./frame-review.component.scss"]
})
export class FrameReviewComponent implements OnInit {
  reviewFramesReview: Object[];
  reviewFramesNew: Object[];
  reviewFramesRealignment: Object[];

  constructor() {
    this.reviewFramesReview = [
      {
        brand: "Anne Klein",
        model: "A5031",
        desc: "52-17 Plum",
        details: "52-17 Butterscotch Crystal",
        src: "assets/images/A4038_001_MINI.jpg",
        alt: "frame image"
      },
      {
        brand: "Anne Klein",
        model: "A5031",
        desc: "52-17 Plum",
        details: "52-17 Butterscotch Crystal",
        src: "assets/images/A4038_001_MINI.jpg",
        alt: "frame image"
      },
      {
        brand: "Anne Klein",
        model: "A5031",
        desc: "52-17 Plum",
        details: "52-17 Butterscotch Crystal",
        src: "assets/images/A4038_001_MINI.jpg",
        alt: "frame image"
      }
    ];

    this.reviewFramesNew = [
      {
        brand: "Anne Klein",
        model: "A5031",
        desc: "52-17 Plum",
        details: "52-17 Butterscotch Crystal",
        src: "assets/images/A4038_001_MINI.jpg",
        alt: "frame image"
      },
      {
        brand: "Anne Klein",
        model: "A5031",
        desc: "52-17 Plum",
        details: "52-17 Butterscotch Crystal",
        src: "assets/images/A4038_001_MINI.jpg",
        alt: "frame image"
      }
    ];

    this.reviewFramesRealignment = [
      {
        brand: "Anne Klein",
        model: "A5031",
        desc: "52-17 Plum",
        details: "52-17 Butterscotch Crystal",
        src: "assets/images/A4038_001_MINI.jpg",
        alt: "frame image"
      },
      {
        brand: "Anne Klein",
        model: "A5031",
        desc: "52-17 Plum",
        details: "52-17 Butterscotch Crystal",
        src: "assets/images/A4038_001_MINI.jpg",
        alt: "frame image"
      }
    ];
  }

  ngOnInit() {}
}
