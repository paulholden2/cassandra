import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Connection } from 'jsforce';

@Injectable({
  providedIn: 'root'
})
export class SalesforceService {
  conn: Connection;

  constructor() {
  }

  login(loginUrl, username, password) {
    let subject = new Subject();

    this.conn = new Connection({
      loginUrl: loginUrl
    });

    this.conn.login(username, password, (err, res) => {
      if (err) {
        subject.error(err);
      }

      subject.next();
    });

    return subject;
  }
}
