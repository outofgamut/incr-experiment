import { Component, OnInit} from '@angular/core';
import { CheckinFacade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-feature75-component9',
  templateUrl: './feature75-component9.component.html',
  styleUrls: ['./feature75-component9.component.scss']
})
export class Feature75Component9Component implements OnInit {

    luggageList$ = this.checkinFacade.luggageList$;

    constructor(private checkinFacade: CheckinFacade) {
    }
    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.checkinFacade.load();
    }

}