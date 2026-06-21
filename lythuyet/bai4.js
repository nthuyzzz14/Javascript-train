let emailKey = "email";

let infor = {
  name: "Ma Thanh Thuy",
  age: 19,
  address: "Yen Trach",
  [emailKey]: "mathanhthuyreal207@gmail.com",
  // phuong thuc lay ten trong Object
  getName: function () {
    return this.name;
  },
};

delete infor.address;

console.log(infor.getName());
