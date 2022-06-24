import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { IMAGE_SIZES } from 'src/app/constants/image-sizes';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('slideFade', [
      //name of the trigger
      state('void', style({ opacity: 0 })), //what is the end state
      transition('void => *', [animate('1s')]), //start
      transition('* => void', [animate('500ms')]) //end
    ])
  ]
})
export class SliderComponent implements OnInit {
  @Input() items: Movie[] = [];
  imageSizes = IMAGE_SIZES;
  currentSlideIndex: number = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.currentSlideIndex = ++this.currentSlideIndex % this.items.length;
    }, 5000);
  }
}
