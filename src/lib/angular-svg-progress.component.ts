import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

export interface CenterTextStyle {
  text: string;
  textSize: number;
  fillColor: string;
  fontWeight: number | number;
}
@Component({
  selector: 'angular-svg-progress',
  templateUrl: 'angular-svg-progress.component.html'
})
export class AngularSvgProgressComponent implements OnInit {

  @Input() svgProgress: number;
  @Input() progressColor: string = 'red';
  @Input() width: number = 100;
  @Input() height: number = 100;
  @Input() shape: string = 'rectangle';
  @Input() borderColor: string = 'black';
  @Input() showPercentage: boolean = true;
  @Input() showMiddleText: boolean;
  @Input() middleTextStyle: CenterTextStyle;
  @Input() percentageColor: string = 'black';
  @Input() direction: string = 'horizontal';
  @Input() backgroundFill: string = '#eee8dc';
  @Input() fontSize: number = 15;
  @Input() borderRadius: number = 10;
  @Input() radius: number = 50;
  @Input() circleWidth: number = 15;
  @Input() middleText: string | number;
  progress: string;
  svgWidth: string;
  svgHeight: string;
  animateFrom: number;
  x1: string = `0%`;
  y1: string = `100%`
  x2: string = `100%`
  y2: string = `0%`;
  circleViewBox: any;
  strokeDashoffset: number;
  circumference;
  constructor() { }

  ngOnInit() {
    this.svgWidth = this.width.toString() + `px`;
    this.svgHeight = this.height.toString() + `px`;
    if (this.direction === 'vertical') {
      this.x2 = `0%`;
      this.y1 = `100%`;
      this.x1 = `0%`;
      this.y2 = `0%`;
    }
    this.circleViewBox = 0, 0, (this.radius + 10) * 2, (this.radius + 10) * 2;
    this.circumference = 2 * Math.PI * this.radius;
    this.strokeDashoffset = this.circumference;
    console.log(this.direction, this.x2, this.y1);
  }
  ngOnChanges(changes: SimpleChanges) {
    const { currentValue, previousValue } = changes['svgProgress'];
    this.progress = currentValue.toString() + `%`;
    if (this.shape === 'circle') {
      this.strokeDashoffset = this.circumference * (1 - (this.svgProgress / 100));
    }
    this.animateFrom = previousValue ? previousValue : 0;
    setTimeout(() => {
      this.animateFrom = this.svgProgress;
    }, 50);
  }

}
