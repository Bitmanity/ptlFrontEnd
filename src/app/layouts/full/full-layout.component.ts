import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {ShareService } from '../../shared/services/share.service';
@Component({
    selector: 'app-full-layout',
    templateUrl: './full-layout.component.html',
    styleUrls: ['./full-layout.component.scss']
})

export class FullLayoutComponent {
    options = {
        direction: 'ltr'
    };
    constructor(
    	private shareService:ShareService){}

    ngOnInit(){
    console.log(this.shareService.getCurrentUser());
    }
}