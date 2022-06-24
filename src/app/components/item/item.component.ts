import { Component, Input, OnInit } from '@angular/core';
import { IMAGE_SIZES } from 'src/app/constants/image-sizes';
import { Movie } from '../../models/movie';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() itemData: Movie | null = null;
  imageSizes = IMAGE_SIZES;
  constructor() {}

  ngOnInit(): void {}
}
