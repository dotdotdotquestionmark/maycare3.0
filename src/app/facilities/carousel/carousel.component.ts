import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { } 

  public delaytime:number = 5000;
  public cycle:number = 0;
  public position:number = 1;
  public imagePath: string = `assets/images/slideshow/Shared/Shared${ this.position }.jpeg`;

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
    if(this.position == 7) {
      this.position = 1;
    }
    else {
      this.position += 1;
    }
    this.imagePath = `assets/images/slideshow/Shared/Shared${ this.position }.jpeg`;
    console.log(this.imagePath);
  }

  prevpic() {
    if(this.position == 1) {
      this.position = 7;
    }
    else {
      this.position -= 1;
    }
    this.imagePath = `assets/images/slideshow/Shared/Shared${ this.position }.jpeg`;
    console.log(this.imagePath);
  }
  
}

