[![npm](https://img.shields.io/npm/l/angular-svg-progress.svg)](https://www.npmjs.com/package/angular-svg-progress)
[![npm](https://img.shields.io/npm/v/angular-svg-progress.svg?style=flat-square)](https://www.npmjs.com/package/angular-svg-progress)
[![npm](https://badgen.net/npm/dm/angular-svg-progress)](https://www.npmjs.com/package/angular-svg-progress)
[![npm](https://badgen.net/bundlephobia/minzip/angular-svg-progress)](https://www.npmjs.com/package/angular-svg-progress)
##### 1.7 min zipped lightweight progress bar

# Angular SVG Progress
**SVG** Progress component for angular and ionic framework consist of bar, heart and circular loaders.

## Appearance ##
  <img src="https://user-images.githubusercontent.com/28846043/58533460-3d37ea00-8206-11e9-958d-f1d79af74dec.gif" alt="Appearence">

## Features
- Each loader component is an svg.
- Consist of bar, heart and circular loaders.
- Can be scaled to any size.
- customize color, size, value, border-radius, direction.

## Installation

#### 1. Install the NPM Package
```
npm install --save angular-svg-progress
```

#### 2. Import `AngularSvgProgressModule` module

**Add `AngularSvgProgressModule` in your app's root module**
```typescript
import { AngularSvgProgressModule } from 'angular-svg-progress';

// import the module
@NgModule({
  ...
  imports: [
    AngularSvgProgressModule
  ]
})
export class AppModule {}
```

**For Lazy Loaded Components add `AngularSvgProgressModule` in your child/shared module(s)**
```typescript
import { AngularSvgProgressModule } from 'angular-svg-progress';

@NgModule({
  ...
  imports: [
    AngularSvgProgressModule
  ]
})
export class SharedModule {}
```

# Usage

## Basic Usage
This HTML code demonstrates basic usage of this module:

```html
<angular-svg-progress
  [svgProgress]="Progress"
  style="margin-bottom: 25px;"
  [width]="500"
  [shape]="'rectangle'"
  [borderColor]="'#383a3e'"
  [direction]="'horizontal'"
  [showMiddleText]="true"
  [middleTextStyle]="{textSize: 12,fontWeight: 400}"
  [showPercentage]="true"
  [height]="40"
  [progressColor]="'#FF0000'">
</angular-svg-progress>
```

## Advanced Usage
The `<angular-svg-progress />` component takes many attributes that allows you to customize the progress. You can use the following table as a reference:

| Attribute Name | Type | Description | Default Value |
| --- | --- | --- | --- |
| shape | string | Shape of progress component. [bar, heart, circle] | rectangle |
| width | number | Total width in numbers(pixel) | 100 |
| height | number | Total height in numbers(pixel) | 100 |
| svgProgress | number | Dynamic progress value(in percentage) | NA |
| progressColor | string | Color of the progress indicator | red |
| borderColor | string | Color of the svg progress component border | black |
| showPercentage | boolean | To show the progress value | false |
| percentageColor | string | Progress value text color | black |
| showMiddleText | boolean | To show static text in the middle of the loader | false |
| middleText | string /number | static/dynamic text in the middle of the loader | NA |
| middleTextStyle | Object of type{textSize:number,fillColor:string,fontWeight:number/string} | style object for static text in the middle of the loader | null |
| direction | string | Direction in which progress indicator grows. [horizontal,vertical] | horizontal |
| backgroundFill | string | background color of the component svg | #eee8dc |
| fontSize | number | Font size of the progress value text(pixel) | 15 |
| borderRadius | number | Border radius for the svg component [only for shape bar] | 10 |
| radius | number | Radius of the circular progress | 50 |
| circleWidth | number | Width of the circular disk | 15 |


## Support this project
If you find this project useful, please star the repo to let people know that it's reliable. Also, share it with friends and colleagues that might find this useful as well. Thank you :smile:
