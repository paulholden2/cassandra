import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { remote } from 'electron';

@Component({
  selector: 'app-springcm',
  templateUrl: './springcm.component.html',
  styleUrls: ['./springcm.component.css']
})
export class SpringcmComponent implements OnInit {
  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  fromFile(service) {
    // Get file path
    var files = remote.dialog.showOpenDialog({
      properties: [ 'openFile' ]
    });

    if (!files || files.length !== 1) {
      return;
    }

    var encPath = encodeURIComponent(files[0]);

    this.router.navigate([ `/springcm/${service}/file` ], {
      queryParams: {
        path: encPath
      }
    });
  }
}
