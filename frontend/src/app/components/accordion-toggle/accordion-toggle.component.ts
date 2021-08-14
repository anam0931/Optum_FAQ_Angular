import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export class Faq{
  constructor(
    public id: string,
    public que: string,
    public ans: string
  ){
  }
}


@Component({
  selector: 'app-accordion-toggle',
  templateUrl: './accordion-toggle.component.html',
  styleUrls: ['./accordion-toggle.component.css']
})
export class AccordionToggleComponent implements OnInit {

  
  public faq: Faq[];
  searchValue: string;
  constructor(
    private httpClient: HttpClient
  ) { 
    this.faq = [];
    this.searchValue = "";
  }

  ngOnInit(): void {
    //store value from localhost mongodb server
    this.getFaq();
  }

  getFaq(){
    this.httpClient.get<Faq[]>('http://localhost:3000/api/tasks').subscribe(
      response => {
        console.log(response);
        this.faq = response;
      }
    );
  }
}
