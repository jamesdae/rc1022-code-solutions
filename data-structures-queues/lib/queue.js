/* exported Queue */

class Queue {

  constructor(...values) {

    const data = {};

    let head = 0;
    let tail = -1;

    this.enqueue = function (value) {
      if (arguments.length < 1) {
        throw new TypeError('queue.enqueue() requires a value argument');
      }
      if (typeof value === 'undefined') {
        throw new TypeError('queue.enqueue(value) received undefined');
      }
      tail++;
      data[tail] = value;
    };

    this.peek = function () {
      if (tail < head) return;
      return data[head];
    };

    this.dequeue = function () {
      if (tail < head) return;
      const value = data[head];
      delete data[head];
      head++;
      return value;
    };

    this.print = function () {
      if (tail < head) return 'Queue { <empty> }';
      let output = 'Queue { ';
      for (let i = head; i < tail; i++) {
        output += JSON.stringify(data[i]) + ' <- ';
      }
      return output + JSON.stringify(data[tail]) + ' }';
    };

    for (let i = 0; i < values.length; i++) {
      this.enqueue(values[i]);
    }

    Object.freeze(this);

  }

}
