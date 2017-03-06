import { Component, OnInit, HostListener, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'j-ng2-floating-button',
  templateUrl: './j-ng2-floating-button.component.html',
  styleUrls: ['./j-ng2-floating-button.component.css']
})
export class JNg2FloatingButtonComponent implements OnInit {
  scrollTop: number;
  @Input() bgColor;
  constructor( @Inject(DOCUMENT) private document: Document) { }

  @HostListener('window:scroll', ['$event'])
  track(event) {
    this.scrollTop = this.document.body.scrollTop;
  }

  ngOnInit() {
  }

  scrollUp() {
    var scrollInterval = setInterval(function () {
      this.document.body.scrollTop -= 30;
      if (this.document.body.scrollTop <= 0) {
        clearInterval(scrollInterval);
      }
    }, 1);
  }

}
