/**
 * @name FocusNextInput
 * @description
 * focus on next element input tag when keyboard return key is pressed
 *
 * @usage
 *
 * ```html
 * <ion-input FocusNextInput
 *            nextId="next-input-id"
 *            type="text">
 * </ion-input>
 *
 * <ion-input id="next-input-id"
 *            type="text">
 * </ion-input>
 *
 * or
 *
 * <input id="next-input-id"
 *            type="text">
 * </input>
 * ```
 */
import {Directive, HostListener, Input} from "@angular/core";

declare const document;

@Directive({
  selector: '[FocusNextInput]'
})
export class FocusNextInputDirective {
  @Input('nextId') nextId: string;

  @HostListener('keydown', ['$event'])
  onKeyDown(event: any) {
    if (event.keyCode === 13 && this.nextId) {
      const element = document.getElementById(this.nextId);

      const inputElement = this.getInputElement(element);

      if (inputElement) {
        inputElement.focus();
      }
    }
  }

  getInputElement(element: any) {
    if (!element) return;
    if (element.tagName === 'INPUT') return element;
    if (!element.children || element.children.length < 1) return;

    for (let i = 0; i < element.children.length; i++) {
      const inputElement = this.getInputElement(element.children[i]);

      if (inputElement) {
        return inputElement;
      }
    }
  }
}