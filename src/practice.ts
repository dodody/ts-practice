// interface, type alias
interface Shape {
  getArea(): number; // Shape interface 에는 getArea 라는 함수가 꼭 있어야 한다.
}

// Circle 은 Shape interface를 (implements) 했다. 조건을 충족했다.
class Circle implements Shape {
  // public으로 하면 사용할 때 안의 내용을 조회할 수 있고,
  // private으로 하면 조회할 수 없다.
  constructor(public radius: number) {}
  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  // private를 사용했기 때문에 밖에서 조회할 수 없다. 조회하려면 public을 사용해야 한다.
  constructor(private width: number, private height: number) {}
  getArea() {
    return this.width * this.height;
  }
}

const circle: Circle = new Circle(5);
const rectangle: Rectangle = new Rectangle(5, 10);
const shapes: Shape[] = [circle, rectangle];
shapes.forEach((shape) => {
  console.log(shape.getArea());
});
