import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSortModule} from '@angular/material/sort';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {HttpClientModule} from '@angular/common/http'
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputInventoryComponent } from './components/input-inventory/input-inventory.component';
import { DisplayInventoryComponent } from './components/display-inventory/display-inventory.component';
import { LoginComponent } from './components/login/login.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { RegisterComponent } from './components/register/register.component';
import { PasswordStrengthMeterComponent } from './components/password-strength-meter/password-strength-meter.component';

@NgModule({
  declarations: [
    AppComponent,
    InputInventoryComponent,
    DisplayInventoryComponent,
    LoginComponent,
    SidenavComponent,
    DialogComponent,
    RegisterComponent,
    PasswordStrengthMeterComponent
  ],
  imports: [
    BrowserModule,MatCardModule,FormsModule,MatInputModule,MatButtonModule,MatDialogModule,MatIconModule,
    AppRoutingModule,ReactiveFormsModule,MatFormFieldModule,MatCheckboxModule,MatToolbarModule,MatSidenavModule,
    BrowserAnimationsModule,MatMenuModule,MatProgressSpinnerModule,MatTableModule,HttpClientModule,MatDividerModule,
    MatPaginatorModule,MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
