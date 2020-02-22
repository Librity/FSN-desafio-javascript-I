declare interface Array<T> {
  isEmpty(): boolean;
}

Array.prototype.isEmpty = function() {
  return !this || this.length === 0;
};
