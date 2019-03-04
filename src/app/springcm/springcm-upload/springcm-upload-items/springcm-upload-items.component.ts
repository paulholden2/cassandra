import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { remote } from 'electron';

@Component({
  selector: 'app-springcm-upload-items',
  templateUrl: './springcm-upload-items.component.html',
  styleUrls: ['./springcm-upload-items.component.css']
})
export class SpringcmUploadItemsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  fromFile() {
    // Get file path
    var files = remote.dialog.showOpenDialog({
      properties: [ 'openFile' ]
    });

    if (!files || files.length !== 1) {
      return;
    }

    var encPath = encodeURIComponent(files[0]);

    this.router.navigate([ '/platforms/springcm/upload/file' ], {
      queryParams: {
        path: encPath,
        service: 'upload-springcm'
      }
    });
  }

}
