import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel3',
  templateUrl: './carousel3.component.html',
  styleUrls: ['./carousel3.component.scss']
})
export class Carousel3Component implements OnInit {

  constructor() { }
  public delaytime:number = 5000;
  public cycle:number = 0;
  public position:number = 1;
  public imagePath: string = `assets/images/slideshow/Mumford/MumfordSlide${ this.position }.JPEG`;

  ngOnInit(): void {
    this.autoshuffle();
  }

  async autoshuffle() {
    while(this.cycle < 20000) {
      this.nextpic();
      this.cycle += 1;
      await this.delay(this.delaytime);
    }
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  } 

  addtime() {
    this.delaytime = 10000;
  }

  nextpic() {
    if(this.position == 5) {
      this.position = 1;
    }
    else {
      this.position += 1;
    }
    this.imagePath = `assets/images/slideshow/Mumford/MumfordSlide${ this.position }.JPEG`;
    console.log(this.imagePath);
  }

  prevpic() {
    if(this.position == 1) {
      this.position = 5;
    }
    else {
      this.position -= 1;
    }
    this.imagePath = `assets/images/slideshow/Mumford/MumfordSlide${ this.position }.JPEG`;
    console.log(this.imagePath);
  }
}