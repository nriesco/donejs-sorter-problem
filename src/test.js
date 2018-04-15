import F from 'funcunit';
import QUnit from 'steal-qunit';

import 'donejs-base/models/test';

import 'donejs-base/demo/demo-test';

import 'donejs-base/demo-sort-2/demo-sort-2-test';

F.attach(QUnit);

QUnit.module('donejs-base functional smoke test', {
  beforeEach() {
    F.open('./development.html');
  }
});

QUnit.test('donejs-base main page shows up', function() {
  F('title').text('donejs-base', 'Title is set');
});
