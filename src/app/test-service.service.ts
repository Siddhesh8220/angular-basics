import { Injectable } from '@angular/core';

@Injectable({
  //if your service have dependancy then uses injectable
  //@Component decorator uses this internally no need to use explicitly
  providedIn: 'root',
})
export class TestServiceService {
  constructor() {}
}
