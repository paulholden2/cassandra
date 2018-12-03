import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { remote } from 'electron';

@Component({
  selector: 'app-springcm-file-toolbar',
  templateUrl: './springcm-file-toolbar.component.html',
  styleUrls: ['./springcm-file-toolbar.component.scss']
})
export class SpringcmFileToolbarComponent implements OnInit {
  filePath: String = null;
  hasChanges: Boolean = false;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params.hasOwnProperty('path')) {
        this.filePath = decodeURIComponent(params['path']);
      }

      console.log(this.filePath);
    });
  }

  ngOnInit() {
  }

  hasOpenedFile() {
    return this.filePath !== null;
  }

  chooseFile() {
    var files = remote.dialog.showOpenDialog({
      properties: [ 'openFile' ]
    });

    if (files !== null && files.length === 1) {
      this.filePath = files[0];
    } else {
      // TODO: Error popover
    }
  }

}
