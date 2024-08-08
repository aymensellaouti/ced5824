import { HttpClient } from '@angular/common/http';
import { Component, inject, Input } from '@angular/core';
import { combineLatest, map, Observable, timer } from 'rxjs';

export interface ImagesResponse {
  success: boolean;
  total_photos: number;
  message: string;
  offset: number;
  limit: number;
  photos: Photo[];
}

export interface Photo {
  url: string;
  user: number;
  title: string;
  id: number;
  description: string;
}

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent {
  @Input() images: string[] = [
    '404.png',
    'as.jpg',
    'cv.png',
    'rotating_card_profile.png',
    'rotating_card_profile2.png',
    'rotating_card_profile3.png',
  ];
  @Input() intervalTimer = 1000;
  @Input() size = 150;
  photos$ = this.http
    .get<ImagesResponse>('https://api.slingacademy.com/v1/sample-data/photos')
    .pipe(map((response) => response.photos));
  slider$: Observable<string> = timer(0, this.intervalTimer).pipe(
    // 0 1 2 3 4 5 6 7 8 9 10 11
    map((counter) => this.images[counter % this.images.length])
    // image1 image2 image3
  );
  slider2$ = combineLatest([this.photos$, timer(0, this.intervalTimer)]).pipe(
    map(([photos, index]) => photos[index % photos.length].url)
  );
  constructor(private http: HttpClient) {}
}
