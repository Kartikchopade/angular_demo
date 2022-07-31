import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cource',
  templateUrl: './cource.component.html',
  styleUrls: ['./cource.component.css']
})
export class CourceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
course=[
  {'id':1,'name':'Learn Angular','description':'Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.','image':'assets/angular.jpg'},
  {'id':2,'name':'Learn Java','description':'Java is a high-level, class-based, object-oriented programming language. Java is a popular programming language. ','image':'assets/java.jpg'},
  {'id':3,'name':'Learn .Net','description':'.NET is a free, cross-platform, open source developer platform for building many different types of applications.','image':'assets/net.jpg'},
  {'id':4,'name':'Learn Python','description':'Python is a high-level, interpreted, general-purpose programming language. Easy to use.','image':'assets/python.jpg'},

]
}
