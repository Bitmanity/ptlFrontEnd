// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class NotifyService {

//   constructor() { }
// }
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class NotifyService {
    constructor(
            private toastyservice: ToastrService
    ) {}

    show(data: any, type: string = 'success', duration: number = 5000)
    {
        let title: string = data.title;
        let message: string = data.message;

        switch (type) {
            case 'info': this.toastyservice.info(message, title); break;
            case 'success': this.toastyservice.success(message, title); break;
            case 'error': this.toastyservice.error(message, title); break;
            case 'warning': this.toastyservice.warning(message, title); break;
        }
    }    
}