import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

/*
 * This is the main root of the app.
 * Everything starts and ends here.
 */
  title = 'app';
  show : boolean = true;
  constructor (private router: Router) {
    router.events.subscribe((url:any) => {if(url.routerEvent) if (url.routerEvent.url == "/") this.show = false});
  }
  ngOnInit () {
    console.log("%cYou seem to be a web developer and that too a front-end one.\n%cHere is riddle for you:\n%cif ( youLikeWebDev ) {\n  %csendEmailTo('srijanreddy98@gmail.com');\n%c} else {\n  %cgoBack(toYourBoringLife);\n%c}", "color: black;font-size:25px;", "color: blue; font-size:25px", "color: blue; font-size:14px", "color: green; font-size:14px", "color: blue; font-size:14px", "color: red; font-size:14px", "color: blue; font-size:14px");
  }
}
