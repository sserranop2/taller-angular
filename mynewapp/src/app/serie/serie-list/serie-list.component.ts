import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { dataSerie } from '../dataSeries';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-list',
  standalone: false,
  templateUrl: './serie-list.component.html',
  styleUrl: './serie-list.component.css',
})
export class SerieListComponent implements OnInit {
  
  series: Array<Serie> = [];

  constructor(private serieService: SerieService) {}

  getSeriesList(): Array<Serie> {
    this.serieService.getSeries().subscribe((data) => {
      this.series = data;
    });
    return this.series;
  }

  ngOnInit() {
    this.getSeriesList();
  }

}
