import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  contacts=[
    [
      "Gautham",
      "gauthammeiarasu@gmail.com",
      "8300070410",
      'assets/img.png'
    ],
    [
      "Meiarasu",
      "meiarasuk.18cse@kongu.edu",
      "9788722412",
      'assets/img.png'
    ],
  ];
  name='';
  email='';
  phone='';
  image='';
  
  constructor() {  }
  
  ngOnInit(): void {
  }
  add(){
    
    console.log(this.image);
    this.contacts.push([this.name,this.email,this.phone,'assets/'+this.image+'.png']);
    console.log(this.name);
  }
}