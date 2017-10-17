import { Injectable } from '@angular/core';

function _document(): Document {
  return document;
}

@Injectable()
export class DocumentRef {
  get nativeDocument(): Document {
    return _document();
  }
}
