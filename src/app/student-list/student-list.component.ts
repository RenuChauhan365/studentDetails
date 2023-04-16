import {Component} from '@angular/core';
import {StudentInterface} from 'Model/studentInterface'

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {



  arr:StudentInterface[]=[

    {
      ID: 1,
      Name: "Renu",
      Age: 20,
      Grade: "A",
      Average: 90,
      Active: "Yes"
    },

    {
      ID: 2,
      Name: "Maya",
      Age: 30,
      Average: 50,
      Grade: "A",
      Active: "No"
    }, {
      ID: 3,
      Name: "Kaya",
      Age: 50,
      Average: 60,
      Grade: "C",
      Active: "Yes"
    }, {
      ID: 4,
      Name: "Resha",
      Age: 20,
      Average: 90,
      Grade: "B",
      Active: "No"
    }, {
      ID: 5,
      Name: "Kyan",
      Age: 50,
      Average: 30,
      Grade: "A",
      Active: "No"
    }, {
      ID: 6,
      Name: "Rudra",
      Age: 10,
      Average: 50,
      Grade: "A",
      Active: "Yes"
    }, {
      ID: 7,
      Name: "Mahi",
      Age: 30,
      Average: 80,
      Grade: "D",
      Active: "Yes"
    }, {
      ID: 8,
      Name: "Mahira",
      Age: 10,
      Average: 40,
      Grade: "E",
      Active: "No"
    }, {
      ID: 9,
      Name: "Aashvi",
      Age: 90,
      Average: 90,
      Grade: "B",
      Active: "Yes"
    }

  ]



}
