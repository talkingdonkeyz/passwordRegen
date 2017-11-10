import { Component, OnInit, ViewEncapsulation } from '@angular/core';
declare var require: any;
var Chance = require('chance')
var sha512 = require('hash.js/lib/hash/sha/512');
var randomize = require('randomatic');

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GeneratorComponent implements OnInit {

  count:number = 0
  salt:string
  constructor() { }

  ngOnInit() {
  }

  counter(){
    this.count++;
    console.log(this.count);
  }

  generator(f:string, o:string, r:string,){
    var randomstring:string = randomize('Aa0!', 20);
    console.log(randomstring+f+o+r+this.count)
    var seed:string = sha512().update(randomstring+f+o+r+this.count).digest('hex');
    console.log(seed)
    var chance:any = new Chance(seed);
    var sentence:string = chance.sentence()
    console.log(sentence)
    this.salt = sentence
  }

}
