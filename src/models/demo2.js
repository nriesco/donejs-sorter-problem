import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';
import set from 'can-set';
import superMap from 'can-connect/can/super-map/';
import loader from '@loader';

const Demo2 = DefineMap.extend({
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

Demo2.List = DefineList.extend({
  '#': Demo2
});

Demo2.connection = superMap({
  url: loader.urlApi + '/demo2',
  Map: Demo2,
  List: Demo2.List,
  name: 'demo2',
  algebra
});

export default Demo2;