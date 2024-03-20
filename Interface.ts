interface UserInterface {
  name: string;
  age?: number;
  getMessage(): string;
}
const user: UserInterface = {
  name: "SK",
  age: 30,
  getMessage() {
    return "Hello" + this.name;
  },
};

const user2: UserInterface = {
  name: "Kamaraj",
  getMessage() {
    return "Hello" + this.name;
  },
};

console.log(user.getMessage());
