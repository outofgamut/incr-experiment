import { Component, OnInit} from '@angular/core';
import { CheckinFacade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-feature79-component2',
  templateUrl: './feature79-component2.component.html',
  styleUrls: ['./feature79-component2.component.scss']
})
export class Feature79Component2Component implements OnInit {

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