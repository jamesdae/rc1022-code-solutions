/* exported LinkedList */

class LinkedList {

  constructor(...values) {

    let next = null;
    let [data] = values;

    Object.defineProperty(this, 'next', {
      get: function () {
        return next;
      },
      set: function (node) {
        if (!(node instanceof LinkedList) && node !== null) {
          throw new TypeError(
            'the `next` node in a linked list must be a LinkedList object'
          );
        }
        next = node;
      }
    });

    Object.defineProperty(this, 'data', {
      get: function () {
        return data;
      },
      set: function (value) {
        if (typeof value === 'undefined') {
          throw new TypeError('the `data` value of a LinkedList cannot be undefined');
        }
        data = value;
      }
    });

    this.print = function () {
      let output = 'LinkedList { ' + JSON.stringify(this.data);
      let node = this;
      while (node.next) {
        output += ' <- ' + JSON.stringify(node.next.data);
        node = node.next;
      }
      return output + ' }';
    };

    this.data = data;

    for (let i = 1, node = this; i < values.length; i++) {
      node = node.next = new LinkedList(values[i]);
    }

    Object.freeze(this);

  }

}
