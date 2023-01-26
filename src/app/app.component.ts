import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontend-workshop35';
  form!: FormGroup;
  itemsPerPage = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  noOfRecPerPage!: number;

  constructor(private fb : FormBuilder){

  }

  ngOnInit(){
    this.form = this.createForm();
  }

  changeRecPerPage(){
    this.noOfRecPerPage = this.form.value["noOfRecPerPage"];
  }

  private createForm(): FormGroup {
    return this.fb.group({
      noOfRecPerPage: this.fb.control<number>(10, [Validators.required]),
    });
  }

}
