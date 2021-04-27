class hater {
	constructor(firstName, lastName){
		this.firstName = firstName;
		this.lastName = lastName;
	}
	sayName(){
		console.log(`${this.firstName} ${this.lastName}`);
	}
}
let hater1 = new hater('Norm', 'Osbor');
let hater2= new hater('Bing', 'Bong');
hater1.sayName();
hater2.sayName();
