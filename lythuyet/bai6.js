let User = function (name, age, address) {
  this.name = name;
  this.age = age;
  this.address = address;

  this.getName = function () {
    return this.name;
  };

  this.getAge = function () {
    return this.age;
  };

  this.getAddress = function () {
    return this.address;
  };
};

//add them vao constructor Object
User.prototype.class = "dep trai";
User.prototype.getClass = function () {
  return this.class;
};

let user1 = new User("Thuy", 19, "Yen Trach");
let user2 = new User("Ngoc Anh", 19, "Bac Giang");

console.log(user1.getName());
