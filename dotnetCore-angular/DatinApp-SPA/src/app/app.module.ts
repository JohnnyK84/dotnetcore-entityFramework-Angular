import {
  BrowserModule,
  HammerGestureConfig,
  HAMMER_GESTURE_CONFIG
} from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { JwtModule } from "@auth0/angular-jwt";
import { NgxGalleryModule } from "ngx-gallery";
import { FileUploadModule } from "ng2-file-upload";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TimeAgoPipe } from "time-ago-pipe";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { ButtonsModule } from "ngx-bootstrap/buttons";

import { appRoutes } from "./routes";
import { ErrorInterceptorProvider } from "./_services/error.interceptor";
import { AuthService } from "./_services/auth.service";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import { MemberListComponent } from "./members/member-list/member-list.component";
import { ListsComponent } from "./lists/lists.component";
import { MessagesComponent } from "./messages/messages.component";
import { MemberCardComponent } from "./members/member-card/member-card.component";
import { MemberDetailComponent } from "./members/member-detail/member-detail.component";
import { TabsModule } from "ngx-bootstrap/tabs";
import { MemberDetailResolver } from "./_resolvers/member-detail.resolver";
import { MemberListResolver } from "./_resolvers/member-list.resolver";
import { MemberEditComponent } from "./members/member-edit/member-edit.component";
import { MemberEditResolver } from "./_resolvers/member-edit.resolver";
import { PreventUnsavedChanges } from "./_guards/prevent-unsaved-changes.guard";
import { PhotoEditorComponent } from "./members/photo-editor/photo-editor.component";
import { ListsResolver } from "./_resolvers/lists.resolver";
import { MessagesResolver } from "./_resolvers/messages.resolver";
import { MemberMessagesComponent } from "./members/member-messages/member-messages.component";

// function for JWTModule to attach JWT Tokens to HttpRequests
export function tokenGetter() {
  return localStorage.getItem("token");
}

// To fix issue with NGX Gallery error
export class CustomHammerConfig extends HammerGestureConfig {
  overrides = {
    pinch: { enable: false },
    rotate: { enable: false }
  };
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    MemberListComponent,
    ListsComponent,
    MessagesComponent,
    MemberCardComponent,
    MemberDetailComponent,
    MemberEditComponent,
    PhotoEditorComponent,
    MemberMessagesComponent,
    TimeAgoPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    NgxGalleryModule,
    FileUploadModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["localhost:5000"],
        blacklistedRoutes: ["localhost:5000/api/auth"]
      }
    }),
    TabsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    PaginationModule.forRoot(),
    ButtonsModule.forRoot()
  ],
  providers: [
    AuthService,
    ErrorInterceptorProvider,
    MemberDetailResolver,
    MemberListResolver,
    MemberEditResolver,
    ListsResolver,
    PreventUnsavedChanges,
    MessagesResolver,
    { provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig } // To fix issue with NGX Gallery error
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
