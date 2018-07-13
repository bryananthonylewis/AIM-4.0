import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { ModalModule } from "ngx-bootstrap";

import { AppComponent } from "./app.component";
import { BrandSideNavComponent } from "./brand-side-nav/brand-side-nav.component";
import { BrandTopNavComponent } from "./brand-top-nav/brand-top-nav.component";
import { FrameCheckComponent } from "./frame-check/frame-check.component";
import { FrameReviewComponent } from "./frame-review/frame-review.component";
import { HeaderTitleComponent } from "./header-title/header-title.component";
import { HeaderComponent } from "./header/header.component";
import { InventorySummaryComponent } from "./inventory-summary/inventory-summary.component";
import { InvoiceSummaryComponent } from "./invoice-summary/invoice-summary.component";
import { LoginFormComponent } from "./login-form/login-form.component";
import { MainNavComponent } from "./main-nav/main-nav.component";
import { RestockSummaryComponent } from "./restock-summary/restock-summary.component";
import { SubmitInventoryFormComponent } from "./submit-inventory-form/submit-inventory-form.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { CheckComponent } from "./check/check.component";
import { HomeComponent } from "./home/home.component";
import { ReviewComponent } from "./review/review.component";
import { SubmitComponent } from "./submit/submit.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { IndexComponent } from "./index/index.component";
import { ModalInStockComponent } from "./modal-in-stock/modal-in-stock.component";
import { ModalInvoiceAndRestockComponent } from "./modal-invoice-and-restock/modal-invoice-and-restock.component";
import { ModalInvoiceOnlyComponent } from "./modal-invoice-only/modal-invoice-only.component";
import { ModalReturnToAltairComponent } from "./modal-return-to-altair/modal-return-to-altair.component";
import { ModalNotReceivedComponent } from "./modal-not-received/modal-not-received.component";
import { ModalTotalInventoryComponent } from "./modal-total-inventory/modal-total-inventory.component";
import { ModalNewFramesComponent } from "./modal-new-frames/modal-new-frames.component";
import { ModalRealignmentFramesComponent } from "./modal-realignment-frames/modal-realignment-frames.component";

const appRoutes: Routes = [
  { path: "", component: IndexComponent },
  { path: "home", component: HomeComponent },
  { path: "check", component: CheckComponent },
  { path: "review", component: ReviewComponent },
  { path: "submit", component: SubmitComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BrandSideNavComponent,
    BrandTopNavComponent,
    FrameCheckComponent,
    FrameReviewComponent,
    HeaderTitleComponent,
    HeaderComponent,
    InventorySummaryComponent,
    InvoiceSummaryComponent,
    LoginFormComponent,
    MainNavComponent,
    RestockSummaryComponent,
    SubmitInventoryFormComponent,
    WelcomeComponent,
    CheckComponent,
    HomeComponent,
    ReviewComponent,
    SubmitComponent,
    PageNotFoundComponent,
    IndexComponent,
    ModalInStockComponent,
    ModalInvoiceAndRestockComponent,
    ModalInvoiceOnlyComponent,
    ModalReturnToAltairComponent,
    ModalNotReceivedComponent,
    ModalTotalInventoryComponent,
    ModalNewFramesComponent,
    ModalRealignmentFramesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ModalModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
