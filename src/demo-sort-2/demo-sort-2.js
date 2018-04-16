import Component from 'can-component';
import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';
import './demo-sort-2.less';
import $ from 'jquery';
import view from './demo-sort-2.stache';


var sorter = function(a, b) {
  let a2 = parseFloat(a.order);
  let b2 = parseFloat(b.order);
  return a2 > b2;
};



export const ViewModel = DefineMap.extend({
  get myPromise() {
    return new Promise((resolve, reject) => {
      let options = { url: 'https://jsonplaceholder.typicode.com/users' };
      $.ajax(options)
        .done(resolve)
        .fail(reject);
    });
  },
  elements: {
    get: function(last, set) {
      this.myPromise.then(set).catch(e => {
        console.log('catch!!!', e);
        return e;
      });
    }
  },
  sortedElements: {
    get: function() {
      return this.elements;
      // return this.elements.get();
      // if (this.elements !== undefined && typeof this.elements.get === 'function') {
      //   return this.elements.get().sort(sorter);
      // }
    }
  },
  modifiedElements: {
    get: function() {
      return this.elements;
      // if (this.elements !== undefined) {
      //   return this.elements.get().map(element => {
      //     element.order += ' super!';
      //     return element;
      //   });
      // }
    }
  },
});

export default Component.extend({
  tag: 'demo-sort-2',
  ViewModel,
  view
});
