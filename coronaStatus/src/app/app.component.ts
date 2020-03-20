import {Component, OnInit} from '@angular/core';
import {CovidDataService} from './covid-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public covidData = {};
  public stats = [];
  public countries = [];
  public country = 'India'
  constructor(private covidDataService: CovidDataService){
    this.countries = ['India','Usa', 'Italy', 'China', 'Pakistan', 'Canada']

  }
  ngOnInit(){
    this.getCovidUpdate(this.country)
  }
  public getCovidUpdate(country){
    console.log(country)
    this.covidDataService.getData(country).subscribe(
      (data)=>{this.covidData = data, this.stats = data['latest_stat_by_country'][0],console.log(data)},
      (er)=>console.log(er)
    )
  }
  title = 'covid19 Cases in ';
}
