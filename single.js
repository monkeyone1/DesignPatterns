let Singleton = function(name) {
  this.name = name;
  this.instance = null;
};

Singleton.prototype.getName = function() {
  console.log(this.name);
};
Singleton.getInstance = function(name) {
  if (!this.instance) {
    this.instance = new Singleton(name);
  }
  return this.instance;
};

let a = Singleton.getInstance("hello1");
let b = Singleton.getInstance("hello2");
a.getName();
b.getName();
console.log(a === b);
