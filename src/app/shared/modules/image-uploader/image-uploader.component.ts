import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { getValidFromFileList } from '../../utils';

@Component({
  selector: 'wf-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss']
})
export class ImageUploaderComponent {
  @Output() selectImages: EventEmitter<any> = new EventEmitter();

  public allowedExtensions: Array<string> = ['gif', 'jpeg', 'jpg', 'png'];

  private fileList : any = [];
  constructor() { }

  onFilesChange(fileList : Array<File>){
    this.fileList = fileList;
    this.selectImages.emit(this.fileList);
  }

  onFilesSelect(fileInput) {
    if (fileInput.target.files && fileInput.target.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e : any) {
          //console.log(e.target.result);
      }

      //reader.readAsDataURL(fileInput.target.files);

      this.fileList = getValidFromFileList(fileInput.target.files, this.allowedExtensions);

      this.selectImages.emit(this.fileList);
    }
  }
}
