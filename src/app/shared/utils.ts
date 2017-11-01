import { RouterStateSerializer } from '@ngrx/router-store';
import { RouterStateSnapshot, Params } from '@angular/router';

/**
 * The RouterStateSerializer takes the current RouterStateSnapshot
 * and returns any pertinent information needed. The snapshot contains
 * all information about the state of the router at the given point in time.
 * The entire snapshot is complex and not always needed. In this case, you only
 * need the URL and query parameters from the snapshot in the store. Other items could be
 * returned such as route parameters and static route data.
 */

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
}

export class CustomRouterStateSerializer
  implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;
    const queryParams = routerState.root.queryParams;

    return { url, queryParams };
  }
}


export function getValidFromFileList(files: FileList, allowedExtensions: Array<string>) {
  let validFiles: Array<File> = [];

  Array.from(files).forEach((file: File) => {
    let fileExtension = file.name.split('.')[file.name.split('.').length - 1];

    if (allowedExtensions.includes(fileExtension)) {
      validFiles.push(file);
    }
  });

  return validFiles;
}
