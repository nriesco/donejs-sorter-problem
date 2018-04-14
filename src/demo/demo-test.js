import QUnit from 'steal-qunit';
import { ViewModel } from './demo';

// ViewModel unit tests
QUnit.module('donejs-base/demo');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.message, 'This is the demo component');
});
