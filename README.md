# j-ng2-floating-button
Floating material design button component for Angular 2

###NPM:
`npm install j-ng2-floating-button`

###app.module.ts

    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { FormsModule } from '@angular/forms';
    import { HttpModule } from '@angular/http';

    import { AppComponent } from './app.component';
    import { JNg2FloatingButtonComponent } from 'j-ng2-floating-button/j-ng2-floating-button.component';

    @NgModule({
      declarations: [
        AppComponent,
        JNg2FloatingButtonComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        HttpModule
      ],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule { }
    

###Your Html
`<j-ng2-floating-button [bgColor]="bgColor"></j-ng2-floating-button>`

###Your Component TS

    import { Component } from '@angular/core';

    @Component({
      selector: 'app-root',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.css']
    })
    export class AppComponent {
      bgColor = "#4FC3F7";
    }
    
###Options
**bgColor**: Button background color
