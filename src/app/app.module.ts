//Components
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { TableComponent } from './user/table/table.component';
import { CardComponent } from './user/card/card.component';
import { DialogUserComponent } from './user/dialog-user/dialog-user.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { DialogSubmitComponent } from './user/dialog-submit/dialog-submit.component';
import { DialogDeleteComponent } from './user/dialog-delete/dialog-delete.component';

//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
//TokenInterceptor
import { TokenInterceptor } from './auth/token.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TableComponent,
    CardComponent,
    DialogUserComponent,
    UserListComponent,
    DialogSubmitComponent,
    DialogDeleteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatRadioModule,
    MatSelectModule,
    MatProgressSpinnerModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
