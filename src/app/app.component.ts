import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'ANGULAR-LIFECYCLE-HOOK';
  inputValue: string = '';
  toDestory: boolean = false;
  constructor(){
    console.log('App Component const called');
  }

  onBtnClicked(inputEl: HTMLInputElement){
    this.inputValue = inputEl.value;
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked Hook called from AppComponent");
  }

  OnDestory(){
    this.toDestory = !this.toDestory;
  }
 
}
