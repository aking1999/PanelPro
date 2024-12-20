import {
  Directive,
  effect,
  ElementRef,
  inject,
  Input,
  Renderer2,
  signal,
} from '@angular/core';

@Directive({
  selector: '[appButtonLoading]',
})
export class ButtonLoadingDirective {
  @Input({ required: true, alias: 'appButtonLoading' }) isLoading =
    signal(false);
  private _nativeElement = inject(ElementRef).nativeElement;
  private _renderer = inject(Renderer2);
  private _width: number;
  private _height: number;

  constructor() {
    effect(() => {
      this._width = this._nativeElement.getBoundingClientRect().outerWidth;
      this._height = this._nativeElement.getBoundingClientRect().outerHeight;
      this._renderer.setStyle(this._nativeElement, 'width', this._width + 'px');
      this._renderer.setStyle(
        this._nativeElement,
        'height',
        this._height + 'px'
      );

      if (this.isLoading()) {
        this._nativeElement.disabled = true;
      } else {
        this._renderer.removeStyle(this._nativeElement, 'width');
        this._renderer.removeStyle(this._nativeElement, 'height');
        this._nativeElement.disabled = false;
      }
    });
  }
}
