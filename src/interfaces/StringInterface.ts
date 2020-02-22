declare interface String {
  isEmpty(): boolean;
}

String.prototype.isEmpty = function() {
  return !this || this.length === 0 || !this.trim();
};
