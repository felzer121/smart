import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HttpCoreService } from '../services/http/http-core.service';
import { LoginComponent } from './components/login/login.component';
import { EventsComponent } from './components/events/events.component';
import { JwtInterceptor } from '../interceptors/jwt.interceptor';
import { AlertComponent } from './components/alert/alert.component';
import { AlertService } from '../services/alert/alert.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingComponent } from './components/loading/loading.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ErrorInterceptor } from '../interceptors/error.interceptor';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ProfileComponent } from './components/lk/profile/profile.component';
import { LkComponent } from './components/lk/lk.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { IikoServersComponent } from './components/lk/iiko-servers/iiko-servers.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TariffPlansDialogComponent } from './components/dialogs/tariff-plans-dialog/tariff-plans-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PanelComponent } from './components/panel/panel.component';
import { SitebarComponent } from './components/panel/sitebar/sitebar.component';
import { SearchComponent } from './components/panel/search/search.component';
import { MenuComponent } from './components/panel/menu/menu.component';
import { PanelLkComponent } from './components/panel/panel-lk/panel-lk.component';
import { WidgetComponent } from './components/panel/widget/widget.component';
import { TitleTableComponent } from './components/panel/title-table/title-table.component';
import { MatSelectModule } from '@angular/material/select';
import { TileItemComponent } from './components/panel/tile-item/tile-item.component';
import { TableItemComponent } from './components/panel/table-item/table-item.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { VideoCheckComponent } from './components/dialogs/video-check/video-check.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EventsComponent,
    AlertComponent,
    LoadingComponent,
    AuthorizationComponent,
    ProfileComponent,
    LkComponent,
    IikoServersComponent,
    TariffPlansDialogComponent,
    PanelComponent,
    SitebarComponent,
    SearchComponent,
    MenuComponent,
    PanelLkComponent,
    WidgetComponent,
    TitleTableComponent,
    TileItemComponent,
    TableItemComponent,
    VideoCheckComponent
  ],
  imports: [
    AppRoutingModule,
    MatCardModule,
    BrowserModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule,
    MatSelectModule,
    MatIconModule,
    DragDropModule,
    MatInputModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    HttpCoreService,
    AlertService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
