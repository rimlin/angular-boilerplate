import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageUploaderComponent } from './image-uploader.component';
import { ImageUploaderDirective } from './image-uploader.directive';

@NgModule({
  declarations: [
    ImageUploaderComponent,
    ImageUploaderDirective,
  ],
  imports: [ CommonModule ],
  exports: [
    ImageUploaderComponent,
    ImageUploaderDirective,
  ],
  providers: [],
})
export class ImageUploaderModule {}
