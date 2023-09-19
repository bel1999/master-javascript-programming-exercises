function addFullNameProperty(obj) {
  obj.fullName = obj.firstName + " " + obj.lastName;
  return obj
}
console.log(addFullNameProperty({ firstName: "Elias", lastName: "Toroa" }))
