
class A {
  a = 1;
  getA() {
    return () => {
      return this.a;
    };
  }
}

const b = new A().getA();
console.log(b());
