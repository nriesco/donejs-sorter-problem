import Component from 'can-component';
import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';
import './demo-sort-2.less';
import $ from 'jquery';
import view from './demo-sort-2.stache';

export const ViewModel = DefineMap.extend({
  message: {
    value: 'This is the demo-sort-2 component'
  },
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
      this.myPromise.then(set);
    }
  },
  filteredElements: {
    get: function() {
      if (this.elements !== undefined) {
        return this.elements.map(element => new DefineMap(element));
      } else {
        return this.elements;
      }
      // if (this.elements !== undefined) {
      //   let out = this.elements.map(element => {
      //     element = new DefineMap({ seal: false }, element);
      //     // element = Object.assign({}, element);
      //   });
      //   return new DefineList(out);
      // } else {
      //   return this.elements;
      // }
      // if (platform.isNode) {
      //   return this.elements;
      // } else {
      //   if (this.elements instanceof DefineList) {
      //     // returning this.elements.sort() will cause the browser to freeze (infinite loop)
      //     // return this.elements.sort(sorter);
      //     return this.elements;
      //   } else {
      //     return this.elements;
      //   }
      // }
    }
  },
});

export default Component.extend({
  tag: 'demo-sort-2',
  ViewModel,
  view
});
