import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input , OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent implements OnChanges, OnInit, DoCheck, AfterContentInit,  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

  title: string = "DEMONG";
  @Input() message: string = '';
 // @ViewChild('para') tempPara: ElementRef;
 //@ContentChild('contentInit') contentCheck: ElementRef = ;

  constructor(){
    console.log('Demo Component const called');
   // console.log(this.title);
   // console.log(this.message);
  }

  ngOnChanges(changes: SimpleChanges){
    console.log("ngOnChanges Hook Called");
   // console.log(changes);
  }

  ngOnInit(){
    console.log("ngOnInit Hook called");
   // console.log(this.tempPara.nativeElement.innerHTML);
  }

  ngDoCheck(){
    console.log("ngDoCheck Hook called");
  }

  ngAfterContentInit(){
    console.log("ngAFterContentInit Hook called");
   // console.log(this.contentCheck.nativeElement)
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked Hook called");
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit Hook called");
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked Hook called");
  }

  ngOnDestroy(){
    console.log("ngOnDestroy Hook called");
  }
}
