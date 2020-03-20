import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CovidDataService {

  constructor(
    private http: HttpClient
  ) {

  }
  getData(country){
    console.log(country)
    var headers = new HttpHeaders({ "x-rapidapi-host":"coronavirus-monitor.p.rapidapi.com", "x-rapidapi-key": "8837c5d3c4msh517769883b6d693p1cf199jsn895aef8c65d1"})
    headers.append("x-rapidapi-key", "8837c5d3c4msh517769883b6d693p1cf199jsn895aef8c65d1");
    headers.append("x-rapidapi-host", "coronavirus-monitor.p.rapidapi.com");

    const url = "https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php?country="+country;
    return this.http.get(url,{headers: headers})
  }
}
