import { 
    Component,
    Input,
    ContentChild,
    ElementRef,
    OnInit,
    OnChanges,
    SimpleChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styles: ['./car.component.css']
})
export class CarComponent implements 
    OnInit, 
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
    @Input('carItem') car: {name: string, year: number};
    @Input() name: string;
    @ContentChild('carHeading') carHeading: ElementRef;

    constructor() {
        console.log('constructor');
    }

    ngOnInit() {
        console.log('ngOnInit');
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('ngOnChanges', changes);
    }

    ngDoCheck() {
        console.log('ngDoCheck');
    }

    ngAfterContentInit() {
        console.log('ngAfterContentInit')
    }

    ngAfterContentChecked() {
        console.log('ngAfterContentChecked')
    }

    ngAfterViewInit() {
        console.log('ngAfterViewInit')
    }

    ngAfterViewChecked() {
        console.log('ngAfterViewChecked')
    }

    ngOnDestroy() {
        console.log('ngOnDestroy');
    }
}