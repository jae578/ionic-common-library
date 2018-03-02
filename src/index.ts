import { NgModule, ModuleWithProviders } from '@angular/core';
import { FocusNextInputDirective } from './directives/focus-next-input.directive';
export * from './directives/focus-next-input.directive';

@NgModule({
  declarations: [
    FocusNextInputDirective
  ],
  exports: [
    FocusNextInputDirective
  ]
})
export class FocusNextInputModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FocusNextInputModule
    };
  }
}
