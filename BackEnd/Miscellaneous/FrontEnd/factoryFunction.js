function personMaker (name,age) {
    const person = {
        name: name,
        age: age,
        talk(){
            console.log(`Hi, My Name is ${this.name}`);
        }
    };
    return person;
}

