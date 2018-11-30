import { Component, OnInit, Injectable, Renderer2 } from '@angular/core';

// function _window(): any {
//   // return the global native browser window object
//   return window;
// }

// @Injectable()
// export class WindowRef {
//   get nativeWindow(): any {
//      return _window();
//   }
// }

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(private rendered: Renderer2) {
    }

    ngOnInit() {
      // (function(w, d, s, u) {
      //   w.RocketChat = function(c) {
      //     w.RocketChat._.push(c);
      //   };
      //   w.RocketChat._ = [];
      //   w.RocketChat.url = u;
      //   const h = this.rendered.getElementsByTagName(s)[0],
      //     j = this.rendered.createElement(s);
      //   j.async = true;
      //   j.src = 'https://ikealivechat.mobiliya.com/packages/rocketchat_livechat/assets/rocketchat-livechat.min.js?_=201702160944';
      //   h.parentNode.insertBefore(j, h);
      // })(this.winRef.nativeWindow, document, 'script', 'https://ikealivechat.mobiliya.com/livechat');
    }
}




