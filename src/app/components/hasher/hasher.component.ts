import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { StateKey } from '@angular/platform-browser/src/browser/transfer_state';
declare var require: any;
var sha512 = require('hash.js/lib/hash/sha/512');

@Component({
  selector: 'app-hasher',
  templateUrl: './hasher.component.html',
  styleUrls: ['./hasher.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HasherComponent implements OnInit {

  hash:string;
  constructor() { }

  ngOnInit() {
  }
    hasher(w:string, s:string, p:string) {
    console.log("Starting...")
    var web_seed:string = sha512().update(w+s).digest('hex');
    var raw:string = sha512().update(web_seed+p).digest('hex');
    var password:string = raw.substring(0, 12);
    this.hash = password
  }
}
