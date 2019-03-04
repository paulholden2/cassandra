import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { remote } from 'electron';

@Component({
  selector: 'app-springcm-import-items',
  templateUrl: './springcm-import-items.component.html',
  styleUrls: ['./springcm-import-items.component.css']
})
export class SpringcmImportItemsComponent implements OnInit {

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

    this.router.navigate([ '/platforms/springcm/import/file' ], {
      queryParams: {
        path: encPath,
        service: 'import-springcm'
      }
    });
  }
}
