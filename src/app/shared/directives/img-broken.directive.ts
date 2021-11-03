import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})

export class ImgBrokenDirective {
  
  @Input() optionalImg:string = '';
  
  @HostListener('error') handlerError():void {
    const nativeElement = this._element.nativeElement;
    // nativeElement.src = "../../assets/images/img-broken.png";
    nativeElement.src = this.optionalImg;
  }
  
  constructor(private _element: ElementRef) { 
    // console.log(this._element);
  }
}
