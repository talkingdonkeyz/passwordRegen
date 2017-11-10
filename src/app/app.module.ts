import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HasherComponent } from './components/hasher/hasher.component';
import { GeneratorComponent } from './components/generator/generator.component';


@NgModule({
  declarations: [
    AppComponent,
    HasherComponent,
    GeneratorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
