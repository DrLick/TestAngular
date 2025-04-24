import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ClientesListComponent } from './components/clientes-list/clientes-list.component';
import { TelefonoPipe } from './pipes/telefono.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ClientesListComponent,
    TelefonoPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}