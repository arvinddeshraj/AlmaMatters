import { Component, OnInit } from '@angular/core';
import { range } from 'rxjs';
import { DirectoryService } from '../../../services/directory.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private dirService: DirectoryService) { }
  value = '';
  Option = '';
  showBatchOpt = false;
  showBranchOpt = false;
  finalCriteria: string;
  criteria: string[] = ['Batch', 'Branch'];
  selectedBatch = '';
  selectedBranch = '';
  students = [];
  showingStudents = [];
  // typesOfShoes: string[] = ['Batch', 'Branch'];
  batches: any[] = [];
  branches: any[] = [
    {value: 'b1' , viewValue : 'B.Tech'},
    {value: 'b2' , viewValue : 'B.Tech+Hons'},
    // {value: 'b3' , viewValue : 'CSE-Hons'},
    // {value: 'b4' , viewValue : 'ECE-Hons'}
  ]
  //   {value: 'steak-0', viewValue: 'Steak'},
  //   {value: 'pizza-1', viewValue: 'Pizza'},
  //   {value: 'tacos-2', viewValue: 'Tacos'}
  // ];
  ngOnInit() {
    this.getAll();
    const count = 0;
    // for (var i = 2016 ; i<new Date().getFullYear()+4 ; i++){
    //   count +=1

    // }
    this.batches = Array.from(Array(new Date().getFullYear()+4-2016).keys()).map(e => ({value:e,viewValue:2016+e}))
    console.log(this.batches)
  }

  getAll() {
    this.dirService.getAll(localStorage.getItem('x-auth')).subscribe(
      res => {
        this.students = JSON.parse(JSON.stringify(res));
        console.log(this.students[0]);
        this.copyStudents(this.students);
        console.log(res);
      },
      err => console.log(err)
    );
    // console.log(this.students)

  }
  copyStudents(arr) {
    this.showingStudents = arr;
  }
  getBatch() {
    this.showingStudents = [];
    for (const i of this.students) {
      // var pat = /^2017*/;
      if (i.Student_ID.split('' + this.selectedBatch).length > 1) {
        this.showingStudents.push(i);
      }
    }
  }
  getBranch() {
    var id = ''
    console.log(this.selectedBranch)
    if (this.selectedBranch == 'B.Tech'){
      id = '1'
      console.log('ID = 1')
    }
    if (this.selectedBranch == 'B.Tech+Hons') {
      id = '2'
      console.log('ID = 2')
    }
    this.showingStudents = []
    for(let i of this.students){
      if (i.Student_Registered_Degree == id) {
        this.showingStudents.push(i)
      }
    }
  }

}
