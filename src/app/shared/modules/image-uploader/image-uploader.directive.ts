import {
  Directive,
  HostListener,
  HostBinding,
  EventEmitter,
  Output,
  Input,
} from '@angular/core';

import { getValidFromFileList } from '../../utils';

@Directive({
  selector: '[wfImageUploader]'
})
export class ImageUploaderDirective {
  @Input() private allowedExtensions: Array<string>;
  @Output() private filesChangeEmiter: EventEmitter<File[]> = new EventEmitter();
  @HostBinding('style.background') private background = '#eee';

  constructor() { }

  @HostListener('dragover', ['$event']) public onDragOver(event){
    event.preventDefault();
    event.stopPropagation();
    this.background = '#999';
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(event){
    event.preventDefault();
    event.stopPropagation();
    this.background = '#eee'
  }

  @HostListener('drop', ['$event']) public onDrop(event){
    event.preventDefault();
    event.stopPropagation();

    this.background = '#eee';

    let files = event.dataTransfer.files;
    if (files.length > 0) {
      let images: Array<File> = getValidFromFileList(files, this.allowedExtensions);
      this.filesChangeEmiter.emit(images);
    }
  }

}
