import Component from 'can-component';
import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';
import './demo.less';
import DemoModel from '~/models/demo';
import view from './demo.stache';
import platform from 'steal-platform';


var sorter = function(a, b) {
  let a2 = parseFloat(a.order);
  let b2 = parseFloat(b.order);
  return a2 > b2;
};


export const ViewModel = DefineMap.extend({
  get myPromise() {
    return DemoModel.getList({});
  },
  elements: {
    get: function(last, set) {
      this.myPromise.then(set);
    }
  },
  modifiedElements: {
    get: function() {
      if (this.elements !== undefined) {
        return this.elements.map(element => {
          element.order = 123; // this won't work on first load
          return element;
        });
      }
    }
  },
});

export default Component.extend({
  tag: 'demo',
  ViewModel,
  view
});