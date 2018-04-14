import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';
import set from 'can-set';
import superMap from 'can-connect/can/super-map/';
import loader from '@loader';

const Demo = DefineMap.extend({
  seal: false
}, {
  '_id': 'any',
  'order': 'any',
  'name': 'any',
  // 'active': { value: false },
  // 'boxOver': { value: false },
  // 'class': function() {

  //   if (this.boxOver) return 'list-group-item dnd-box-over';
  //   if (this.active) return 'list-group-item dnd-selected';
  //   return 'list-group-item';
  // },
});

const algebra = new set.Algebra(
  set.props.id('_id')
);

Demo.List = DefineList.extend({
  '#': Demo
});

Demo.connection = superMap({
  url: loader.urlApi + '/demo',
  Map: Demo,
  List: Demo.List,
  name: 'demo',
  algebra
});

export default Demo;