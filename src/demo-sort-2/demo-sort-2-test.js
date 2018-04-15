import QUnit from 'steal-qunit';
import { ViewModel } from './demo-sort-2';

// ViewModel unit tests
QUnit.module('donejs-base/demo-sort-2');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.message, 'This is the demo-sort-2 component');
});
