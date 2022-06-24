import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { Tv } from 'src/app/models/tv';

@Component({
  selector: 'items-banner',
  templateUrl: './items-banner.component.html',
  styleUrls: ['./items-banner.component.scss']
})
export class ItemsBannerComponent implements OnInit {
  @Input() items: Movie[] = [];
  @Input() title: string = '';
  constructor() {}

  ngOnInit(): void {}
}
