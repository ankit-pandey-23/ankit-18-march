import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatInputModule,MatTableModule,MatButtonModule,MatDialogModule} from '@angular/material';

import { AppComponent } from './app.component';
import { PollslisComponent } from './component/pollslis/pollslis.component';
import { DialogComponent } from './component/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PollslisComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    RouterModule.forRoot([
      { path: '', component: PollslisComponent },
      { path: 'products/:productId', component: PollslisComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule { }
