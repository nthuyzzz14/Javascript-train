let emailKey = "email";

let infor = {
  name: "Ma Thanh Thuy",
  age: 19,
  address: "Yen Trach",
  [emailKey]: "mathanhthuyreal207@gmail.com",
  getName: function () {
    return this.name;
  },
};

delete infor.address;

console.log(infor.getName());
