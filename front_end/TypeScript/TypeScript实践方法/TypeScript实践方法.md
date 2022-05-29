# TypeScript 实践方法

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [TypeScript 实践方法](#typescript-实践方法)
  - [一. 了解 TypeScript](#一-了解-typescript)
    - [1.1 理解代码的生成是独立于类型的](#11-理解代码的生成是独立于类型的)
    - [1.2 习惯结构类型（Structural Typing）](#12-习惯结构类型structural-typing)
    - [1.3 限制使用 any 类型](#13-限制使用-any-类型)
  - [二. TypeScript 的类型系统](#二-typescript-的类型系统)
    - [2.1 使用编辑器来询问和探索类型系统](#21-使用编辑器来询问和探索类型系统)
    - [2.2 将类型视为价值的集合](#22-将类型视为价值的集合)
    - [2.3 知道如何分辨符号是类型空间还是值空间](#23-知道如何分辨符号是类型空间还是值空间)
    - [2.4 优先选择类型声明而不是类型断言](#24-优先选择类型声明而不是类型断言)
    - [2.5 避免对象包装类（String, Number, Boolean, Symbol, BigInt）](#25-避免对象包装类string-number-boolean-symbol-bigint)
    - [2.6 认识额外属性检查的局限性](#26-认识额外属性检查的局限性)
    - [2.7 尽可能将类型应用于整个函数表达式](#27-尽可能将类型应用于整个函数表达式)
    - [2.8 了解类型（type）和接口（interface）的区别](#28-了解类型type和接口interface的区别)

<!-- /code_chunk_output -->

## 一. 了解 TypeScript

### 1.1 理解代码的生成是独立于类型的

在高层次上，tsc 做了两件事：

- 将下一代 TypeScript/JS 转换为可以在旧浏览器中正常工作的旧 JS（即转译）。
- 检查代码是否有类型错误

这两种行为完全是相互独立的。换句话说，代码中的类型不能影响 TypeScript 生成的 JS。由于被执行的是 JS，这意味着类型不会影响代码运行方式。

1. **类型错误的代码仍会产生输出**

   由于代码输出与类型检查无关，因此有类型错误的代码也可以产生输出！可以把所有的 TypeScript 错误看作这些语言中的警告：它们表示很可能有一个值得被调查的问题，但这不会使构建停止。

2. **无法在运行时检查 TypeScript 类型**

   可能会想编写这样的代码：

   ```ts
   interface Square {
     width: number;
   }
   interface Rectangle extends Square {
     height: number;
   }
   type Shape = Square | Rectangle;
   function calculateArea(shape: Shape) {
     // 'Rectangle' 仅代表的是类型，但在这里被用作一个值
     if (shape instanceof Rectangle) {
       return shape.width * shape.height; // 类型 “Shape” 上不存在属性 “height”
     } else {
       return shape.width * shape.width;
     }
   }
   ```

   instanceof 检查是在运行时发生的，但 Rectangle 却是一个类型，所以它无法影响代码的运行时行为。TypeScript 类型都是 “可擦除”的：编译成 JS 的过程，其中一部分就是从代码中删除所有的 interface、type 和类型注释。

   为了确定上述代码中 shape 的类型，需要一些方法来在运行时重建它的类型。在这种情况下，可以检查是否存在 height 属性。

   ```ts
   function calculateArea(shape: Shape) {
     if ('height' in shape) {
       shape; // 类型是 Rectangle
       return shape.width * shape.height;
     } else {
       shape; // 类型是 Square
       return shape.width * shape.width;
     }
   }
   ```

   这是因为属性检查只涉及运行时可用的值，但仍然允许类型检查器将类型 shape 细化为 Rectangle 类型。

   还有一种方法是引入一个 “标签”，显式地将类型保留到运行时可用：

   ```ts
   interface Square {
     kind: 'square';
     width: number;
   }
   interface Rectangle {
     kind: 'rectangle';
     height: number;
     width: number;
   }
   type Shape = Square | Rectangle;

   function calculateArea(shape: Shape) {
     if (shape.kind === 'rectangle') {
       // shape 类型是 Rectangle
       return shape.width * shape.height;
     } else {
       // shape 类型是 Square
       return shape.width * shape.width;
     }
   }
   ```

   这里的 Shape 类型就是一个 “标签联合类型” 的例子。因为它们可以非常容易地在运行时恢复类型信息，所以标签联合在 TypeScript 中无处不在。

   有些构造过程会同时引入一个类型（在运行时不可用）和一个值（在运行时可用）。class 关键字就是其中之一。所以，还有一种修复错误的方法是也可以将 Square 和 Rectangle 作为类（classes）：

   ```ts
   class Square {
     constructor(public width: number) {}
   }
   class Rectangle extends Square {
     constructor(public width: number, public height: number) {
       super(width);
     }
   }
   type Shape = Square | Rectangle;
   function calculateArea(shape: Shape) {
     if (shape instanceof Rectangle) {
       // shape 类型是 Rectangle
       return shape.width * shape.height;
     } else {
       // shape 类型是 Square
       return shape.width * shape.width; // OK
     }
   }
   ```

   这样也能行的原因是 class Rectangle 同时引入了一个类型和一个值，而 interface 只引入了一个类型。

   其中，type Shape = Square | Rectangle 中的 Rectangle 指的是类型，而 shape instanceof Rectangle 中的 Rectangle 指的是值。尽管这种区别相当微妙，但对它的理解非常重要。请参见条款 8。<!--TODO-->

3. **类型操作不能影响运行时的值**

   假设你有一个可能是字符串或数字的值，想把它正常化，使其总是一个数字。以下是一个错误的例子，尽管类型检查器接受了：

   ```ts
   function asNumber(val: number | string): number {
     return val as number;
   }
   ```

   看一下生成的 JS，就会明白这个函数到底是干什么的。

   ```js
   function asNumber(val) {
     return val;
   }
   ```

   这里根本就没有进行任何转换。as number 是一个类型操作，所以它无法影响代码的运行时行为。为了使一个值正常化，需要检查它的运行时类型，并使用 JS 结构进行转换。

   ```ts
   function asNumber(val: number | string): number {
     return typeof val === 'string' ? Number(val) : val;
   }
   ```

   > as number 是一个类型断言，更多关于何时适合使用这些断言的内容，请参见条款 9 <!--TODO-->

4. **运行时类型可能与声明类型不一样**

   ```ts
   function setLightSwitch(value: boolean) {
     switch (value) {
       case true:
         turnLightOn();
         break;
       case false:
         turnLightOff();
         break;
       default:
         // 这个 console 可以执行到
         console.log(`I'm afraid I can't do that.`);
     }
   }
   ```

   TypeScript 通常会标记死代码，但它不会标记这个。这里的关键是，记住 boolean 是声明类型。因为它是 TypeScript 类型，所以在运行时就会消失。在 JS 代码中，用户可能会在无意中用一个类似 "ON" 的值调用 setLightSwitch。

   在纯 TypeScript 中也有办法触发这个代码路径。函数可能用来自一个网络请求的值调用。

   ```ts
   interface LightApiResponse {
     lightSwitchValue: boolean;
   }
   async function setlight() {
     const response = await fetch('/light');
     const result: LightApiResponse = await response.json();
     setLightSwitch(result.lightSwitchValue);
   }
   ```

   已经声明 /light 请求的结果是 LightApiResponse，但没有任何东西可以保证这个。如果没有正确理解 API，并且 lightSwitchValue 是一个 string 的话，那么在运行时就会传给 setLightSwitch 一个字符串。还有一个可能，就是部署完毕后 API 发生了变化。

   当运行时类型与声明的类型不匹配时，TypeScript 会变得相当难以理解，应该尽可能避免这种情况。但是要意识到，一个值可能具有与声明的类型不同。

5. **不能基于 TypeScript 类型来重载一个函数**

   像 C++ 这样的语言允许定义一个函数的多个版本，它们仅在参数的类型上有所不同。这就是 “函数重载”。因为代码的运行时行为是独立于它的 TypeScript 类型的，所以这种函数重载在 TypeScript 中是不可能的。

   ```ts
   // 函数实现重复
   function add(a: number, b: number) {
     return a + b;
   }
   // 函数实现重复
   function add(a: string, b: string) {
     return a + b;
   }
   ```

   TypeScript 确实提供了一个重载函数的工具，但它完全是在类型级别上操作的。可以为一个函数提供多个声明，但它只有一个实现。

   ```ts
   function add(a: number, b: number): number;
   function add(a: string, b: string): string;

   function add(a, b) {
     return a + b;
   }

   const three = add(1, 2); // 类型是 number
   const twelve = add('1', '2'); // 类型是 string
   ```

   add 的前两个声明只提供类型信息。当 TypeScript 生成 JS 时，它们会被移除，只留下实现（如果要使用这种风格的重载，请先看看条款 50。这里有一些微妙的地方需要注意）<!--TODO-->

6. **TypeScript 类型对运行时的性能没有影响**

   因为当生成 JS 时，类型和类型操作会被清除，所以它们不可能对运行时性能产生影响。TypeScript 的静态类型是真正的零成本。这里有两个注意事项：

   - 虽然没有运行时的开销，但 TypeScript 编译器会引入构建时的开销。TypeScript 团队非常重视编译器的性能，编译速度通常相当快，特别是对于增量构建。如果开销变得显著，也可以使用 “transpile only” 选项跳过类型检查。

   - TypeScript 为支持旧的运行时而产生的代码可能会对原生实现产生性能开销。例如，如果使用生成器函数（generator functions），并以 ES5 为目标，而 ES5 比生成器出现得更早，那么 tsc 就会产生一些辅助代码来使其工作。这与生成器的原生实现相比，可能会有一些开销。在任何情况下，这都与生成目标和语言级别有关，而仍旧与类型不相关。

**总结**：

- 代码的生成是独立于类型系统的。这意味着 TypeScript 类型不能影响代码的运行时行为或性能。
- 一个有类型错误的程序是有可能产生代码的（“编译”）。
- TypeScript 类型在运行时是不可用的。要在运行时查询一个类型，需要一些方法来重建它。标签联合和属性检查是常见的方法。一些构造，如 class，既引入了 TypeScript 类型，又引入了一个在运行时可用的值。

### 1.2 习惯结构类型（Structural Typing）

JS 本质上属于鸭子类型（duck typed）[^yz]：如果向函数传递具有所有正确属性的值，那么它就不会在乎如何创建该值。JS 仅仅是使用它。TypeScript 可以模拟这种行为，不过因为类型检查器对类型的理解可能比想象得要广泛，所以有时会得到令人惊讶的结果。掌握结构类型将有助于理解 “正确” 与 “错误”，并写出更可靠的代码。

[^yz]: 在程序设计中，鸭子类型（duck typing）是动态类型的一种风格。在这种风格中，一个对象有效的语义，不是由继承自特定的类或实现特定的接口，而是由当前方法和属性的集合决定。

例如，在写一个具有二维向量类型的物理库：

```ts
interface Vector2D {
  x: number;
  y: number;
}
```

然后写了一个计算它长度的方法：

```ts
function calculateLength(v: Vector2D) {
  return Math.sqrt(v.x * v.x + v.y * v.y);
}
```

现在，想要引入一个具名向量（NamedVector）的概念：

```ts
interface NamedVector {
  name: string;
  x: number;
  y: number;
}
```

由于 NamedVector 这一概念也具有类型都为 number 的 x 和 y 属性，所以 TypeScript 可以智能地令 NamedVector 也可以调用 calculateLength 函数：

```ts
const v: NamedVector = { x: 3, y: 4, name: 'Zee' };
calculateLength(v); // 结果是5
```

有趣的是，从没有声明过 Vector2D 和 NamedVector 之间的关系，并且也不用再为 NamedVector 编写 calculateLength 的另一个实现。

TypeScript 的类型系统会对 JS 的运行时行为建模。因为 NamedVector 的结构与 Vector2D 兼容，所以它允许通过 NamedVector 调用 calculateLength。这就是术语 “结构类型（Structural Typing）”的来源。不过这也会造成一些问题。例如，要添加一个三维向量（3D vector)类型：

```ts
interface Vector3D {
  x: number;
  y: number;
  z: number;
}
```

此时，想写一个归一化（Normalize）函数（令向量的长度为 1）：

```ts
function normalize(v: Vector3D) {
  const length = calculateLength(v);
  return {
    x: v.x / length,
    y: v.y / length,
    z: v.z / length
  };
}
```

如果调用这个函数，那么就会得到一个大于单位向量的向量结果，Bug 出在 calculateLength 作用在二维向量上，而 normalize 作用在三维向量上。所以 z 元素在使用 normalize 归一化向量为单位向量时被忽略掉了。

可能更让人意外的是类型检查器并没有识别到这个问题。为什么尽管 calculateLength 函数入参类型声明它需要一个二维向量，但类型检查器仍然允许它使用三维向量调用该函数呢？

刚刚引入的 “具名向量（named vectors）” 是一个很有效的方法，但在当前的应用场景中却适得其反。以一个 {x,y,z} 对象调用 calculateLength 并不会报错，所以尽管该行为在系统中产生了一个 bug，但类型检查器却并没有报错。（也可以让这里报错，会在 37 条款中回到这个例子上来）

在编写函数时，很容易想象它们会被具有声明的属性且没有其他属性的参数调用。这被称为 “密封（sealed）” 或 “精确（precise）” 的类型，无法在 TypeScript 的类型系统中表示。无论喜欢与否，类型都是 “开放的（open)”。这有时会导致一些意料之外的后果：

```ts
function calculateLengthL1(v: Vector3D) {
  let length = 0;
  for (const axis of Object.keys(v)) {
    const coord = v[axis]; // 元素隐式具有 “any”类型，因为 'string' 不能用于索引 'Vector3D' 类型
    length += Math.abs(coord);
    return length;
  }
}
```

为什么这是一个错误呢？既然轴（axis）是 v 的键之一，而 v 是一个 Vector3D，那么 axis 应该是 “×”、"y" 或 "z" 之一；并且根据 Vector3D 的声明，它们都是 number，那么 coord 的类型不应该也是 number 吗？

这当然不是一个 “假性” 错误！TypeScript 在这里做了正确的报错。刚才的函数逻辑假设了类型 Vector3D 是 “密封的（sealed）” 且不会有其他的属性。但实际上，它可以有：

```ts
const vec3D = { x: 3, y: 4, z: 1, address: '123 Broadway' };
calculateLengthL1(vec3D); // 返回 NaN
```

由于 v 可能具有任何属性，而可确信的只有 axis 的类型是 string 而已。就像刚才亲眼所见的那样，TypeScript 没理由相信 `v[axis]` 的类型一定是一个 number，事实也的确如此。遍历对象可能很难做到类型正确。会在条
款 54 <!--TODO--> 继续这个话题：

```ts
function calculateLengthL1(v: Vector3D) {
  return Math.abs(v.x) + Math.abs(v.y) + Math.abs(v.z);
}
```

因为结构类型是在结构上比较可否赋值的，所以在使用 class 时也会带来一些意外：

```ts
class C {
  foo: string;
  construct(foo: string) {
    this.foo = foo;
  }
}
const c = new C('instance of C');
const d: C = { foo: 'object literal' }; // OK!
```

因为 d 具有一个类型为 string 的属性 foo，所以 d 可以被声明为 C 类型。另外，它有一个可以用一个参数调用（通常会用零个参数调用）的来自 Object.prototype 的构造函数。因此在类型上，它们两个是匹配的。所以如果在 C 的构造器里有逻辑，然后写了一个基于该逻辑会被运行的假设的函数，那么可能会造成一些意外。这与 C++ 或 Java 这样的语言是完全不同的。在 C++ 或 Java 中，声明类型为 C 的参数可以保证该参数的类型是 C 或者其子类。

但是，结构类型在写测试的时候大有裨益。假设有一个函数可以在数据库上运行查询并处理结果：

```ts
interface Author {
  first: string;
  last: string;
}
function getAuthors(database: PostgresDB): Author[] {
  const authorRows = database.runQuery(`SELECT FIRST, LAST FROM AUTHORS`);
  return authorRows.map(row => ({ first: row[0], last: row[1] }));
}
```

可能会通过 Jest 对 PostgresDB 逻辑进行测试。不过有一种更好的办法，就是使用结构类型来定义一个瘦接口：

```ts
interface DB {
  runQuery: (sql: string) => any[];
}
function getAuthors(database: DB): Author[] {
  const authorRows = database.runQuery(`SELECT FIRST, LAST FROM AUTHORS`);
  return authorRows.map(row => ({ first: row[0], last: row[1] }));
}
```

由于 PostgresDB 具有 runQuery 方法，满足了结构类型的概念，因此 PostgresDB 不必声明它是 DB 的一个实现，TypeScript 会自动发现它可以在生产环境中作为 getAuthors 方法的参数被继续使用。

当在写测试的时候，作为 PostgresDB 的替代，可以传递一个简单的对象给 getAuthors 方法：

```ts
test('getAuthors', () => {
  const authors = getAuthors({
    runQuery(sql: string) {
      return [
        ['Toni', 'Morrison'],
        ['Maya', 'Angelou']
      ];
    }
  });
  expect(authors).toEqual([
    { first: 'Toni', last: 'Morrison' },
    { first: 'Maya', last: 'Angelou' }
  ]);
});
```

TypeScript 将验证测试 DB 是否满足该接口。在不需要 mock 的前提下，测试也无须了解生产数据库的任何信息！通过引入抽象（DB），从一个特定实现（PostgresDB）的细节中解放了逻辑（和测试）。

结构类型的另一个优点是，它可以干净地切断库之间的依赖关系。更多内容会在条款 51 中讨论。<!--TODO-->

**总结**：

- JS 属于鸭子类型[^yz]，而 TypeScript 使用结构类型对此进行建模：可分配给接口的值可能具有超出类型声明中明确列出的属性之外的属性。类型不是 “密封的”。
- 类也遵循结构类型的规则。可能获取不到一个期望的类的实例。
- 使用结构类型协助单元测试。

### 1.3 限制使用 any 类型

TypeScript 的类型系统是渐进和可选的：渐进是因为可以一项一项地将类型添加到你的代码中，而可选是因为可以随时禁用类型检查器。这些功能的关键是 any 类型。

```ts
let age: number;
age = '12'; // 不能将类型 “12” 分配给类型 “number”
age = '12' as any; // OK
```

**any 类型没有类型安全**
在前面的例子中，类型说明中说 age 是一个 number，但 any 可以让它分配给一个 string，而类型检查器相信它是一个 number，于是就乱套了。

**any 类型会打破契约**
当编写一个函数时，是在指定一个契约：如果调用者给一个特定类型的输入，将产生一个特定类型的输出。但有了 any 类型，就可以打破这些契约。

```ts
function calculateAge(birthDate: Date): number {
  // ...
}
let birthDate: any = '1990-01-19';
calculateAge(birthDate); // OK
```

出生日期参数应该是一个 Date，而不是一个 string。而 any 类型已经打破了 calculateAge 的契约。这会特别麻烦，因为 JS 经常在类型之间进行隐式转换。有时一个 string 也会在该是 number 的地方正常运行，但只有在其他（一些很严格的）情况下才会出问题。

**any 类型没有语言服务**
当一个符号有一个类型时，TypeScript 的语言服务（Language Service）能够提供自动补全和上下文文档。但对于带有 any 类型的符号，只能靠自己了。

重命名是另一个这样的服务。如果有一个人（Person）的类型，并有函数来格式化一个人的名字：

```ts
interface Person {
  first: string;
  last: string;
}
const formatName = (p: Person) => `${p.first} ${p.last}`;
const formatNameAny = (p: any) => `${p.first} ${p.last}`;
```

然后可以在 vscode 中选择 first，选择 “重命名符号”，并将其改为 firstName。TypeScript 语言服务确保工程中所有使用该符号的地方也被重命名。改变了 formatName 函数，但不会改变使用了 any 的函数（即 formatNameAny）。

TypeScript 的座右铭是 “规模化的 JS”。“规模化” 的一个关键部分是语言服务，它是 TypeScript 体验的核心部分（参见条款 6）<!--TODO-->。丧失它意味着生产力的损失。

**any 类型会掩盖重构代码时的错误**
假设正在构建一个 Web 应用程序，其中用户可以选择某些选项（Item）。一个组件可能有一个 onSelectItem 回调函数。为一个选项（Item）写一个类型似乎很麻烦，所以只用 any 作为一个代替：

```ts
interface ComponentProps {
  onSelectItem: (item: any) => void;
}
```

下面是管理该组件的代码：

```ts
function renderselector(props: ComponentProps) {
  /* ... */
}
let selectedId: number = 0;
function handleSelectItem(item: any) {
  selectedId = item.id;
}
renderselector({ onSelectItem: handleselectItem });
```

后来重新设计了选择器，使它很难将整个 item 对象传递给 onSelectItem。这没什么大不了的，因为只需要 ID。只是改变了 ComponentProps 的函数签名。

```ts
interface ComponentProps {
  onSelectItem: (id: number) => void;
}
```

更新了组件，一切都通过了类型检查器的检查。成功！但果真如此吗？handleSelectItem 接受了一个 any 参数，所以它对一个选项（Item）和一个 ID 一样都没问题。尽管通过了类型检查器，它还是会产生一个运行时异常。但假如使用的是一个更具体的类型，它将被类型检查器捕获。

**any 类型遮蔽了你的类型设计**
像应用程序状态这样的复杂对象的类型定义可能会变得很长。与其为页面状态的几十个属性写出类型，可能会想只使用一个 any 类型就可以了。

正如本条款中列出的所有原因那样，这样做有很多问题。但还有问题是因为它隐藏了状态设计。正如第 4 章 <!--TODO--> 中解释的那样，好的类型设计对于写出干净、正确和可理解的代码是必不可少的。对于一个 any 类型，类型设计是隐性的。这使得很难知道这个设计是否为一个好的设计，甚至根本不知道这个设计是什么。如果要求同事审查一个代码变更，他们就得重新构建看是否和如何改变了应用状态。因此最好把它写出来给大家看。

**any 类型破坏了对类型系统的信心**
每当犯了一个错误，而类型检查器又抓住了它，这就增强了对类型系统的信心。但是当在运行时看到一个类型错误时，这种信心就会受到打击。如果在一个较大的团队中引入 TypeScript，这可能会让同事怀疑是否值得为 TypeScript 付出努力。any 类型通常是这些未捕获的错误的来源。

TypeScript 的目的是让工作变得更简单，但是有很多 any 类型的 TypeScript 可能比无类型的 JS 更难处理，因为必须修复各种类型错误，同时还得在脑海中记住真正的类型。如果代码中的类型与事实相符，就可以摆脱在脑海中保存类型信息的负担。TypeScript 将为你记录它。

对于必须使用 any 的情况，分别有更好的和更坏的方法来做到这一点。更多关于如何限制类型检查器的 any 害处，请参看第 5 章。<!--TODO-->

## 二. TypeScript 的类型系统

### 2.1 使用编辑器来询问和探索类型系统

当安装 TypeScript 时，会得到两个可执行文件：

- tsc，TypeScript 编译器
- tsserver，TypeScript 独立服务器

更有可能直接运行 TypeScript 编译器，但 tsserver 同样重要，因为它提供语言服务。这些服务包括自动补全、检查、导航和重构。通常通过编辑器使用这些服务。如果系统没有被配置以提供这些服务，那么就失去了使用它们的机会。像自动补全这样的服务是让 TypeScript 使用起来如此快乐的原因之一。但是除了方便之外，编辑器是建立和测试类型系统知识最好的地方。这将帮助建立一个直觉，即当 TypeScript 能够推断类型时，这也是编写紧凑的、习惯性的代码的关键（参见条款 19）。<!--TODO-->

这些细节会因编辑器的不同而不同，但一般可以将鼠标放在某一个符号上，看看 TypeScript 认为它的类型是什么。也可以检查函数的类型。

> **注意**：如果函数返回类型的推断值与期望值不一致，应该添加一个类型声明，并追踪差异（参见条款 9）。<!--TODO-->

建立 TypeScript 在任何情况下对变量类型的理解，对于构建围绕扩展（参见条款 21 ）<!--TODO--> 和收缩（参见条款 22）的直觉至关重要。理解一个变量的类型在条件分支中的变化是建立对类型系统信心的有效方法。

```ts
function logMessage(message: string | null) {
  if (message) {
    message; // (parameter) message: string
  }
}
```

还可以在一个更大的对象中检查其中的单个属性，以查看 TypeScript 对它们的推断：

```ts
const foo = {
  x: [1, 2, 3], // (property) x: number[]
  bar: {
    name: 'Fred'
  }
};
```

要查看操作链中间的推断通用类型，可以检查方法名称。

在编辑器中看到类型错误也是学习类型系统细微差别的好方法。例如，这个函数试图通过 HTMLElement 的 ID 获取该元素，或者返回一个默认的值。TypeScript 标记了两个错误：

```ts
function getElement(elOrId: string | HTMLElement | null): HTMLElement {
  if (typeof elOrId === 'object') {
    return elOrId; // "HTMLElement | null" 不可分配给 "HTMLElement"
  } else if (elOrId === null) {
    return document.body;
  } else {
    const el = document.getElementById(elOrId);
    return el; // "HTMLElement | null" 不可分配给 "HTMLElement"
  }
}
```

if 语句第一分支的意图是只过滤对象，即 HTMLElement。但奇怪的是，在 JS 中 typeof null 为 “object”，所以在该分支中 elOrId 仍然可能是 null。可以把 null 检查放在第一位来解决这个问题。第二个错误是因为 document.getElementById 可能返回 null，所以你也需要处理这种情况，比如可以通过抛出异常来解决。

语言服务也可以帮助浏览库和类型声明。假设在代码中看到了对 fetch 函数的调用，并想了解更多关于它的信息，编辑器中应该提供 “Go to Definition” 选项。

选择这个选项将会带你转到 lib.dom.d.ts，其中有 TypeScript 引入的 DOM 的类型声明：

```ts
declare function fetch(input: RequestInfo, init?: RequestInit): Promise<Response>;
```

可以看到，fetch 返回一个 Promise，并接受两个参数。点击 RequestInfo，会看到：

```ts
type RequestInfo = Request | string;
```

可以从这里进入 Request 的定义：

```ts
declare var Request: {
  prototype: Request;
  new (input: RequestInfo, init?: RequestInit): Request;
};
```

在这里，可以看到 Request 的类型和值是被分开建模的（参见条款 8）<!--TODO-->。已经看到了 RequestInfo。点击 RequestInit，可以看到所有可以用来构造 Request 的方法。

```ts
interface RequestInit {
  body?: BodyInit | null;
  cache?: RequestCache;
  credentials?: RequestCredentials;
  headers?: HeadersInit;
  // ...
}
```

在理解了这里想要表达的内容后，可以使用上面的方法来应对更多的类型。类型声明一开始读起来可能很有挑战性，但它是一个可以理解 TypeScript 可以做什么、使用的库是如何建模的及如何调试错误的好方法。关于类型声明的更多内容，请参见第 6 章。<!--TODO-->

### 2.2 将类型视为价值的集合

在运行时，每个变量都有唯一的从 JS 的值空间中选择的值。可能的值有很多。但是在代码运行之前，TypeScript 检查错误时，它仅仅有一个类型。最好将其视为一组可能的值的集合。这个集合被称为类型的域。例如，可以把 number 类型视为所有数字值的集合。42 和 -37.25 都在其中，但 'Canada' 不在其中。根据（是否设定了）strictNullChecks，null 和 undefined 可能是该集合的一部分，也可能不是。

最小的集合是空集，它不包含任何值。它对应于 TypeScript 的 never 类型。因为它的域是空的，所以没有值可以赋给一个 never 类型的变量。

```ts
const x: never = 12; // 不能将类型 “12” 分配给类型 “never”
```

接下来的最小集合是那些包含单个值的集合。这些对应于 TypeScript 的字面类型，也称单位类型。

```ts
type A = 'A';
type B = 'B';
type Twelve = 12;
```

为了形成有两个或三个值的类型，可以联合单位类型。

```ts
type AB ='A' 'B';
type AB12 = 'A' | 'B' | 12;
```

以此类推。联合类型对应于值集的并集。

在很多 TypeScript 错误中都会出现 “可赋值（assignable）”这个词。在值集的上下文中，它的意思要么是 “的成员”（对于一个值和一个类型之间的关系），要么是 “的子集”（对于两个类型之间的关系）。

```ts
const a: AB = 'A'; // OK，值 “A” 是集合 {'A','B'} 的成员
const c: AB = 'C'; // 不能将类型 "C" 分配给类型 "AB"
```

类型 “C” 是一个单位类型。它的域由单个值 “C” 组成。这不是 AB 的域的子集（该子集由值 "A" 和 "B" 组成），所以这是一个错误。最终，几乎所有的类型检查器都是在测试一个集合是否为另一个集合的子集。

```ts
const ab: AB = Math.random() < 0.5 ? 'A' : 'B'; // OK，{"A","B"} 是 {"A","B"} 的子集：
const ab12: AB12 = ab; // OK，{"A","B"} 是 {"A","B",12} 的子集
declare let twelve: AB12;
const back: AB = twelve; // 不能将类型 "AB12" 分配给类型 "AB"
// 不能将类型 “12” 分配给类型 “AB”
```

这些类型的集合很容易推断，因为它们是有限的。但在实践中，所使用的大多数类型都有无限域，而对这些类型的推断可能比较困难。可以把它们视为要么是被构造起来的：

```ts
type Int = 1 | 2 | 3 | 4 | 5; // | ...
```

要么是通过描述它们的成员构造起来的：

```ts
interface Identified {
  id: string;
}
```

把这个接口（interface）视为对其类型域中的值的描述。该值是否有一个属性 id，其值可赋给 string（的一个成员）？如果满足条件，那么，它就是一个可识别的。

这就是它的全部内容。正如条款 4 中所解释的，TypeScript 的结构类型规则意味着该值也可以有其他属性，这些属性甚至可以是可调用的！这个事实有时会被多余的属性检查所掩盖（参见条款 11）。<!--TODO-->

将类型视为值的集合，可以帮助推断对它们的操作。例如：

```ts
interface Person {
  name: string;
}
interface Lifespan {
  birth: Date;
  death?: Date;
}
type PersonSpan = Person & Lifespan;
```

`&` 操作符计算的是两个类型的交集。什么样的值属于 PersonSpan 类型？乍看第一眼，Person 和 Lifespan 接口没有共同的属性，所以可能会认为它是空集（即 never 类型）。但是，类型操作适用值的集合（类型的域），而不是接口中的属性。而且要记住，具有附加属性的值仍然属于一个类型。所以，一个同时具有 Person 和 Lifespan 属性的值将属于该交叉类型。

```ts
const ps: PersonSpan = {
  name: 'Alan Turing',
  birth: new Date('1912/06/23'),
  death: new Date('1954/06/07')
};
```

当然，一个值可以有三个以上的属性，并且它仍然属于该类型！一般的规则是，交叉类型中的值包含了它的每一个成分中的属性的并集。

关于相交属性的直觉是正确的，但对于两个接口的联合，就不是它们的交集了。

```ts
type K = keyof (Person | Lifespan); // 类型是 never
```

TypeScript 不能保证任何键属于联合类型中的一个值，所以联合类型的 keyof 必须是空集（never）。或者，更形式化地：

```ts
keyof (A & B) = (keyof A) | (keyof B)
keyof (A | B) = (keyof A) & (keyof B)
```

如果能建立一个直觉来解释为什么这些等式成立，那它就会对理解 TypeScript 的类型系统有很大的帮助!

另一种可能更常见的写法是用 extends 来写 PersonSpan 类型：

```ts
interface Person {
  name: string;
}
interface Personspan extends Person {
  birth: Date;
  death?: Date;
}
```

将类型视为一组值，那 extends 是什么意思呢？如同 “assignable to（可赋值到）” 一样，可以把它理解为 “subset of（的子集）”。PersonSpan 中的每个值都必须有一个 name 属性，它是一个 string，并且每个值也必须有一个 birth 属性，所以它是一个合适的子集。

可能会听到 “子类型（subtype）” 这个词。这是对于 “一个集合的域是其他集合的域的子集” 的另一种说法。考虑一下一维、二维和三维向量的情况：

```ts
interface Vector1D {
  x: number;
}
interface Vector2D extends Vector1D {
  y: number;
}
interface Vector3D extends Vector2D {
  z: number;
}
```

会说 Vector3D 是 Vector2D 的一个子类型，而 Vector2D 是 Vector1D 的一个子类型（在类的上下文中，会说“子类”）。这种关系通常被画成层次结构，但从值集合的角度考虑，用韦恩图会更合适（见下图）。

![类型关系的两种思考方式](./image/%E7%B1%BB%E5%9E%8B%E5%85%B3%E7%B3%BB%E7%9A%84%E4%B8%A4%E7%A7%8D%E6%80%9D%E8%80%83%E6%96%B9%E5%BC%8F.jpg)

有了韦恩图，就可以很明显地看出来，即使把接口重写为不带 extends 的形式，子集/子类型/可分配性关系也是没有变化的。

```ts
// 集合没有改变，所以韦恩图也没有改变
interface Vector1D {
  x: number;
}
interface Vector2D {
  x: number;
  y: number;
}
interface Vector3D {
  x: number;
  y: number;
  z: number;
}
```

虽然这两种解释对于对象类型来说都是可行的，但是当开始考虑字面类型和联合类型时，这种集合解释就会变得更加直观。Extends 也可以作为一个约束出现在一个泛型类型中，而且在这个上下文中它也意味着 “子集”（参见条款 14）。<!--TODO-->

```ts
function getkey<K extends string>(val: any, key: K) {
  // ...
}
```

“extends string” 是什么意思？如果习惯于用对象继承的方式来思考，就很难解释。可以定义一个对象包装类型的子类 String（参见条款 10），但好像也不合适。

换个角度，从集合的角度来思考，它就是非常清晰的：任何域是 string 的子集的类型就都可以是 “extends string”。这包括字符串字面类型、字符串字面类型的联合及 string 本身。

```ts
getKey({}, 'x'); // OK，'x' 继承自 string
getKey({}, Math.random() < 0.5 ? 'a' : 'b'); // OK，'a' | 'b' 继承自 string
getKey({}, document.title); // OK，string 继承自 string
getKey({}, 12); // 类型 12 不能赋给类型 string
```

extends 在上面的错误中变成了 assignable（可分配），这两者都可以理解成 “subset of（的子集）”。这对于有限集也是一种有帮助的思路，比如可能从 keyof T 取得的那些类型，它只返回对象类型的键的类型。

```ts
interface Point {
  x: number;
  y: number;
}
type PointKeys = keyof Point; // 类型是 "x" | "y"
function sortBy<K extends keyof T, T>(vals: T[], key: K): T[] {
  // ...
}
const pts: Point[] = [
  { x: 1, y: 1 },
  { x: 2, y: 0 }
];
sortBy(pts, 'x'); // OK，'x' 继承自 'x' | 'y'（即 keyof T）
sortBy(pts, 'y'); // OK，'y' 继承自 'x' | 'y'
sortBy(pts, Math.random() < 0.5 ? 'x' : 'y'); // OK，'x' | 'y' 继承自 'x' | 'y'
sortBy(pts, 'z'); // 类型 "z" 是不能赋给类型 "x" | "y" 的参数
```

当有的类型的关系不是严格的层次关系时，集合解释也更有意义。例如，string | number 和 string | Date 之间的关系是什么？它们的交集是非空的（交集是 string），但两者都不是对方的子集。它们的域之间的关系是明确的，尽管这些类型不符合严格的层次结构。

将类型视为集合也可以明确数组和元组（tuples）之间的关系。例如：

```ts
const list = [1, 2]; // 类型是 number[]
const tuple: [number, number] = list; // 类型 “number[]” 缺少了来自类型的属性 "[number, number]"
// 前者不是后者的子集（不过反向赋值确实可行）。
```

三元组是否可以赋值给一对？从结构类型的角度思考，可能会认为是这样的。一个对的键有 0 和 1，那么它是不是也可以有其他的键，比如 2?

```ts
const triple: [number, number, number] = [1, 2, 3];
const double: [number, number] = triple; // 不能将 “[number,number,number]” 分配给 “[number,number]”
// 属性 “length” 的类型不兼容，不能将类型 “3” 分配给类型 “2”
```

答案是 “没有”，而且这里有一个有趣的原因。TypeScript 不是把一个数字对建模为 {0:number, 1:number}，而是把它建模为 {0:number,1:number,length:2}。这是有意义的：可以检查元组的长度；而且它排除了这种（不合法）赋值。

如果类型最好被视为值的集合，这意味着两个具有相同值集合的类型是相同的。而事实上这是真的。除非两个类型在语义上是不同的，而且刚好有相同的域，否则没有理由把同一个类型定义两次。

> **注意**：并不是所有的值集都对应 TypeScript 类型。对于所有的整数，或者对于所有有 x 和 y 属性但没有其他属性的对象，在 TypeScript 类型中都没有对应的类型。有时可以用 Exclude<> 减去类型，但只有当它会产生一个恰当的 TypeScript 类型时才会成功。

```ts
type T = Exclude<string | Date, string | number>; // 类型是 Date
type NonZeroNums = Exclude<number, 0>; // 类型仍然是 number
```

下表总结了 TypeScript 术语和集合论中术语之间的对应关系：

| TypeScript 术语 | 集合术语          |
| --------------- | ----------------- |
| never           | Ø（空集）         |
| 字面类型        | 单元素集合        |
| 值可赋值到 T    | 值 ∈ T（的成员）  |
| T1 可赋值到 T2  | T1 ⊆ T2（的子集） |
| T1 extends T2   | T1 ⊆ T2（的子集） |
| T1 \| T2        | T1 ∪ T2（并集）   |
| T1 & T2         | T1 ∩ T2（交集）   |
| Unknown         | 全集              |

### 2.3 知道如何分辨符号是类型空间还是值空间

TypeScript 中的一个符号必然是以下空间中的一个：

- 类型空间
- 值空间

一个符号是在类型空间还是值空间，并不总是一目了然的。必须从符号出现的上下文来判断。这可能会让人特别困惑，因为许多类型空间结构和值空间结构看起来完全一样。例如：

```ts
type T1 = 'string literal';
type T2 = 123;
const v1 = 'string literal';
const v2 = 123;
```

一般来说，type 或 interface 后面的符号是在类型空间中，而在 const 或 let 声明中引入的符号则是在值空间中。

TypeScript 学习乐园是建立对这两个空间的直觉最好的方法，它为 TypeScript 源显示了生成的 JS。类型在[编译过程中会被擦除](#11-理解代码的生成是独立于类型的)，所以如果一个符号消失了，那么它很可能是在类型空间中。

TypeScript 中的语句可以在类型空间和值空间之间交替使用。类型声明（:）或断言（as）后的符号在类型空间，而 `=` 后的所有内容在值空间。例如：

```ts
interface Person {
  first: string;
  last: string;
}
const p: Person = { first: 'Jane', last: 'Jacobs' };
//    -           --------------------------------- 值
//       ------ 类型
```

某些函数语句则可以在这两种空间之间反复交替：

```ts
function email(p: Person, subject: string, body: string): Response {
  //     ----- -          -------          ---- 值
  //              ------           ------        ------   -------- 类型
}
```

class 和 enum 结构同时引入了类型和值。在第一个例子中，Cylinder 是一个 class：

```ts
class Cylinder {
  radius = 1;
  height = 1;
}

function calculateVolume(shape: unknown) {
  if (shape instanceof Cylinder) {
    shape; // OK，类型是 Cylinder
    shape.radius; // OK，类型是 number
  }
}
```

一个类引入的 TypeScript 类型是基于它的形状（它的属性和方法），而值是构造函数。有许多操作符和关键字在类型或值的上下文中具有不同的含义。例如，typeof：

```ts
type T1 = typeof p; // 类型是 Person
type T2 = typeof email; // 类型是 (p: Person, subject: string, body: string) => Response
const v1 = typeof p; // 值是 "object"
const v2 = typeof email; // 值是 "function"
```

在类型的上下文中，typeof 接受一个值并返回其 TypeScript 类型。可以将这些类型作为一个更大的类型表达式的一部分，或者使用一个 type 声明来给它们命名。

在值的上下文中，typeof 是 JS 的运行时 typeof 运算符，它返回一个包含符号运行时类型的字符串。这和 TypeScript 的类型是不一样的。

JS 的运行时类型系统比 TypeScript 的静态类型系统简单得多。与 TypeScript 类型的无限种类相比，JS 只有六种运行时类型 "string" "number" "boolean" "undefined" "object" 和 "function" typeof 总是对值进行操作，不能把它应用于类型上。class 关键字既引入了一个值，也引入了一个类型，那么 typeof 返回的一个类是什么呢？这要看上下文：

```ts
const v = typeof Cylinder; // 值是 “function”
type T = typeof Cylinder; // 类型是 typeof Cylinder
```

这个值是 “function”，因为这是 JS 中类的实现方式。类型不是特别有启发性。重要的是，它不是 Cylinder（实例的类型）。它实际上是一个构造函数，可以将其与 new 一起使用来理解这里：

```ts
declare let fn: T;
const c = new fn(); // 类型是 Cylinder
```

可以在构造函数类型和实例类型之间使用 `InstanceType<T>`：

```ts
type C = InstanceType<typeof Cylinder>; // 类型是 Cylinder
```

[] 属性访问器在类型空间中也有一个外观相同的等价物。但要注意的是，虽然 obj['field'] 和 obj.field 在值空间中是等价的，但在类型空间中却不是。必须使用前者来获取另一个类型属性的类型：

```ts
const first: Person['first'] = p['first']; // 或者 p.first
//    -----                    ---------- 值
//           --------------- 类型
```

这里 Person['first'] 是一个类型，因为它出现在类型上下文中（在 : 之后）。可以在索引中放入任何类型，包括联合类型或基元类型：

```ts
type PersonEl = Person['first' | 'last']; // 类型是 string
type Tuple = [string, number, Date];
type TupleE1 = Tuple[number]; // 类型是 string | number | Date
```

有关此方面的详细介绍请参见条款 14。<!--TODO-->

还有许多其他的结构在两个空间中具有不同的意义：

- 值空间中的 this 是 JS 的 this 关键字（参见条款 49）<!--TODO-->。作为一个类型，this 是 this 的 TypeScript 类型，也就是 “多态 this”。它对于用子类实现方法链很有帮助。

- 在值空间中，& 和 | 是位上的 AND 和 OR。在类型空间中，它们是交集和联合运算符。

- const 引入了一个新的变量，但 as const 改变了一个文字或文字表达式的推断类型（参见条款 21）<!--TODO-->。

- extends 可以定义一个子类（class A extends B），或一个子类型（interfaceA extends B），或一个通用类型的约束（`Generic<T extends number>`）。

- in 可以是循环的一部分（`for(key in object)`），也可以是映射类型（参见条款 14）。<!--TODO-->

如果 TypeScript 似乎根本不理解某些代码，可能就是因为类型空间和值空间的混乱。例如，改变了前面的 email 函数，将其参数放在一个单一的对象参数中：

```ts
function email(options: { person: Person; subject: string; body: string }) {
  // ...
}
```

在 JS 中，可以使用解构赋值来为对象中的每个属性创建局部变量：

```ts
function email({ person, subject, body }) {
  // ...
}
```

但如果试图在 TypeScript 中做同样的事情，会得到一些奇怪的错误：

```ts
function email({
  person: Person, // 绑定元素 “Person” 隐式地含有 “any” 类型
  subject: string, // 标识符 “string” 重复
  // 绑定元素 “string” 隐式地含有 “any” 类型
  body: string
  // 标识符 “string” 重复
  // 绑定元素 “string” 隐式地含有 “any” 类型
}) {
  /* ... */
}
```

问题是 Person 和 string 被解释为一个值的上下文。试图创建一个名为 Person 的变量和两个名为 string 的变量。相反，应该将类型和值分开：

```ts
function email({ person, subject, body }: { person: Person; subject: string; body: string }) {
  // ...
}
```

这明显比较啰嗦，但在实践中，可以为参数设置一个命名的类型，或者从上下文中推断出参数（参见条款 26）。<!-- TODO -->

### 2.4 优先选择类型声明而不是类型断言

TypeScript 似乎有两种方法来给变量赋值并赋予一个类型：

```ts
interface Person {
  name: string;
}
const alice: Person = { name: 'Alice' }; // 类型是 Person
const bob = { name: 'Bob' } as Person; // 类型是 Person
```

虽然这两种方法的目的相似，但实际上它们是完全不同的！第一种（alice: Person）给变量添加了一个类型声明，并确保值符合类型。第二种（as Person）执行了一个类型断言。这告诉 TypeScript，尽管它推断出了类型，但使用者更了解它，并希望类型是 Person。

一般来说，应该更喜欢类型声明而不是类型断言。原因是：

```ts
const alice: Person = {}; // 类型 “{}” 中缺少属性 “name”，但在类型 “Person” 中为必选
const bob = {} as Person; // 没有错误
```

类型声明验证了这个值符合接口的要求。因为它不符合的话，TypeScript 就会标记一个错误。类型断言通过推断告诉类型检查器，不管出于什么原因，开发者都比它更了解这个错误。如果指定了一个额外的属性，也会发生同样的事情：

```ts
const alice: Person = {
  name: 'Alice',
  occupation: 'TypeScript developer' // 对象文字可以只指定已知属性，并且 “occupation” 不在类型 “Person” 中。
};
const bob = {
  name: 'Bob',
  occupation: 'JS developer'
} as Person; //没有错误
```

这是正常工作的额外属性检查（参见条款 11）<!--TODO-->，但如果使用类型断言，它就无法起作用。因为它们提供了额外的安全检查，应该使用类型声明，除非有特定的理由使用类型断言。

> 也可能会看到类似 `const bob = <Person>{}` 的语句。这是类型断言的原始语法，相当于 `{} as Person`。现在不太常见了，因为 `<Person>` 被解释为 .tsx 文件（TypeScript+React）中的起始标签。

该如何对箭头函数使用类型声明并不总是很清楚的。例如，如果想在这段代码中使用命名为 Person 的接口会怎样做？

```ts
const people = ['alice', 'bob', 'jan'].map(name => ({ name })); // { name: string; }[] 但需要 Person[]
```

在这里使用类型断言是很有诱惑力的，它似乎解决了这个问题：

```ts
const people = ['alice', 'bob', 'jan'].map(name => ({ name } as Person)); // 类型是 Person[]
```

但这和更直接地使用类型断言的问题是一样的。例如：

```ts
const people = ['alice', 'bob', 'jan'].map(name => ({} as Person)); // 没有错
```

那么如何在这种情况下使用类型声明呢？最直接的方法就是在箭头函数中声明一个变量。

```ts
const people = ['alice', 'bob', 'jan'].map(name => {
  const person: Person = { name };
  return person;
}); // 类型是 Person[]
```

但与原始代码相比，这样做相当唠峻。一个更简洁的方法是声明箭头函数的返回类型。

```ts
const people = ['alice', 'bob', 'jan'].map((name): Person => ({ name })); // 类型是 Person[]
```

这将执行所有与前面一样的值检查。这里的括号很重要！`(name): Person` 推断出 name 的类型，并指定返回的类型应该是 Person；但是 `(name: Person)` 则会指定 name 的类型为 Person，并允许推断返回类型，这就错了。

在这种情况下，也可以写出最终想要的类型，让 TypeScript 检查赋值的有效性。

```ts
const people: Person[] = ['alice', 'bob', 'jan'].map((name): Person => ({ name }));
```

但是，在一个较长的函数调用链的上下文中，可能有必要或希望尽早出现命名的类型，而且这将有助于在错误发生的地方标记错误。

那么什么时候应该使用类型断言呢？当确实比 TypeScript 知道更多关于类型的信息时，类型断言是最有意义的。通常情况下，类型检查器无法从上下文中获得类型信息。例如，可能比 TypeScript 更精确地知道一个 DOM 元素的类型。

```ts
document.querySelector('#myButton').addEventListener('click', e => {
  e.currentTarget; // 类型是 EventTarget
  const button = e.currentTarget as HTMLButtonElement; // 类型是 HTMLButtonElement
});
```

因为 TypeScript 无法访问页面的 DOM，它无法知道 #myButton 是一个按钮元素，它也不知道事件中的 currentTarget 应该是同一个按钮。由于有 TypeScript 没有的信息，因此类型断言在这里是有意义的。关于 DOM 类型的更多信息，请参见条款 55。<!--TODO-->

也可能会遇到非空断言，它是如此常见，以至于它有一种专门的语法。

```ts
const elNull = document.getElementById('foo'); // 类型是 HTMLElement | null
const el:document.getElementById('foo')!; // 类型是 HTMLElement
```

作为前缀 `!` 是布尔否定；但是作为后缀，`!` 被解释为一个断言，即值是非空的（non-null）。应该像对待任何其他断言一样对待 `!:` 它在编译过程中会被擦掉，所以应该只在拥有类型检查器所缺乏的信息并且能够确保值是非空的情况下使用它。如果不能，应该使用条件语句来检查 null 的情况。

类型断言也有其局限性：它们不能在任意类型之间进行转换。一般来说可以使用类型断言在 A 和 B 之间进行转换，只要其中一个是另一个的子集。HTMLElement 是 HTMLElement | null 的子类型，所以这个类型断言是可以的。HTMLButtonElement 是 EventTarget 的子类型，所以这个类型断言也是可以的。而 Person 是 {} 的子类型，所以这个类型断言也是可以的。

但是不能在 Person 和 HTMLElement 之间进行转换，因为两者都不是对方的子类型。

```ts
interface Person {
  name: string;
}
const body = document.body;
const el = body as Person; // 将类型 "HTMLElement" 转换为类型 "person" 可能是个错误，因为这两个类型都没有充分地重叠。如果是有意为之，请先将表达式转换为 “unknown”。
```

这个错误提示了一个逃避问题的方法，即使用 unknown 类型（参见条款 42）。<!--TODO-->每个类型都是 unknown 的子类型，所以涉及 unknown 的断言总是正确的。这可以在任意类型之间进行转换，但至少是显式地在做一些令人生疑的事情。

```ts
const el = document.body as unknown as Person; // OK
```

### 2.5 避免对象包装类（String, Number, Boolean, Symbol, BigInt）

除了对象，JS 还有七种基本数据类型：string、number、boolean、null、undefined、symbol 和 bigint。symbol 是在 ES2015 中加入的，而 bigint 是在 ES2020 加入的。

基本数据类型与对象的区别在于它是不可变的，而且没有方法。可能会反对说字符串确实是有方法的：

```js
'primitive'.charAt(3);
```

但事情并不像表面上那样简单。其实这里面有一些奇怪和微妙的地方。虽然字符串基本数据类型没有方法，但 JS 还定义了一个 String 对象类型，它有方法。JS 可以在这些类型之间自由转换。当访问一个字符串基元上的 charAt 这样的方法时，JS 会把它包装在一个 String 对象中，以调用这个方法，然后把这个对象扔掉。

如果给 String.prototype 做猴子补丁（monkey-patch）(参见条款 43)<!--TODO-->，可以观察到这一点：

```js
// 不要这么做！
const originalCharAt = String.prototype.charAt;
String.prototype.charAt = function (pos) {
  console.log(this, typeof this, pos);
  return originalCharAt.call(this, pos);
};
console.log('primitive'.charAt(3));
```

这将产生以下输出：

```js
[String: 'primitive'] object 3
m
```

方法中的 this 值是一个 String 对象的包装器，而不是一个字符串基本数据类型。可以直接实例化一个 String 对象，它有时会表现得像一个字符串基元。但并非总是如此。例如，一个 String 对象永远只等于它自己：

```js
'hello' === new String('hello'); // false
new String('hello') === new String('hello'); // false
```

隐式转换为对象包装类解释了 JS 中的一个奇怪现象：如果给一个基本数据类型分配一个属性，它就会消失：

```js
let x = 'hello';
console.log((x.language = 'English')); // 'English'
console.log(x.language); // undefined
```

原因是 x 被转换为一个 String 实例，language 属性被设置在这个实例上，然后这个对象（连同它的 language 属性）一起被扔掉。

其他基本数据类型也有包装类。Number 包装数字类型，Boolean 包装布尔类型，Symbol 包装符号类型，BigInt 包装长整型数字类型（bigint）（null 和 undefined 没有对象封装）。

这些包装类的存在是为了方便提供基本数据类型值上的方法和静态方法（如 String.fromCharCode），但通常没有理由直接实例化它们。

TypeScript 通过为基本数据类型和它们的对象包装器提供不同的类型来建立这种区别：

- string 和 String
- number 和 Number
- boolean 和 Boolean
- symbol 和 Symbol
- bigint 和 BigInt

很容易在不经意间输入 String（尤其是从使用 Java 或 C# 的情境中刚转过来的时候），而且至少在最初的时候，它似乎还能用：

```ts
function getstringLen(foo: String) {
  return foo.length;
}
getstringLen('hello'); // OK
getStringLen(new String('hello')); // OK
```

但当你试图将一个 String 对象传递给一个期望为 string 的方法时，就有问题了。

```ts
function isGreeting(phrase: String) {
  return ['hello', 'good day'].includes(phrase);
  // 类型 “String” 的参数不能赋给类型 “string” 的参数。
  // 'string' 是基本数据类型，但是 'String' 是一个包装类；
  // 可能的话优先使用 'string'
}
```

所以 string 可以分配给 String，但 String 不能分配给 string。

另一种可以使用包装器对象的方法是，提供一个大写的显式类型标注：

```js
const s: String = 'primitive';
const n: Number = 12;
const b: Boolean = true;
```

当然，运行时的值仍然是基本数据类型，而不是对象，但 TypeScript 允许这些声明，因为基本数据类型可以分配给对象包装器。这些标注既是误导性的，也是多余的（参见条款 19）<!--TODO-->。最好坚持使用基本数据类型。

最后要说明的是，调用 BigInt 和 Symbol 时可以不使用 new，因为它们创建的是基本数据类型：

```js
typeof BigInt(1234); // "bigint"
typeof Symbol('sym'); // "symbol"
```

这些都是 BigInt 和 Symbol 的值，而不是 TypeScript 的[类型](#23-知道如何分辨符号是类型空间还是值空间)。调用它们的结果是 bigint 和 symbol 类型的值。

### 2.6 认识额外属性检查的局限性

当把一个对象字面量赋给一个声明了类型的变量时，TypeScript 会确保它有该类型的属性，并且没有其他属性。

```ts
interface Room {
  numDoors: number;
  ceilingHeightFt: number;
}
const r: Room = {
  numDoors: 1,
  ceilingHeightFt: 10,
  elephant: 'present' // 对象文字可以只指定已知属性，并且 “elephant” 不在类型 “Room” 中
};
```

虽然有一个 elephant 属性是很奇怪的，但[从结构类型的角度来看，这个错误并没有什么意义](#12-习惯结构类型structural-typing)。那个常量是可以分配给 Room 类型的。通过引入一个中间变量，就可以看出来：

```ts
const obj = {
  numDoors: 1,
  ceilingHeightFt: 10,
  elephant: 'present'
};
const r: Room = obj; // OK
```

obj 的类型被推断为 `{numDoors:number;ceilingHeightFt:number;elephant:string}`。因为这个类型包含了 Room 类型中值的一个子集，所以它可以分配给 Room，并且代码通过了[类型检查器的检查](#22-将类型视为价值的集合)。

那么这两个例子有什么不同呢？在第一个例子中，触发了一个被称为 “额外属性检查” 的过程，它有助于捕获一类重要的错误，否则结构类型系统就会错过这类错误。但是这个过程有它的局限性，把它与常规的可分配性检查混为一谈会使更难建立结构类型的直觉。认识到额外属性检查是一个独特的过程，将帮助建立一个更清晰的 TypeScript 类型系统的认知。

TypeScript 不仅仅是试图标记那些会在运行时抛出异常的代码，它还试图找到那些不按开发者意图行事的代码。这里有一个后者的例子：

```ts
interface Options {
  title: string;
  darkMode?: boolean;
}
function createWindow(options: Options) {
  if (options.darkMode) {
    setDarkMode();
  }
  // ...
}
createWindow({
  title: 'Spider Solitaire',
  darkmode: true
  // 对象文字可以只指定已知属性，并且 “darkmode” 不在类型 “Options” 中，是否希望写成 “darkMode”？
});
```

这段代码在运行时不会抛出任何形式的错误，但它也不可能做想做的事情，原因正是 TypeScript 所说的：它应该是 darkMode（大写 M），而不是 darkmode。

一个纯粹的结构类型检查器是无法发现这种错误的，因为 Options 类型的领域非常广泛：它包括所有 string 的 title 属性，以及任何其他属性，只要这些属性不包括设置为 true 或 false 以外东西的 darkMode 属性。这很容易让人忘记 TypeScript 类型的扩张性。这里还有更多的值可赋给 Options：

```ts
const o1: Options = document; // OK
const o2: Options = new HTMLAnchorElement(); // OK
```

document 和 HTMLAnchorElement 的实例都具有字符串的 title 属性，所以这些赋值是没问题的。Options 确实是一个宽泛的类型！

额外属性检查试图在不影响类型系统基本结构性质的情况下控制这种情况。它通过禁止未知属性特别是对象字面量上的未知属性来做到这一点（出于这个原因，它有时被称为 “严格的对象字面量检查”）。document 和 newHTMLAnchorElement 都不是一个对象字面量，所以它们没有触发检查。但是 `{title, darkmode}` 对象是字面量，所以它触发了检查：

```ts
const o: Options = { darkmode: true, title: 'Ski Free' }; // "darkmode" 不在类型 "Options" 中...
```

这就解释了为什么使用一个没有类型注释的中间变量会使错误消失：

```ts
const intermediate = { darkmode: true, title: 'Ski Free' };
const o: Options = intermediate; // OK
```

第一行的右边是一个对象字面量，第二行的右边（intermediate）则不是，所以额外属性检查不适用，错误也就消失了。额外的属性检查也不会发生在使用类型断言的时候：

```ts
const o = { darkmode: true, title: 'Ski Free' } as Options; // OK
```

这是个很好的理由，让我们[更倾向于使用类型声明而不是类型断言](#24-优先选择类型声明而不是类型断言)。

如果不想要这种检查，可以使用索引签名告诉 TypeScript 期待额外的属性：

```ts
interface Options {
  darkMode?: boolean;
  [otherOptions: string]: unknown;
}
const o: Options = { darkmode: true }; // OK
```

条款 15 讨论了这个在什么时候是、什么时候不是一个合适的数据建模的方式。<!--TODO-->

一个相关的检查发生在只有可选属性的 “弱” 类型上。

```ts
interface LineChartOptions {
  logscale?: boolean;
  invertedYAxis?: boolean;
  areachart?: boolean;
}
const opts = { logScale: true };
const o: LineChartOptions = opts; // 类型 “{logScale: boolean;}” 与类型 “LineChartOptions” 没有共同属性
```

从结构的角度来看，LineChartOptions 类型应该包括几乎所有的对象。对于这样的弱类型，TypeScript 增加了另一个检查，以确保值类型和声明类型至少有一个共同的属性。就像额外属性检查一样，它对捕捉错别字（typo）很有效，而且它不是严格的结构性检查。但与额外属性检查不同的是，它发生在所有涉及弱类型的可分配性检查中。提取出一个中间变量并不能绕过这个检查。

额外属性检查对于发现属性名中的错别字和其他错误是一种有效的方法，否则结构类型系统就会允许这些错误。它对于像 Options 这样包含可选字段的类型特别有用。但它的范围也非常有限：它只适用于对象字面量。在这里，提取出一个常量使一个错误消失了，但它也可以在其他上下文中引入一个错误。请参见条款 26 以了解这方面的例子。<!--TODO-->

### 2.7 尽可能将类型应用于整个函数表达式

JS 和 TypeScript 区分了函数语句和函数表达式：

```ts
function rollDice1(sides: number): number {
  /*...*/
} // 语句
const rollDice2 = function (sides: number): number {
  /* ... */
}; // 表达式
const rollDice3 = (sides: number): number => {
  /*...*/
}; // 还是表达式
```

TypeScript 中函数表达式的一个优点是，可以一次将类型声明应用到整个函数中，而不是单独指定参数和返回值的类型：

```ts
type DiceRollFn = (sides: number) => number;
const rollDice: DiceRollFn = sides => {
  /*...*/
};
```

如果在编辑器中把鼠标放在 sides 上，会看到 TypeScript 知道它的类型是 humber。在这样一个简单的例子中，函数类型并没有提供太多价值，但这种技术确实提供了许多可能性。

首先就是减少重复。比如想写几个对数字进行运算的函数，可以这样写：

```ts
function add(a: number, b: number) {
  return a + b;
}
function sub(a: number, b: number) {
  return a - b;
}
function mul(a: number, b: number) {
  return a * b;
}
function div(a: number, b: number) {
  return a / b;
}
```

或将重复的函数签名合并为一个函数类型：

```ts
type BinaryFn = (a: number, b: number) => number;
const add: BinaryFn = (a, b) => a + b;
const sub: BinaryFn = (a, b) => a - b;
const mul: BinaryFn = (a, b) => a * b;
const div: BinaryFn = (a, b) => a / b;
```

这比以前少了一些类型标注，而且它们与函数实现分开了。这使得逻辑更加清晰，而且还能够检查是否所有函数表达式的返回类型都是 number。

库经常为常见的函数签名提供类型。例如，ReactJS 提供了一个 MouseEventHandler 的类型，可以将其应用于整个函数，而不是将 MouseEvent 指定为函数参数的类型。如果是库的作者，可以考虑为常见的回调提供类型声明。

另外，可能想要将类型应用到函数表达式以匹配其他函数的签名。例如，在 Web 浏览器中，fetch 函数会对某些资源发出 HTTP 请求：

```ts
const responseP = fetch('/quote?by=Mark+Twain'); // 类型是 Promise<Response>
```

可以通过 response.json() 或 response.text() 从响应中提取数据：

```ts
async function getQuote() {
  const response = await fetch('/quote?by=Mark+Twain');
  const quote = await response.json();
  return quote;
}
//{
//  "quote": "If you tell the truth, you don't have to remember anything.",
//  "source": "notebook",
//  "date": 1894
//}
```

(参见条款 25 以了解更多关于 Promise 和 async/await 的信息。）<!--TODO-->

这里有一个 bug：如果对 /quote 的请求失败，响应体很可能包含 “404 NotFound” 这样的解释。这不是 JSON，所以 response.json() 会返回一个被拒绝的 Promise，并附带一条关于无效 JSON 的消息。这掩盖了真正的错误，即 404。

带有 fetch 的错误响应并不会导致被拒绝的 Promise。接下来写一个 checkedFetch 函数来做状态检查。lib.dom.d.ts 中 fetch 的类型声明是这样的：

```ts
declare function fetch(input: RequestInfo, init?: RequestInit): Promise<Response>;
```

所以可以这样写 checkedFetch：

```ts
async function checkedFetch(input: RequestInfo, init?: RequestInit) {
  const response = await fetch(input, init);
  if (!response.ok) {
    // 在异步函数中转换为被拒绝的 Promise
    throw new Error('Request failed:' + response.status);
  }
  return response;
}
```

这样做是可行的，但可以写得更简洁：

```ts
const checkedFetch: typeof fetch = async (input, init) => {
  const response = await fetch(input, init);
  if (!response.ok) {
    throw new Error('Request failed:' + response.status);
  }
  return response;
};
```

将函数语句改为函数表达式，并对整个函数应用了一个类型（typeof fetch）。这允许 TypeScript 推断参数 input 和 init 的类型。

类型标注也保证了 checkedFetch 的返回类型将与 fetch 的返回类型相同。例如，写了 return 而不是 throw，TypeScript 会发现这个错误：

```ts
const checkedFetch: typeof fetch = async (input, init) => {
  // 不能将类型 "Promise<Response | HTTPError>" 分配给类型 "Promise<Response>"
  // 不能将类型 "Response | HTTPError"分配给类型 "Response"
  const response = await fetch(input, init);
  if (!response.ok) {
    return new Error('Request failed:' + response.status);
  }
  return response;
};
```

第一个例子中同样的错误很可能会导致一个错误，但应是在调用 checkedFetch 的代码中，而不是在实现中。

除了更简洁之外，将整个函数表达式类型化，而不是将其参数类型化，也会带来更好的安全性。当在编写一个与其他函数具有相同类型签名的函数，或者编写许多具有相同类型签名的函数时，请考虑是否可以对整个函数应用类型进行声明，而不是重复参数和返回值的类型。

### 2.8 了解类型（type）和接口（interface）的异同

如果想在 TypeScript 中定义一个命名类型，有两个选择：

- 可以使用一个类型（type），例如：

  ```ts
  type TState = {
    name: string;
    capital: string;
  };
  ```

- 或者使用一个接口（interface），例如：

  ```ts
  interface IState {
    name: string;
    capital: string;
  }
  ```

多年来，这两个选项之间的界限越来越模糊，以至于在很多情况下，可以使用其中的任意一个。应该意识到 type 和 interface 之间的区别，并且在哪种情况下使用哪一种都要保持一致。但是，也应该知道如何使用这两种方式来编写相同的类型，这样就能自如地读懂使用这两种编写的 TypeScript 代码。

> **注意**：上面的例子将类型名前缀确定为 I 或 T，仅仅是为了表明它们是如何被定义的。不应该在代码中这样做！在 C# 中，用工作为接口类型的前缀是很常见的，而且这个约定在 TypeScript 的早期也有一些进展。但今天它被认为是不好的风格，因为它是不必要的，增加的价值不大，而且在标准库中也没有被一致遵循。

**相似**：

1. State 类型之间几乎没有区别。不管用 IState 还是 TState 定义了一个带有多余属性的值，得到的错误是字对字相同的：

   ```ts
   const wyoming: TState = {
     name: 'Wyoming',
     capital: 'Cheyenne',
     population: 500_000
     // 不能将类型...分配给类型 "TState"，对象文字可以只指定已知属性，并且 “population” 不在类型 “TState” 中不存在
   };
   ```

2. 可以对 interface 和 type 使用索引签名：

   ```ts
   type TDict = {
     [key: string]: string;
   };
   interface IDict {
     [key: string]: string;
   }
   ```

3. 也可以用它们中的任意一个定义函数类型：

   ```ts
   type TFn = (x: number) => string;
   interface IFn {
     (x: number): string;
   }
   const toStrT: TFn = x => '' + x; // OK
   const toStrI: IFn = x => '' + x; // OK
   ```

4. 对于这种直接的函数类型，类型别名看起来更自然，但如果函数类型也具有属性，那么声明看起来就更相似：

   ```ts
   type TFnWithProperties = {
     (x: number): number;
     prop: string;
   };
   interface IFnWithProperties {
     (x: number): number;
     prop: string;
   }
   ```

   可以通过提醒自己，在 JS 中，函数是可调用的对象，来记住这种语法。

5. 类型别名和接口都可以是泛型：

   ```ts
   type TPair<T> = {
     first: T;
     second: T;
   };

   interface IPair<T> {
     first: T;
     second: T;
   }
   ```

6. interface 可以扩展 type（有一些注意事项），type 也可以扩展 interface：

   ```ts
   // 这两个类型相同
   interface IStateWithPop extends TState {
     population: number;
   }
   type TStateWithPop = IState & { population: number };
   ```

   > **注意**：interface 不能扩展复杂的类型，如联合类型。如果想这么做，需要使用 type 和 &。

   类（class）可以实现 interface 或简单类型：

   ```ts
   class StateT implements TState {
     name: string = '';
     capital: string = '';
   }
   class StateI implements IState {
     name: string = '';
     capital: string = '';
   }
   ```

**不同**：

1. 有联合 type，但没有联合 interface：

   ```ts
   type AOrB = 'a' | 'b';
   ```

   扩展联合类型是很有用的。如果有单独的 Input 和 Output 变量的类型，以及从名字（name）到变量的映射：

   ```ts
   type Input = {
     /* ... */
   };
   type Output = {
     /* ... */
   };
   interface VariableMap {
     [name: string]: Input | Output;
   }
   ```

   那么可能想要一个将名字（name）附加到变量上的类型。这会是：

   ```ts
   type NamedVariable = (Input | Output) & { name: string };
   ```

   这个类型无法用 interface 来表达。一般来说，type 比 interface 能力更强。这个类型（type）可以是一个联合类型，也可以利用更高级的特性，如映射类型（mapped）或条件类型（conditional）。

   它还可以更容易地表达元组和数组类型：

   ```ts
   type Pair = [number, number];
   type StringList = string[];
   type NamedNums = [string, ...number[]];
   ```

   可以用 interface 来表达类似元组的东西：

   ```ts
   interface Tuple {
     0: number;
     1: number;
     length: 2;
   }
   const t: Tuple = [10, 20]; // OK
   ```

   但这很笨拙，而且放弃了所有的元组方法，如 concat，所以最好还是使用 type。更多关于数字索引的问题，请参见条款 16。<!--TODO-->

2. interface 有一些 type 没有的能力。其中之一就是 interface 可以被扩增。

   回到 State 的例子，可以用另一种方式添加一个 population 字段：

   ```ts
   interface IState {
     name: string;
     capital: string;
   }
   interface IState {
     population: number;
   }
   const wyoming: IState = {
     name: 'Wyoming',
     capital: 'Cheyenne',
     population: 500_000
   }; // OK
   ```

   这就是所谓的 “声明合并”（declaration merging）。它主要用于类型声明文件，如果正在编写一个类型声明文件，就应该遵循该规范，并使用 interface 来支持它。这样做的想法是，类型声明中可能会缺少一些需要由用户补充的属性，这时候用户就会使用声明合并。

   TypeScript 使用合并来获得不同版本的 JS 标准库的不同类型。例如，Array 接口在 lib.es5.d.ts 中定义。默认情况下，它就是可以得到的全部。但是，如果在 tsconfig.json 的 lib 条目中添加了 ES2015，那么 TypeScript 同样会包含 lib.es2015.d.ts，它里面有另一个 Array 接口，其中有额外的方法，比如在 ES2015 中添加的 find。它们通过合并被添加到另一个（lib.es5.d.ts 中的）Array 接口。最终的效果是，得到了一个完整的具有正正好好的方法的 Array 类型。

   在常规代码及声明中都支持合并，应该意识到这种可能性。如果必须要让所有人都无法对你的类型进行扩增，那么就使用 type。

#### 2.8.1 如何选择使用 type 或 interface

- 对于复杂的类型，没有选择：需要使用类型别名（即 type）。

- 对于那些两种方式都可以表示的较简单的对象类型，应该考虑一致性和扩增：

  - 如果是一致使用 interface 的代码库，那就坚持用 interface。一致使用 type，那就使用 type。

  - 对于没有既定风格的项目，应该考虑扩增。如果为一个 API 发布类型声明，API 发生变化时，能够通过 interface 合并新的字段可能对用户有帮助，那就使用 interface。但是，对于一个在项目内部使用的类型，声明合并很可能是一个错误，那就倾向使用 type。

### 2.9 使用类型操作和泛型来避免重复的工作

下面这段代码可以输出一些圆柱体的尺寸、表面积和体积：

```ts
console.log('Cylinder 1 * 1', 'Surface area:', 6.283185 * 1 * 1 + 6.283185 * 1 * 1, 'Volume:', 3.14159 * 1 * 1 * 1);
console.log('Cylinder 1 * 2', 'Surface area:', 6.283185 * 1 * 1 + 6.283185 * 2 * 1, 'Volume:', 3.14159 * 1 * 2 * 1);
console.log('Cylinder 2 * 1', 'Surface area:', 6.283185 * 2 * 1 + 6.283185 * 2 * 1, 'Volume:', 3.14159 * 2 * 2 * 1);
```

这个代码的重复性很高，就像同一行代码被复制和粘贴，然后被修改。它既重复了值，也重复了常量。这使得一个错误悄然而至。更好的办法是提取出一些函数、一个常量和一个循环。

```ts
const surfaceArea = (r, h) => 2 * Math.PI * r * (r * h);
const volume = (r, h) => Math.PI * r * r * h;

for (const [r, h] of [
  [1, 1],
  [1, 2],
  [2, 1]
]) {
  console.log(`Cylinder ${r} x ${h}`, `Surface area: ${surfaceArea(r, h)}`, `Volume: ${volume(r, h)}`);
}
```

这就是 DRY 原则：不要重复自己（don't repeat yourself）。这是在软件开发中能找到的最接近于通用的建议。然而，那些在代码中刻意避免重复的开发人员，在类型中可能不会再去想它。

```ts
interface Person {
  firstName: string;
  lastName: string;
}
interface PersonWithBirthDate {
  firstName: string;
  lastName: string;
  birth: Date;
}
```

类型中的重复与代码中的重复有许多相同的问题。如果决定在 Person 中添加一个可选的 middleName 字段，Person 和 PersonWithBirthDate 会分道扬镶。重复在类型中更常见的一个原因是，对 “相同则提取” 模式的机制不如对代码中的那样熟悉。

减少类型重复的最简单的方法是给类型命名：

```ts
function distance(a: { x: number; y: number }, b: { x: number; y: number }) {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}

// 为该类型创建一个名称并使用该名称
interface Point2D {
  x: number;
  y: number;
}
function distance(a: Point2D, b: Point2D) {
  /* ... */
}
```

这就相当于类型系统提取出一个常数，而不是重复写。重复的类型并不总是那么容易被发现，有时它们会被语法所掩盖。例如，如果几个函数共享相同的类型签名：

```ts
function get(url: string, opts: Options): Promise<Response> {
  /*...*/
}
function post(url: string, opts: Options): Promise<Response> {
  /*...*/
}
```

然后可以为这个函数签名提取出一个命名类型：

```ts
type HTTPFunction = (url: string, opts: Options) => Promise<Response>;
const get: HTTPFunction = (url, opts) => {
  /*...*/
};
const post: HTTPFunction = (url, opts) => {
  /*...*/
};
```

那 Person/PersonWithBirthDate 的例子呢？可以通过让一个接口扩展另一个接口的方法来消除重复：

```ts
interface Person {
  firstName: string;
  lastName: string;
}
interface PersonWithBirthDate extends Person {
  birth: Date;
}
```

现在只需要写出额外的字段即可。如果两个接口共享一个子集的字段，那么可以只用这些共同的字段提取出一个基类。继续类比消除代码的重复，这就像写 PI 和 2\*PI 而不是写 3.141593 和 6.283185 一样。

也可以使用交集运算符（&）来扩展一个已有类型，尽管这不太常见：

```ts
type PersonWithBirthDate = Person & { birth: Date };
```

因为类型不可以使用继承（extends），当想要添加一些附加属性时，联合类型这种技术尤为有用。

也可以选择另一个方向。如果有一个类型 State，代表整个应用程序的状态，而另一个类型 TopNavstate，只代表一部分：

```ts
interface State {
  userId: string;
  pageTitle: string;
  recentFiles: string[];
  pageContents: string;
}
interface TopNavState {
  userId: string;
  pageTitle: string;
  recentFiles: string[];
}
```

与其通过扩展 TopNavState 来构建 State，不如将 TopNavState 定义为 State 中字段的一个子集。这样就可以保持一个单一的接口来定义整个应用程序的状态：

```ts
// 可以通过索引到 State 中去消除属性类型的重复
type TopNavstate = {
  userId: State['userId'];
  pageTitle: State['pageTitle'];
  recentFiles: State['recentFiles'];
};
```

虽然书写起来比较长，但这是进步：State 中 pageTitle 类型的变化将反映在 TopNavState 中。但这仍然是重复的，如果用一个映射类型就更好了：

```ts
// 这个定义实际上与之前的定义完全相同
type TopNavState = {
  [k in 'userId' | 'pageTitle' | 'recentFiles']: State[k];
};
```

这与初始定义相同，但重复较少采用映射类型相当于类型系统对数组中的字段进行循环。这种特殊的模式是如此常见，以至于它是标准库的一部分，在那里它被称为 Pick:

```ts
type Pick<T, K> = { [k in K]: T[k] };
```

可以这样使用：

```ts
type TopNavState = Pick<State, 'userId' | 'pageTitle' | 'recentFiles'>;
```

Pick 是一个泛型类型的例子。继续类比消除代码的重复，使用 Pick 相当于调用一个函数。Pick 接受两个类型—T 和 K，并返回一个第三种类型，这就像一个函数可能接受两个值并返回第三个值一样。

另一种形式的重复可能出现在标签联合类型中。如果只想为标签找一个类型，要怎么办？

```ts
interface SaveAction {
  type: 'save';
  //...
}
interface LoadAction {
  type: 'load';
  //...
}
type Action = SaveAction | LoadAction;
```
