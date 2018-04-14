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
  sortedElements: {
    get: function() {
      if (platform.isNode) {
        return this.elements;
      } else {
        if (this.elements instanceof DefineList) {
          /**
           * returning this.elements.sort() will cause the browser to freeze (infinite loop)
           */
          // return this.elements.sort(sorter);
          return this.elements;
        } else {
          return this.elements;
        }
      }
    }
  },
});

export default Component.extend({
  tag: 'demo',
  ViewModel,
  view
});