import Component from 'can-component';
import DefineMap from 'can-define/map/';
// import DefineList from 'can-define/list/';
import './demo.less';
import DemoModel from '~/models/demo';
import view from './demo.stache';
// import platform from 'steal-platform';


var sorter = function(a, b) {
  let a2 = parseFloat(a.order);
  let b2 = parseFloat(b.order);
  return a2 > b2;
};


export const ViewModel = DefineMap.extend({
  get myPromise() {
    return DemoModel.getList({});
    // return new Promise((resolve, reject) => {
    //   let options = { url: 'https://jsonplaceholder.typicode.com/users' };
    //   $.ajax(options)
    //     .done(data => resolve(new DefineList(data)))
    //     .fail(reject);
    // });
  },
  elements: {
    get: function(last, set) {
      this.myPromise.then(set);
    }
  },
  // elementsTest: {
  //   get: function(last, set) {
  //     this.myPromise.then(data => {
  //       data = data.sort(sorter);
  //       return set(data);
  //     });
  //   }
  // },
  sortedElements: {
    get: function() {
      if (this.elements !== undefined) {
        return this.elements.get().sort(sorter);
      }
    }
  },
  modifiedElements: {
    get: function() {
      if (this.elements !== undefined) {
        return this.elements.get().map(element => {
          element.order += ' super!';
          return element;
        });
      }
    }
  },
});

export default Component.extend({
  tag: 'demo-1',
  ViewModel,
  view
});