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
    - [2.8 了解类型（type）和接口（interface）的异同](#28-了解类型type和接口interface的异同)
      - [2.8.1 如何选择使用 type 或 interface](#281-如何选择使用-type-或-interface)
    - [2.9 使用类型操作和泛型来避免重复的工作](#29-使用类型操作和泛型来避免重复的工作)
    - [2.10 为动态数据使用索引签名](#210-为动态数据使用索引签名)
    - [2.11 优先选择 Array、Tuple 和 ArrayLike，而不是数字索引签名](#211-优先选择-array-tuple-和-arraylike而不是数字索引签名)
    - [2.12 使用 readonly 避免值变（Mutation）相关的错误](#212-使用-readonly-避免值变mutation相关的错误)
    - [2.13 使用映射类型来保持值的同步](#213-使用映射类型来保持值的同步)
  - [三. 类型推断](#三-类型推断)
    - [3.1 避免代码被可推断类型弄得混乱不堪](#31-避免代码被可推断类型弄得混乱不堪)
    - [3.2 不同的类型使用不同的变量](#32-不同的类型使用不同的变量)
    - [3.3 理解类型扩展](#33-理解类型扩展)
    - [3.4 理解类型收缩](#34-理解类型收缩)
    - [3.5 一次性构建对象](#35-一次性构建对象)
    - [3.6 在使用别名时要保持一致](#36-在使用别名时要保持一致)
    - [3.7 使用 async 函数代替异步代码的回调](#37-使用-async-函数代替异步代码的回调)
    - [3.8 了解类型推断中如何使用上下文](#38-了解类型推断中如何使用上下文)

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

更有可能直接运行 TypeScript 编译器，但 tsserver 同样重要，因为它提供语言服务。这些服务包括自动补全、检查、导航和重构。通常通过编辑器使用这些服务。如果系统没有被配置以提供这些服务，那么就失去了使用它们的机会。像自动补全这样的服务是让 TypeScript 使用起来如此快乐的原因之一。但是除了方便之外，编辑器是建立和测试类型系统知识最好的地方。这将帮助建立一个直觉，即当 TypeScript 能够[推断类型](#31-避免代码被可推断类型弄得混乱不堪)时，这也是编写紧凑的、习惯性的代码的关键。

这些细节会因编辑器的不同而不同，但一般可以将鼠标放在某一个符号上，看看 TypeScript 认为它的类型是什么。也可以检查函数的类型。

> **注意**：如果函数返回类型的推断值与期望值不一致，应该添加一个[类型声明](#24-优先选择类型声明而不是类型断言)，并追踪差异。

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

- 减少类型重复的最简单的方法是给类型命名：

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

  这就相当于类型系统提取出一个常数，而不是重复写。

- 重复的类型并不总是那么容易被发现，有时它们会被语法所掩盖。例如，如果几个函数共享相同的类型签名：

  ```ts
  function get(url: string, opts: Options): Promise<Response> {
    /* ... */
  }
  function post(url: string, opts: Options): Promise<Response> {
    /* ... */
  }
  ```

  然后可以为这个函数签名提取出一个命名类型：

  ```ts
  type HTTPFunction = (url: string, opts: Options) => Promise<Response>;
  const get: HTTPFunction = (url, opts) => {
    /* ... */
  };
  const post: HTTPFunction = (url, opts) => {
    /* ... */
  };
  ```

- 那 Person/PersonWithBirthDate 的例子呢？可以通过让一个接口扩展另一个接口的方法来消除重复：

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

- 也可以使用交集运算符（&）来扩展一个已有类型，尽管这不太常见：

  ```ts
  type PersonWithBirthDate = Person & { birth: Date };
  ```

  因为类型不可以使用继承（extends），当想要添加一些附加属性时，联合类型这种技术尤为有用。

- 也可以选择另一个方向。如果有一个类型 State，代表整个应用程序的状态，而另一个类型 TopNavstate，只代表一部分：

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

- 另一种形式的重复可能出现在标签联合类型中。如果只想为标签找一个类型，要怎么办？

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
  type ActionType = 'save' | 'load'; // 重复的类型！
  ```

  可以通过索引到 Action 联合类型中去定义 ActionType，而不用重复：

  ```ts
  type ActionType = Action['type']; // 类型是 "save" | "load"
  ```

  当向 Action 联合类型添加更多类型时，ActionType 将自动纳入它们。这种类型与使用 Pick 所得到的类型不同，后者会给一个带有 type 属性的接口。

  ```ts
  type ActionRec = Pick<Action, 'type'>; // { type: "save" | "load" }
  ```

- 如果正在定义一个可以被初始化并在之后更新的类，那么更新这个类的方法的参数类型将是可选地且包含大多数与构造函数相同的参数：

  ```ts
  interface Options {
    width: number;
    height: number;
    color: string;
    label: string;
  }
  interface OptionsUpdate {
    width?: number;
    height?: number;
    color?: string;
    label?: string;
  }
  class UIWidget {
    constructor(init: Options) {
      /* ... */
    }
    update(options: OptionsUpdate) {
      /* ... */
    }
  }
  ```

  可以使用一个映射类型和 keyof 从 Options 中构造 OptionsUpdate：

  ```ts
  type OptionsUpdate = { [k in keyof Options]?: Options[k] };
  ```

  keyof 接受一个类型，并给出其字段的类型的联合：

  ```ts
  type Optionskeys = keyof Options; // 类型是 "width" | "height" | "color" | "label"
  ```

  映射类型（[k in keyof Options]）将遍历这些属性，并在 Options 中查找相应的值类型。`?` 使得每个属性都是可选的。这种模式也是极为常见的，并作为 Partial 被载入标准库中：

  ```ts
  class UIWidget {
    constructor(init: Options) {
      /*...*/
    }
    update(options: Partial<Options>) {
      /*...*/
    }
  }
  ```

- 也可能会发现想要定义一个与一个值的样子相同的类型：

  ```ts
  const INIT_OPTIONS = {
    width: 640,
    height: 480,
    color: '#00FF00',
    label: 'VGA'
  };
  interface options {
    width: number;
    height: number;
    color: string;
    label: string;
  }
  ```

  可以用 typeof 来做到这样的事情：

  ```ts
  type Options = typeof INIT_OPTIONS;
  ```

  这有意地唤起了 JS 的运行时 [typeof 操作符](#23-知道如何分辨符号是类型空间还是值空间)，但它是在 TypeScript 类型的层次上操作的，且更加精确。然而，从值导出类型时要格外小心。通常最好是先定义类型，然后声明值是可以分配给它们的。这会使类型更加明确，并且可以较少受到扩增的影响（参见条款 21）。<!-- TODO -->

- 同样，可能想为一个函数或方法的推断返回值创建一个命名类型：

  ```ts
  function getUserInfo(userId: string) {
    //...
    return {
      userId,
      name,
      age,
      height,
      weight,
      favoriteColor
    };
  }
  // 返回类型推断为 { userId: string, name: string, age:number, ... }
  ```

  要直接做到这一点是需要条件类型（参见条款 50）<!-- TODO -->的。标准库为这样的常见模式定义了泛型。在这种情况下，ReturnType 泛型正好可以满足要求。

  ```ts
  type UserInfo = ReturnType<typeof getUserInfo>;
  ```

  > **注意**：ReturnType 作用在函数的类型 typeof getUserInfo 上，而不是函数的值 getUserInfo。与 typeof 一样，要慎重使用这种技术，不要混淆了真相来源。

- 泛型相当于类型的函数，而函数对于逻辑来说是 DRY 原则的关键。因此，泛型是类型的 DRY 原则的关键也就不足为奇了。但是，这个类比还缺少一个环节。通过类型系统来约束函数映射的值：用数字来做加法，而不是对象；通过计算获取图形的面积，而不是数据库的记录。但如何约束通用类型中的参数？

  可以用继承（extends）来做到这一点。可以声明任何泛型参数继承自一个类型。例如：

  ```ts
  interface Name {
    first: string;
    last: string;
  }
  type DancingDuo<T extends Name> = [T, T];

  const couple1: DancingDuo<Name> = [
    { first: 'Fred', last: 'Astaire' },
    { first: 'Ginger', last: 'Rogers' }
  ]; // OK

  const couple2: DancingDuo<{ first: string }> = [
    // 类型“{ first: string; }”不满足约束“Name”。
    // 类型“{ first: string; }”中缺少属性 “last”，但在类型 “Name” 为必选
    { first: 'Sonny' },
    { first: 'Cher' }
  ];
  ```

  目前，TypeScript 总是要求在声明中写出通用参数。写 DancingDuo 而不写 `DancingDuo<Name>` 是不行的。如果想让 TypeScript 推断出泛型参数的类型，那么可以使用一个类型化的等身函数：

  ```ts
  const dancingDuo = <T extends Name>(x: DancingDuo<T>) => x;
  const couple1 = dancingDuo([
    { first: 'Fred', last: 'Astaire' },
    { first: 'Ginger', last: 'Rogers' }
  ]);
  const couple2 = dancingDuo([{ first: 'Bono' }, { first: 'Prince' }]); // 类型“{first:string;}”中缺少属性“last”，但在类型“Name”为必选
  ```

  关于这个特别有用的不同，请参见条款 26 中的 inferringPick。可以使用 extends 来完成前面的 Pick 的定义。如果通过类型检查器运行原始版本，会得到一个错误：<!-- TODO -->

  ```ts
  type Pick<T, K> = {
    [k in K]: T[k]; // 不能将类型 “K” 分配给类型 “string | number | symbol"
  };
  ```

  K 在这一类型中没有限制，显然过于宽泛：它需要可以用作索引的东西，即 string|number|symbol。但可以让它比这更具体，K 实际上应该是 T 的键的一些子集，即 keyof T：

  ```ts
  type Pick<T, K extends keyof T> = {
    [k in K]: T[K];
  }; // OK
  ```

  [将类型视为值的集合](#22-将类型视为价值的集合)，这里把 “继承” 读成 “……的子集” 是有助于理解的。

  当使用越来越多的抽象类型时，尽量不要忘记原本的目标：接受有效的程序，拒绝无效的程序。在这种情况下，约束的结果是，将错误的键传给 Pick 会产生错误：

  ```ts
  type FirstLast = Pick<Name, 'first' | 'last'>; // OK
  type FirstMiddle = Pick<Name, 'first' | 'middle'>; // 不能将类型 “"middle"” 分配给类型 "first"|"last"
  ```

### 2.10 为动态数据使用索引签名

JS 最大的特点是其可以方便地创建对象的语法：

```ts
const rocket = {
  name: 'Falcon 9',
  variant: 'Block 5',
  thrust: '7,607 kN'
};
```

JS 中的对象可以将字符串键映射到任何类型的值上。TypeScript 允许通过在类型上指定一个索引签名来表示这样灵活的映射：

```ts
type Rocket = { [property: string]: string };
const rocket: Rocket = {
  name: 'Falcon 9',
  variant: 'v1.0',
  thrust: '4,940 kN'
}; // OK
```

`[property: string]:string` 就是索引签名。它指定了三件事情：

_键的名字_
: 这纯粹是为了文档，类型检查器不以任何方式使用它。

_键的类型_
: 这其实应该是某种 string、number 或 symbol 的组合。但一般来说，只需要使用 string（参见条款 16）。<!-- TODO -->

_值的类型_
: 这可以是任何类型。

虽然它确实需要进行类型检查，但它有一些缺点：

- 它允许任何键，包括不正确的。如果写的是 Name 而不是 name，它仍然是一个有效的 Rocket 类型。

- 它不需要任何特定的键。{} 也是一个有效的 Rocket。

- 它不能让不同的键有不同的类型。例如，thrust 可能应该是一个 number，而不是一个 string。

- TypeScript 的语言服务不能帮助处理这样的类型。当输入 name: 时，是无法自动补全的，因为键可以是任何东西。

简而言之，索引签名不是很精确。几乎总是有更好的方式替代它。在这种情况下，Rocket 显然应该是一个 interface：

```ts
interface Rocket {
  name: string;
  variant: string;
  thrust_kN: number;
}
const falconHeavy: Rocket = {
  name: 'Falcon Heavy',
  variant: 'v1',
  thrust_kN: 15_200
};
```

现在 thrust_kN 是一个 number，TypeScript 将检查所有所需的字段是否存在。TypeScript 提供的所有很棒的语言服务都是可用的：自动补全、跳转到定义，重命名，它们都可以工作。

那么应该使用索引签名做什么？典型的场景就是那些真正动态的数据。例如，它可能来自一个 CSV 文件，在这个文件中，有一个标题行，并希望将数据行表示为将列名映射到值的对象：

```ts
function parseCSV(input: string): { [columnName: string]: string }[] {
  const lines = input.split('\n');
  const [header, ...rows] = lines;
  return rows.map(rowStr => {
    const row: { [columnName: string]: string } = {};
    rowStr.split(',').array.forEach((cell, i) => {
      row[header[i]] = cell;
    });
    return row;
  });
}
```

在这样一种一般的设定下，无法预知列名是什么，所以采用索引签名是合适的。如果 parseCSV 的使用者更了解特定上下文的列名是什么，可能会想用断言来获得一个更具体的类型：

```ts
interface ProductRow {
  productId: string;
  hame: string;
  price: string;
}
declare let csvData: string;
const products = parseCSV(csvData) as unknown as ProductRow[];
```

当然，这并不能保证运行时的列会真正符合期望。如果这是所担心的，可以在值类型中添加 undefined：

```ts
function safeParseCSV(input: string): { [columnName: string]: string | undefined }[] {
  return parseCSV(input);
}
```

现在，每次访问都需要一次检查：

```ts
const rows = parseCSV(csvData);
const prices: { [product: string]: number } = {};
for (const row of rows) {
  prices[row.productId] = Number(row.price);
}

const safeRows = safeParseCSV(csvData);
for (const row of safeRows) {
  prices[row.productId] = Number(row.price);
} // 类型 'undefined' 不能作为索引类型
```

当然，这可能会让该类型不那么方便使用。

如果类型有一组有限的可能字段，不要用索引签名来建模。例如，如果知道数据会有 A、B、C、D 这样的键，但不知道会有它们中的多少个，可以用可选字段或联合来对该类型建模：

```ts
interface Row1 {
  [column: string]: number;
} // 过于宽泛
interface Row2 {
  a: number;
  b?: number;
  c?: number;
  d?: number;
} // 更好一些
```

如果使用索引签名的问题是 string 太过宽泛，那么有几种选择：

- 一种是使用 Record，这是一种泛型类型，它可以在键类型上有更多的灵活性：

  ```ts
  type Vec3D = Record<'x' | 'y' | 'z', number>;
  // Type Vec3D = {
  //   x: number;
  //   y: number;
  //   z: number;
  // }
  ```

- 另一种是使用映射类型，它有可能对不同的键使用不同的类型：

  ```ts
  type Vec3D = { [k in 'x' | 'y' | 'z']: number };
  //同上
  type ABC = { [k in 'a' | 'b' | 'c']: k extends 'b' ? string : number };
  // Type ABC = {
  //   a: number;
  //   b: string;
  //   c: number;
  // }
  ```

### 2.11 优先选择 Array、Tuple 和 ArrayLike，而不是数字索引签名

JS 是一种著名的怪异语言。它有一些臭名昭著的怪癖涉及隐式强制类型转换：

```js
'0' == 0; // true
```

但这些通常可以通过使用 === 和 !== 来避免，而不是使用它们更有强制性的 “表兄弟”。

JS 的对象模型也有它的怪癖，这些怪癖更需要被理解，因为其中一些怪癖是由 TypeScript 的类型系统所建模的。[对象包装类](#25-避免对象包装类string-number-boolean-symbol-bigint)就是一个怪癖。

在 JS 中，对象是一个键/值对的集合。键通常是字符串（在 ES2015 及以后的版本中，它们也可以是符号）；值可以是任何东西。

这比其他许多语言中的限制性更强。JS 没有像 Python 或 Java 那样的 “可哈希” 对象的概念。如果试图使用一个更复杂的对象作为键，它将通过调用它的 toString 方法转换为一个字符串。特别是数字不能用作键。如果尝试使用数字作为属性名，JS 运行时会将其转换为字符串。

数组是特殊的对象，使用数字索引与之配合是很正常的，这些索引会被转换为字符串，也可以使用字符串键来访问数组的元素。如果使用 Object.keys 来列出一个数组的键，会得到字符串返回值。

TypeScript 试图通过允许数字键和区分这些键与字符串来带来一些理性。如果深入理解 Array 的[类型声明](#21-使用编辑器来询问和探索类型系统)，会在 lib.es5.d.ts 中找到这个：

```ts
interface Array<T> {
  // ...
  [n: number]: T;
}
```

“字符串键在运行时被接受，因为 ECMAScript 标准规定它们必须被接受” 是纯属虚构的，但这是一个可以发现错误的有用的方法：

```ts
const xs = [1, 2, 3];
const x0 = xs[0]; // OK
function get<T>(array: T[], k: string): T {
  return array[k]; // 由于索引表达式不属于 “数字” 类型，因此元素隐式地具有 “any” 类型
}
```

虽然这种虚构是有帮助的，但重要的是要记住，它只是一种虚构。像 TypeScript 类型系统的所有方面一样，它[在运行时被擦除](#11-理解代码的生成是独立于类型的)。这意味着 Object.keys 这样的构造仍然会返回字符串：

```ts
const keys = Object.keys(xs); // 类型是 string[]
for (const key in xs) {
  key; // 类型是 string
  const x = xs[key]; // 类型是 number
}
```

最后一次数组的访问是有点奇怪的，因为 string 是不能分配给 number 的。这被认为是对在数组上迭代的风格的一种实用性让步，而这种风格在 JS 中很常见。并不是说这是在数组上循环遍历的好办法。如果不关心索引，可以使用 for-of：

```ts
for (const x of xs) {
  x; // 类型是 number
}
```

如果确实关心索引，可以使用 Array.prototype.forEach，它以 number 的形式返回索引：

```ts
xs.forEach((x, i) => {
  i; // 类型是 number
  x; // 类型是 number
});
```

如果需要提前脱离循环，最好使用 C 风格的 for(;;) 循环：

```ts
for (let i = 0; i < xs.length; i++) {
  const x = xs[i];
  if (x < 0) break;
}
```

> 在大多数浏览器和 JS 引擎中，数组上的 for-in 循环比 for-of 或 C 风格的 for 循环慢几个数量级。

如果想接受任何长度的元组或任何类似数组的结构，而又不想使用 Array，TypeScript 中有一个可以使用的 ArrayLike 类型：

```ts
function checkedAccess<T>(xs: ArrayLike<T>, i: number): T {
  if (i < xs.length) {
    return xs[i];
  }
  throw new Error(`Attempt to access ${i} which is past end of array.`);
}
```

它只有一个 length 和数字索引签名。在极少数情况下，这是想要的，应该用它来代替。但请记住，它的键仍然是真正的字符串！

```ts
const tupleLike: ArrayLike<string> = {
  '0': 'A',
  '1': 'B',
  length: 2
}; // OK
```

### 2.12 使用 readonly 避免值变（Mutation）相关的错误

下面这些代码用来输出三角形数[^tn]（1、1+2、1+2+3 等）

[^tn]: 三角形数（triangular numbers）指的是一定数目的点或圆在等距离的排列下可以形成一个等边三角形，这样的数被称为三角形数。

```ts
function printTriangles(n: number) {
  const nums = [];
  for (let i = 0; i < n; i++) {
    nums.push(i);
    console.log(arraySum(nums));
  }
}
```

当运行它的时候会输出：

```ts
printTriangles(5);
// 0
// 1
// 2
// 3
// 4
```

问题就在于，已经假设 arraySum 如其名字一样，不会修改 nums。但实现是这样的：

```ts
function arraySum(arr: number[]) {
  let sum = 0,
    num;
  while ((num = arr.pop()) !== undefined) {
    sum += num;
  }
  return sum;
}
```

这个函数确实计算了数组中的数字之和，但它也有清空数组的副作用！在 TypeScript 中这是没有问题的，因为 JS 数组是可以值变的。如果有一些能让 arraySum 不修改数组的保证就更好了。这就是 readonly 类型修饰符的作用：

```ts
function arraySum(arr: readonly number[]) {
  let sum = 0,
    num;
  // 类型 “readonly number[]” 上不存在属性 “pop”
  while ((num = arr.pop()) !== undefined) {
    sum += num;
  }
  return sum;
}
```

`readonly number[]` 是一个类型，它在以下方面区别于 number[] 类型：

- 可以从中读取它的元素，但不能向它们写入。
- 可以读取它的 length，但不能设置它（这将使数组发生值变）。
- 不能调用 pop 或其他方法来使数组值变。

因为从严格意义上来说，number[] 的能力比 readonly number[] 更强，所以 number[] 是 readonly number[] 的一个子类型（这很容易弄反了），所以 可以将一个可变数组分配给一个 readonly 数组，但反之不行：

```ts
const a: number[] = [1, 2, 3];
const b: readonly number[] = a;
const c: number[] = b; // 类型 “readonly number[]” 是 “readonly” 的，不能分配给可变类型 “number[]”
```

这样做是有道理的：如果连类型断言都不需要就能摆脱它的话，这样 readonly 修饰符就没什么用了。

当声明一个参数为 readonly 时：

- TypeScript 会检查参数是否在函数体中有值变。
- 调用者可以放心，函数不会使参数值变。
- 调用者可以给函数传一个 readonly 的数组进去。

在 JS（和 TypeScript）中通常有一个假设，即除非明确指出，否则函数不会使其参数值变。但诸如此类的隐式理解会让类型检查很麻烦。因此最好将它们明确化，无论是对人类读者还是对 tsc 来说都是如此。

解决 arraySum 的方法很简单：不要使数组值变！

```ts
function arraySum(arr: readonly number[]) {
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }
  return sum;
}
```

现在 printTriangles 所做的就符合预期了。

如果函数不会使其参数值变，那么应该声明其参数为 readonly。这样做相对来说缺点不大：用户将能够用更广泛的类型集（参见条款 29 ）<!-- TODO --> 来调用它们，无意中的值变将被捕获。

一个缺点是，可能需要（在该函数中）调用那些没有标记其参数为 readonly 的函数。如果这些函数没有使它们的参数值变，并且在控制范围内，那么要把它们改成 readonly! Readonly 往往会传染：一旦用 readonly 标记了一个函数，也需要标记它调用的所有函数。这是件好事，因为它可以使契约更清晰、类型更安全。但是，如果在调用另一个库中的函数，可能无法改变它的类型声明，不得不求助于类型断言。

Readonly 也可以用来捕捉涉及局部变量的一整类值变错误。例如，正在编写一个处理文本的工具，有一连串的行，并想把它们收集成段落，这些段落之间用空格隔开：

```txt
Frankenstein; or, The Modern Prometheus
by Mary Shelley
You will rejoice to hear that no disaster has accompanied the commencement
of an enterprise which you have regarded with such evil forebodings. I
arrived
here yesterday, and my first task is to assure my dear sister of my welfare
increasing confidence in the success of my undertaking.
dy far north of London, and as I walk in the streets of Petersburgh,
I am at a cold northern breeze play upon my leeks, which braces my nerves and
fills me with delight.
```

下面是一种尝试：

```ts
function parseTaggedText(lines: string[]): string[][] {
  const paragraphs: string[][] = [];
  const curPara: string[] = [];

  const addParagraph = () => {
    if (curPara.length) {
      paragraphs.push(curPara);
      curPara.length = 0; // 清空行
    }
  };

  for (const line of lines) {
    if (!line) {
      addParagraph();
    } else {
      curPara.push(line);
    }
  }

  addParagraph();
  return paragraphs;
}
```

当在例子上运行这个时，会得到这样的结果：

```ts
[[], [], []];
```

这段代码的问题是别名（参见条款 24）和值变的致命组合。别名发生在这一行：

```ts
paragraphs.push(curPara);
```

与其说这是推入（push）curPara 中的值，不如说这是推入一个对数组的引用。当向 curPara 推入一个新的值或清除它时，这个变化也会反映在 paragraphs 的那些项中，因为它们指向同一个对象。

可以通过声明它是 readonly 来阻止这种行为。但这马上就会报出实现中的一些错误：

```ts
function parseTaggedText(lines: string[]): string[][] {
  const paragraphs: string[][] = [];
  const curPara: readonly string[] = [];

  const addParagraph = () => {
    if (curPara.length) {
      paragraphs.push(curPara); // 类型 “readonly string[]” 是 “readonly” 的，不能分配给可变类型 “string[]”
      curPara.length = 0; // 不能赋值给 "length"，因为它是一个只读属性
    }
  };

  for (const line of lines) {
    if (!line) {
      addParagraph();
    } else {
      curPara.push(line); // 类型 "readonly string[]” 上不存在属性 “push”
    }
  }

  addParagraph();
  return paragraphs;
}
```

可以用 let 声明 curPara 和使用非值变方法来解决其中的两个错误：

```ts
let curPara: readonly string[] = [];
// ...
curPara = []; // 清空行
// ...
curPara = curPara.concat([line]);
```

不同于 push 的是，concat 在保持原来的数组不被修改的情况下返回一个新的数组。通过将声明从 const 改为 let，并添加 readonly，已经将可变性换成了另外一种：curPara 变量现在可以自由地改变它所指向的数组，但这些数组本身不允许被修改。

这样就剩下关于 paragraphs 的错误。有三个选择来解决这个问题：

1. 可以做一个 curPara 的副本：

   ```ts
   paragraphs.push([...curPara]);
   ```

   这样就修复了错误，因为尽管 curPara 仍然是 readonly，但可以使其副本值变。

2. 可以将 paragraphs（以及函数的返回类型）改为一个 readonly string[] 的数组：

   ```ts
   const paragraphs: (readonly string[])[] = []; // 这里的括号分组是有意义的：readonly string[][] 会是一个可变数组的 readonly 数组，而不是一个 readonly 数组的可变数组。
   ```

   这样做是可行的，但对 parseTaggedText 的使用者来说有点粗暴。

3. 可以使用一个断言来移除数组的 readonly 性质：

   ```ts
   paragraphs.push(curPara as string[]);
   ```

   由于在下一条语句中就将 curPara 分配给了一个新的数组，这似乎并不是特别唐突的断言。

一个对于 readonly 重要的告诫是，它是浅层的。如果有一个对象的 readonly 数组，那么对象本身并会不是 readonly：

```ts
const dates: readonly Date[] = [new Date()];
dates.push(new Date()); // 类型 “readonly Date[]” 不存在属性 “push”
dates[0].setFullYear(2037); // OK
```

类似的考虑还适用于 Readonly 工具类型：

```ts
interface Outer {
  inner: {
    x: number;
  };
}
const o: Readonly<Outer> = { inner: { x: 0 } };
o.inner = { x: 1 }; // 不能赋值给 "inner"，因为它是一个只读属性
o.inner.x = 1; // OK
```

可以创建一个类型别名，然后在编辑器中检查它：

```ts
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};
```

这里的重点是，readonly 修饰符是在 inner 上，而不是在 x 上。暂时还没有内置的对深层只读类型的支持，但是可以创建一个泛型类型来完成这个任务。要做到这一点很棘手，所以建议使用一个库，而不是自己开发。ts-essentials 的 DeepReadonly 泛型是一种实现。

也可以将 readonly 写在索引签名上，这具有防止写，但允许读的效果：

```ts
let obj: { readonly [k: string]: number } = {};
// 或者 Readonly<{[k: strting]: number }>;
obj.hi = 45; // 类型...中的索引签名只允许读取
obj = { ...obj, hi: 12 }; // OK
obj = { ...obj, bye: 34 }; // OK
```

比起数组，这可以避免涉及对象的别名和值变问题。

### 2.13 使用映射类型来保持值的同步

假设正在编写一个用于绘制散点图的 UI 组件。它有几个不同类型的属性来控制其显示和行为：

```ts
interface ScatterProps {
  // 数据
  xs: number[];
  ys: number[];
  // 显示
  xRange: [number, number];
  yRange: [number, number];
  color: string;
  // 事件
  onClick: (x: number, y: number, index: number) => void;
}
```

为了避免不必要的工作，希望只在需要的时候重绘图表。改变数据或显示属性将需要重绘，但改变事件处理程序将不需要。这种优化在 React 组件很常见，事件处理程序 Prop 可能会在每次渲染时设置一个新的箭头函数。这里有一种方法可以实现这种优化：

```ts
function shouldUpdate(oldProps: ScatterProps, newProps: ScatterProps) {
  let k: keyof ScatterProps;
  for (k in oldProps) {
    if (oldProps[k] !== newProps[k]) {
      if (k !== 'onClick') return true;
    }
  }
  return false;
}
```

每当图表发生变化时，shouldUpdate 函数就会重绘图表。可以称之为保守的或 “故障关闭” 的方法。其好处是图表看起来总是正确的，缺点是它可能会被绘制得太频繁。“故障打开” 的方法可能是这样的：

```ts
function shouldupdate(oldProps: ScatterProps, newProps: ScatterProps) {
  return (
    oldProps.xs !== newProps.xs ||
    oldProps.ys !== newProps.ys ||
    oldProps.xRange !== newProps.xRange ||
    oldProps.yRange !== newProps.yRange ||
    oldProps.color !== newProps.color
    // （不检查 onClick）
  );
}
```

用这种方法不会有任何不必要的重绘，但可能会有一些必要的绘制被放弃。这违反了 “首先，不要伤害” 的优化原则，所以不太常用。这两种方法都不理想。真正希望的是在添加新属性时，强迫做出是否更新决定。可以尝试添加一个注释：

```ts
interface ScatterProps {
  xs: number[];
  ys: number[];
  // ...
  onClick: (x: number, y: number, index: number) => void;
  // 注意：如果在这里添加了一个属性，更新 shouldUpdate!
}
```

但如果类型检查器能强制执行，那就更好了。如果设置的方式正确，它是可以的。关键是使用一个映射类型和一个对象：

```ts
const REQUIRES_UPDATE: { [k in keyof ScatterProps]: boolean } = {
  xs: true,
  ys: true,
  xRange: true,
  yRange: true,
  color: true,
  onClick: false
};

function shouldUpdate(oldProps: ScatterProps, newProps: ScatterProps) {
  let k: keyof ScatterProps;
  for (k in oldProps) {
    if (oldProps[k] !== newProps[k] && REQUIRES_UPDATE[k]) {
      return true;
    }
  }
  return false;
}
```

[k in keyof ScatterProps] 告诉类型检查器，REQUIRES_UPDATES 应该具有与 ScatterProps 相同的所有属性。如果将来给 ScatterProps 增加一个新的属性：

```ts
interface ScatterProps {
  onDoubleClick: () => void;
}
// 那么这将在 REQUIRES_UPDATE 的定义中产生一个错误：
const REQUIRES_UPDATE: { [k in keyof ScatterProps]: boolean } = {
  // 类型...中缺少属性 “onDoubleClick"
};
```

这肯定会强行抛出问题！删除或重命名一个属性将导致类似的错误。如果想让一个对象与另一个对象有完全相同的属性，那么使用映射类型是非常理想的方法。就像在这个例子中，可以用它来使 TypeScript 在代码中强制执行约束。

## 三. 类型推断

对于工业领域使用的编程语言来说，“静态类型化” 和 “显式类型化” 在传统上是同义词。C、C++、Java 这样的语言都让写出自己的类型。但是学术语言从来没有把这两件事混为一谈，像 Meta Language 和 Haskell 这样的语言早就有了复杂的类型推断系统，在过去的十年里，这已经开始进入工业语言。C++ 增加了 auto，Java 增加了 var。

TypeScript 中广泛使用类型推断。使用得好的话，这可以大大减少代码所需要的类型标注的数量，以获得完整的类型安全体验。辨别 TypeScript 初学者和有经验用户的最简单的一个方法就是看其使用类型标注的数量。一个有经验的 TypeScript 开发者会使用相对较少的标注（但使用它们会有很大的效果），而一个初学者可能会把他们的代码淹没在多余的类型标注中。

### 3.1 避免代码被可推断类型弄得混乱不堪

许多新的 TypeScript 开发者在转换 JS 代码库时，首先要做的就是给代码填上类型标注。毕竟 TypeScript 是关于类型的！但在 TypeScript 中，许多标注是不必要的。为所有的变量声明类型会适得其反，还会被认为是糟糕的风格。不要写成这样：

```ts
let x: number = 12;
// 相反，只需写：
let x = 12;
```

如果在编辑器中把鼠标移到 x，会看到它的类型已经被推断为 number。显式类型标注是多余的，写它只会增加干扰。如果不确定某个类型，可以在编辑器中进行检查。

TypeScript 也会推断出更复杂对象的类型。与其写成这样：

```ts
const person: {
  name: string;
  born: {
    where: string;
    when: string;
  };
  died: {
    where: string;
    when: string;
  };
} = {
  name: 'Sojourner Truth',
  born: {
    where: 'NY',
    when: 'c.1797'
  },
  died: {
    where: 'Battle Creek, MI',
    when: 'Nov. 26, 1883'
  }
};
```

不如直接写成这样：

```ts
const person = {
  name: 'Sojourner Truth',
  born: {
    where: 'NY',
    when: 'c.1797'
  },
  died: {
    where: 'Battle Creek, MI',
    when: 'Nov. 26, 1883'
  }
};
```

这两种类型是完全一样的。把类型写在值之外，只是在这里增加干扰（关于对象字面的类型推断，条款 21 有更详细的解释）<!-- TODO -->。对于对象来说这是真的规则，对于数组来说也是。TypeScript 可以毫无困难地根据函数的输入和操作找出这个函数的返回类型：

```ts
function square(nums: number[]) {
  return nums.map(x => x * x);
}
const squares = square([1, 2, 3, 4]); // 类型是 number[]
```

TypeScript 的类型推断可能比预想的更精确。这通常是件好事，例如：

```ts
const axis1: string = 'x'; // 类型是 string
const axis2 = 'y'; // 类型是 "y"
```

允许类型推断也方便重构。例如，有一个 Product 类型和一个它的日志函数：

```ts
interface Product {
  id: number;
  name: string;
  price: number;
}
function logProduct(product: Product) {
  const id: number = product.id;
  const name: string = product.name;
  const price: number = product.price;
  console.log(id, name, price);
}
```

在某个时候，了解到产品 ID 中除了数字之外，还可能有字母。所以，改变了 Product 中 id 的类型。但因为把 logProduct 中所有的变量都附加了显式标注，这就产生了一个错误：

```ts
interface Product {
  id: string;
  name: string;
  price: number;
}
function logProduct(product: Product) {
  const id: number = product.id; // 不能将类型 “string” 分配给类型 “number”
  const name: string = product.name;
  const price: number = product.price;
  console.log(id, name, price);
}
```

如果不在 logProduct 函数体中使用任何的类型标注，代码就会原封不动地通过类型检查器。更好的 logProduct 实现是使用解构赋值（参见条款 58）：<!-- TODO -->

```ts
function logProduct(product: Product) {
  const { id, name, price } = product;
  console.log(id, name, price);
}
```

这种做法会推断所有局部变量的类型。相应地，带有显式类型标注的做法就有些重复且杂乱无章：

```ts
function logProduct(product: Product) {
  const { id, name, price }: { id: string; name: string; price: number } = product;
  console.log(id, name, price);
}
```

在某些情况下，当 TypeScript 没有足够的上下文来确定一个类型时，仍然需要明确的类型标注。之前已经看到过其中一种情况：函数参数。

有些语言会根据参数的最终用途来推断它们的类型，但 TypeScript 不会。在 TypeScript 中，一个变量的类型一般是在其第一次被引入时确定的。理想的 TypeScript 代码包括函数/方法签名的类型标注，但不包括为其函数体中所创建的局部变量的类型标注。这样可以将干扰降到最低，让程序员专注于实现逻辑。

在某些情况下，也可以不对函数参数进行类型标注。例如，当有默认值时，可以在函数参数中不加类型标注：

```ts
function parseNumber(str: string, base = 10) {
  // ...
}
```

这里的类型 base 被推断为 number，因为默认值是 10。当函数被用作带有类型声明的库的回调时，通常可以推断出其参数类型。下例中所使用的 express HTTP 服务器库中的 request 和 response 声明是不需要的：

```ts
// 不要这样做：
app.get('/health', (request: express.Request, response: express.Response) => {
  response.send('OK');
});
// 要这样做：
app.get('/health', (request, response) => {
  response.send('OK');
});
```

在类型推断中如何使用上下文的问题，条款 26 会有更深入的探讨<!-- TODO -->。有些情况下，可能仍想指定一个类型，即使它可以被推断出来。其中一种情况是当定义一个对象字面量时：

```ts
const elmo: Product = {
  name: 'Tickle Me Elmo',
  id: '048188 627152',
  price: 28.99
};
```

当在这样的定义上指定类型时，会触发[额外属性检查](#26-认识额外属性检查的局限性)。这样可以帮助捕捉错误，特别是对于有可选字段的类型。

这样还会增加错误提示出现在正确地方的概率。如果不使用标注，对象定义中的错误将导致在使用它的地方出现类型错误，而不是在定义它的地方：

```ts
const furby = {
  name: 'Furby',
  id: 630509430963,
  price: 35
};
logProduct(furby); // 参数…不能赋给类型 “Product” 的参数
// 属性 “id” 的类型不兼容
// 不能将类型 “number” 分配给类型 “string”
```

通过标注，可以在犯错的地方得到一个更简洁的错误提示：

```ts
const furby: Product = {
  name: 'Furby',
  id: 630509430963, // 不能将类型 “number” 分配给类型 “string”
  price: 35
};
logProduct(furby);
```

类似的考虑也适用于函数的返回类型。即使是在可以推断的情况下，仍然需要对其进行标注，以确保实现的错误不会遗留到函数使用时。假设有一个检索股票报价的函数：

```ts
function getQuote(ticker: string) {
  return fetch(`https://quotes.example.com/?q=${ticker}`).then(response => response.json());
}
```

决定添加一个缓存来避免重复的网络请求：

```ts
const cache: { [ticker: string]: number } = {};
function getQuote(ticker: string) {
  if (ticker in cache) {
    return cache[ticker];
  }
  return fetch(`https://quotes.example.com/?q=${ticker}`)
    .then(response => response.json())
    .then(quote => {
      cache[ticker] = quote;
      return quote;
    });
}
```

在这个实现中存在一个失误，应该返回 Promise.resolve(cache[ticker])，使得 getQuote 总是返回一个 Promise。这个失误很可能会产生一个错误。但是，该错误出现在调用 getQuote 的地方，而不是在 getQuote 本身：

```ts
getQuote('MSFT').then(considerBuying);
// 类型 "number | Promise<any>" 上不存在属性 "then"
// 类型 “number” 上不存在属性 “then”
```

但如果标注了期望的返回类型（`Promise<number>`），错误提示就会出现在正确的地方：

```ts
const cache: { [ticker: string]: number } = {};
function getQuote(ticker: string): Promise<number> {
  if (ticker in cache) {
    return cache[ticker]; // 不能将类型 "number" 分配给类型 "promise<number>"...
  }
  // ...
}
```

当标注返回类型时，它可以防止应出现在实现中的错误，出现在使用者的代码中（请参见条款 25 中对异步函数的讨论，异步函数是避免这种使用 Promises 的错误的有效方法）。<!-- TODO -->

写出返回类型也可能帮助更清楚地思考函数：应该在实现它之前知道它的输入和输出类型是什么。虽然实现可能会变，但函数的契约（即它的类型签名）一般不应该变。这在思想上类似于测试驱动开发（TDD）。在测试驱动开发过程中，你在实现一个函数之前就写好了运用它的测试。先写出完整的类型签名有助于得到想要的函数，而不是那个根据实现不得已而为之的函数。

标注返回值的最后一个原因是，想使用一个具名类型。例如，可以选择不为这个函数写一个返回类型：

```ts
interface Vector2D {
  x: number;
  y: number;
}
function add(a: Vector2D, b: Vector2D) {
  return { x: a.x + b.x, y: a.y + b.y };
}
```

TypeScript 推断返回类型为 { x: number; y: number; }。这与 Vector2D 是兼容的，但当代码使用者看到输入的类型是 Vector2D 而输出的类型不是时，他们可能会感到惊讶。

如果对返回值类型进行标注，那么其呈现就会更加直接；而且如果写了关于类型的文档（参见条款 48），那么它也会与返回值相关联。随着推断返回类型的复杂性的增加，提供一个名字会更加有用。

如果使用代码静态分析工具，eslint 有一条规则 no-inferrable-types 可以帮助确保所有的类型标注都是真正必要的。

### 3.2 不同的类型使用不同的变量

在 JS 中，重用一个变量来持有不同类型的值以便用于不同的目的是没有问题的：

```js
let id = '12-34-56';
fetchProduct(id); // 期待的是一个 string
id = 123456;
fetchProductBySerialNumber(id); // 期待的是一个 number
```

在 TypeScript 中，这会导致两个错误：

```ts
let id = '12-34-56';
fetchProduct(id);
id = 123456; // 不能将 “123456” 分配给类型 “string”。
fetchProductBySerialNumber(id); // 类型 “string” 的参数不能赋给类型 “number” 的参数
```

根据值 “12-34-56"，TypeScript 推断出 id 的类型为 string。不能将 number 分配给 string，因此才会出现错误。

这使对 TypeScript 中的变量有了一个关键的认识：虽然一个变量的值可以改变，但它的类型一般不会改变。类型可以改变的一种常见方式是类型收缩（参见条款 22），<!-- TODO --> 但这涉及类型变小，而不是扩展到包括新的值。这个规则有一些重要的例外（参见条款 41），<!-- TODO --> 但它们是例外而不是规则。

为了使 id 的类型不发生变化，它必须足够广泛，以包含 string 和 number。这正是联合类型 string | number 的定义：

```ts
let id: string | number = '12-34-56';
fetchProduct(id);
id = 123456; // OK
fetchProductBySerialNumber(id); // OK
```

这便修复了错误。有趣的是，TypeScript 已经能够确定 id 在第一个调用中确实是一个 string,而在第二个调用中确实是一个 number。它根据赋值收缩了联合类型。

虽然联合类型确实有效，但它可能会带来更多的问题。联合类型比 string 或 number 等简单类型更难处理，因为在对它们做任何事情之前，通常必须先检查它们是什么。更好的解决办法是引入一个新的变量：

```ts
const id = '12-34-56';
fetchProduct(id);
const serial = 123456; // OK
fetchProductBySerialNumber(serial); //OK
```

在之前的版本中，第一个 id 和第二个 id 在语义上没有关系。它们只是因为重用了一个变量而变得有关系。这不仅会让类型检查器感到困惑，也会让读者感到困惑。

有两个变量的版本更好，原因有很多：

- 它将两个不相关的概念（ID 和序列号）分离开来。
- 它允许使用更具体的变量名。
- 它改善了类型推断，不需要类型标注。
- 它带来了更简单的类型。
- 它允许声明变量 const 而不是 let。这使得类型检查器更容易对它们进行推断。

尽量避免使用类型会变的变量。如果能为不同的概念使用不同的名称，这将使代码对读者和类型检查器来说都更清晰。

### 3.3 理解类型扩展

[在运行时，每个变量都只有一个值](#22-将类型视为价值的集合)。但是在静态分析时，当 TypeScript 检查代码时，一个变量有一组可能的值，即它的类型。当用一个常量初始化一个变量，但没有提供类型时，类型检查器需要决定一个类型。换句话说，它需要从指定的单一值中决定一组可能的值。在 TypeScript 中，这个过程被称为扩展（widening）。理解它将有助于理解错误并更有效地使用类型标注。

假设正在编写一个处理向量的库。写出了一个三维向量的类型，以及一个获取它的任一组成部分值的函数：

```ts
interface Vector3 {
  x: number;
  y: number;
  z: number;
}
function getComponent(vector: Vector3, axis: 'x' | 'y' | 'z') {
  return vector[axis];
}
```

但当你尝试使用它时，TypeScript 会标示一个错误：

```ts
let x = 'x';
let vec = { x: 10, y: 20, z: 30 };
getComponent(vec, x); // 类型 “string” 的参数不能赋给类型 "x" | "y" | "z" 的参数
```

问题在于 x 的类型被推断为 string，而 getComponent 函数期望它的第二个参数有一个更具体的类型。这就是类型扩展在起作用，并在这里导致了一个错误。

这个过程是具有二义性的，因为任何给定的值有很多可能的类型。比如在下列语句中：

```ts
const mixed = ['x', 1];
```

mixed 的类型应该是什么？这里有几种可能性：

- ('x' | 1)[]
- ['x', 1]
- [string, number]
- readonly [string, number]
- (string|number)[]
- readonly(string|number)[]
- [any, any]
- any[]

没有更多的上下文，TypeScript 没有办法知道哪一个是 “正确的”，它不得不猜测意图。（在上例中，它猜测的是 (string|number)[]）尽管它很聪明，但 TypeScript 不会每次都得到正确的结果，而后果就是像刚刚看到的那样的无意错误。

在最初的例子中，x 的类型被推断为 string，因为 TypeScript 选择允许这样的代码：

```ts
let x = 'x';
x = 'a';
x = 'Four score and seven years ago...';
```

但这也是有效的 JS 的写法：

```ts
let x = 'x';
x = /x|y|z/;
x = ['x', 'y', 'z'];
```

在推断 x 是 string 类型时，TypeScript 试图在特殊性和灵活性之间找到平衡。一般的规则是，一个[变量的类型不应该在它被声明后改变](#32-不同的类型使用不同的变量)，所以 string 比 string|RegExp 或 string|string[]或 any 类型都更合理。

TypeScript 给了一些方法来控制类型扩展的过程。其中一种就是 const。如果用 const 而不是 let 来声明一个变量，那么就会得到一个更窄的类型。事实上，使用 const 可以修复最初例子中的错误：

```ts
const x = 'x'; // 类型是"x"
let vec = { x: 10, y: 20, z: 30 };
getComponent(vec, x); // OK
```

因为 x 不能被重新赋值，所以 TypeScript 能够推断出一个更窄的类型，并且也不会有在随后的赋值中无意出现错误的风险。而且因为字符串字面量类型 “×” 可以分配给 “×” | "y" | "z"，代码便通过了类型检查器的检查。

然而 const 并不是万能的。对于对象和数组来说，仍然存在二义性。这里的 mixed 的例子说明了数组的问题：TypeScript 应该推断一个元组类型吗？它应该为元素推断什么类型？类似的问题也出现在对象上。这段代码在 JS 中是没有问题的：

```ts
const v = {
  x: 1
};
v.x = 3;
v.x = '3';
v.y = 4;
v.name = 'Pythagoras';
```

v 的类型可以被推断到任意的具体程度。最为具体的是 { readonly x: 1 }; 更一般化的是 { x: number }; 再一般化的就是 `{ [key: string]: number }` 或 object 了。对于对象来说，TypeScript 的类型扩展算法会把对象中的每个元素当作是用 let 赋值了一样，所以 v 的类型结果是 { x: number }。这可以给 v.x 重新赋值为不同的数字，但不能赋值为 string 并且这会阻止添加其他属性（这也是一次构建对象的一个很好的理由，正如条款 23 中所解释的那样）。<!-- TODO -->所以最后三条语句都是错误的。

同样地，TypeScript 试图在具体性和灵活性之间取得平衡。它需要推断出一个足够具体的类型来捕捉错误，但又不至于具体到产生误报。它通过把初始化像 1 这样的值的属性推断为 number 类型来做到这一点。

但有一些方法可以覆盖 TypeScript 的默认行为。

1. 提供一个明确的类型标注：

   ```ts
   const v: { x: 1 | 3 | 5 } = {
     x: 1
   }; // 类型是 { x: 1 | 3 | 5; }
   ```

2. 为类型检查器提供额外的上下文（例如，通过传递值作为函数的参数）。更多关于上下文在类型推断中的作用，请参见条款 26。<!-- TODO -->

3. 用 const 断言。这不能与在值空间中引入符号 let 和 const 的方法相混淆，这是一个纯粹类型层面上的构造。看看以下这些变量的不同推断类型：

   ```ts
   const v1 = {
     x: 1,
     y: 2
   }; // 类型是 { x: number; y: number; }
   const v2 = {
     x: 1 as const,
     y: 2
   }; // 类型是 {x: 1; y: number; }
   const v3 = {
     x: 1,
     y: 2
   } as const; // 类型是 { readonly x: 1; readonly y: 2;}
   ```

   as const 是一种特殊的类型断言，TypeScript 将把类型推断成最窄的类型即没有任何扩展。对于真正的常量，这通常是想要的。也可以对数组用 as const 来将其推断到一个元组类型：

   ```ts
   const a1 = [1, 2, 3]; // 类型是 number[]
   const a2 = [1, 2, 3] as const; // 类型是 readonly [1,2,3]
   ```

   如果遇到了一个认为是由类型扩展所造成的错误，可以考虑添加一些显式的类型标注或 const 断言。[在编辑器中检查类型](#21-使用编辑器来询问和探索类型系统)是建立直觉的关键。

### 3.4 理解类型收缩

类型扩展的反动作是类型收缩。这是 TypeScript 从一个 “宽” 类型到一个 “窄” 类型的过程。也许最常见的例子是 null 检查：

```ts
const el = document.getElementById('foo'); // 类型是 HTMLElement | null
if (el) {
  el; // 类型是 HTMLElement
  el.innerHTML = 'Party Time'.blink();
} else {
  el; // 类型是 null
  alert('No element #foo');
}
```

如果 el 是 null，那么第一个分支的代码就不会执行。所以 TypeScript 能够在这个代码块中从类型联合中排除 null，从而产生一个更容易处理的收缩类型。类型检查器通常很擅长在条件中收缩类型，尽管它偶尔会被别名所阻挠（参见条款 24）。<!-- TODO -->

也可以通过抛出或从分支中返回来收缩一个变量的类型范围。例如：

```ts
const el = document.getElementById('foo'); // 类型是 HTMLElement | null
if (!el) throw new Error('Unable to find #foo');
el; // 现在类型是 HTMLElement
el.innerHTML = 'Party Time'.blink();
```

有许多方法可以缩小类型的范围。使用 instanceof 就可以：

```ts
function contains(text: string, search: string | RegExp) {
  if (search instanceof RegExp) {
    return !!search.exec(text); // search 类型是 RegExp
  }
  return text.includes(search); // search 类型是 string
}
```

这就是所谓的 “自定义类型保护”。el is HTMLInputElement 作为返回类型告诉类型检查器，如果函数返回真，它可以收缩参数的类型。

一些函数能够使用类型保护来执行跨数组或对象的类型收缩。例如，如果在一个数组中进行一些查找，可能会得到一个可空类型的数组：

```ts
const jacksons = ['Jackie', 'Tito', 'Jermaine', 'Marlon', 'Michael'];
const members = ['Janet', 'Michael'].map(who => jacksons.find(n => n === who)); // 类型是 (string | undefined)[]
```

如果使用 filter 过滤掉 undefined 的值，TypeScript 是无法跟上这个逻辑的：

```ts
const members = ['Janet', 'Michael'].map(who => jacksons.find(n => n === who)).filter(who => who !== undefined); // 类型是 (string | undefined)[]
```

但如果使用类型保护，就是可以的：

```ts
function isDefined<T>(x: T | undefined): x is T {
  return x !== undefined;
}
const members = ['Janet', 'Michael'].map(who => jacksons.find(n => n === who)).filter(isDefined); // 类型是 string[]
```

一如既往，在编辑器中检查类型是建立对类型收缩如何工作的直觉的关键。了解 TypeScript 中的类型是如何收缩的，将帮助建立对类型推断工作的直觉，使报出的错误有意义，通常这也能与类型检查器有一个更高效的合作关系。

### 3.5 一次性构建对象

虽然一个变量的值可能会改变，但它在 TypeScript 中的类型一般不会改变。这使得一些 JS 模式比其他模式更容易在 TypeScript 中建模。特别是，这意味着应该更倾向于一次性构建对象，而不是一块一块地构建。

比如，这里有一种方法可以在 JS 中构建一个代表二维点的对象：

```ts
const pt = {};
pt.x = 3;
pt.y = 4;
```

但在 TypeScript 中，其中的每次赋值都会产生错误：

```ts
const pt = {}
pt.x: = 3; // 类型 “{}” 上不存在属性 “×”
pt.y=4; // 类型 “{}” 上不存在属性 “y”
```

这是因为第一行的 pt 的类型是根据它的值 {} 来推断的，只能给它分配已知的属性。如果定义一个 Point 接口，会得到相反的问题：

```ts
interface Point {
  x: number;
  y: number;
}
const pt: Point = {}; // 类型 “{}” 缺少类型 “Point” 中的以下属性: x, y
pt.x = 3;
pt.y = 4;
```

解决方法就是一次性定义对象：

```ts
const pt = {
  x: 3,
  y: 4
}; // OK
```

如果必须零散地构建对象，可以使用类型断言（as）来关闭类型检查器：

```ts
const pt = {} as Point;
pt.y = 4; // OK
```

但更好的方法是[一次性构建对象](#24-优先选择类型声明而不是类型断言)并同时使用声明：

```ts
const pt: Point = {
  x: 3,
  y: 4
};
```

如果需要从较小的对象中构建一个较大的对象，要避免分步进行：

```ts
const pt = { x: 3, y: 4 };
const id = { name: 'Pythagoras' };
const namedPoint = {};
Object.assign(namedPoint, pt, id);
namedPoint.name; // 类型 “{}” 上不存在属性 “name”
```

可以使用对象扩展操作符（...）来一次性构建较大的对象。

```ts
const namedPoint = { ...pt, ...id };
namedPoint.name; // OK，类型是 string
```

也可以使用对象展开运算符以一种类型安全的方式逐个构建对象字段。关键是在每次更新时使用一个新的变量，以便每个变量都得到一个新的类型。

```ts
const pt0 = {};
const pt1 = { ...pt0, x: 3 };
const pt: Point = { ...pt1, y: 4 }; // OK
```

虽然这是通过一种迁回的方式来构建这样一个简单的对象，但它也可以作为一个有用的技术来给对象添加属性，并允许 TypeScript 推断一个新的类型。

要以类型安全的方式有条件地添加一个属性，可以用 null 或 {} 进行对象扩展，它们不添加任何属性。

```ts
declare let hasMiddle: boolean;
const firstLast = { first: 'Harry', last: 'Truman' };
const president = { ...firstLast, ...(hasMiddle ? { middle: 's' } : {}) };
```

如果在编辑器中把鼠标移到 president 上，就会看到它的类型被推断为一个联合类型。

```ts
const president:
  | {
      middle: string;
      first: string;
      last: string;
    }
  | {
      first: string;
      last: string;
    };
```

如果是想让 middle 成为一个可选字段。例如，不能从这个类型上读出 middle：

```ts
president.middle; // 类型 "{ first: string; last: string; }” 上不存在属性 “middle”
```

如果是在有条件地添加多个属性，联合类型确实能更准确地表示可能的值集（参见条款 32）<!-- TODO --> 。但是，使用一个可选字段会更容易操作，可以使用辅助类型来得到它：

```ts
function addOptional<T extends object, U extends object>(a: T, b: U | null): T & Partial<U> {
  return { ...a, ...b };
}

const president = addOptional(firstLast, hasMiddle ? { middle: 'S' } : null);
president.middle; // OK，类型是 string | undefined
```

有时想通过转换另一个对象或数组来构建对象或数组。在这种情况下，“一次性构建对象” 的等价方法是使用内置的函数式构造，或者使用像 Lodash 这样的实用工具库，而不是使用循环。更多内容请参见条款 27。<!-- TODO -->

### 3.6 在使用别名时要保持一致

当为一个值引入一个新的名称时：

```ts
const borough = { name: 'Brooklyn', location: [40.688, -73.979] };
const loc = borough.location;
```

就创建了一个别名。对别名上属性的更改也会在原始值上可见：

```ts
loc[0] = 0;
borough.location; // [0, -73.979]
```

别名是所有语言的编译器的祸根，因为它们使控制流分析变得困难。但如果正确使用别名，TypeScript 将能够更好地理解代码，并帮助找到更多真正的错误。假设有一个表示多边形（polygon）的数据结构；

```ts
interface Coordinate {
  x: number;
  y: number;
}
interface BoundingBox {
  x: [number, number];
  y: [number, number];
}
interface Polygon {
  exterior: Coordinate[];
  holes: Coordinate[][];
  bbox?: BoundingBox;
}
```

多边形（polygon）的几何形状由 exterior 和 holes 属性指定。bbox 属性是一个可能存在也可能不存在的优化。可以用它来加快点是否在多边形中的检查速度。

```ts
function isPointInPolygon(polygon: Polygon, pt: Coordinate) {
  if (polygon.bbox) {
    if (pt.x < polygon.bbox.x[0] || pt.x > polygon.bbox.x[1] || pt.y < polygon.bbox.y[1] || pt.y > polygon.bbox.y[1]) {
      return false;
    }
    //...更复杂的检查
  }
}
```

这段代码可以工作（以及类型检查），但有点重复：polygon.bbox 在三行中出现了五次。下面是一个减少重复的中间变量的尝试：

```ts
function isPointInPolygon(polygon: Polygon, pt: Coordinate) {
  const box = polygon.bbox;
  if (polygon.bbox) {
    if (pt.x < box.x[0] || pt.x > box.x[1] || pt.y < box.y[1] || pt.y > box.y[1]) {
      // 对象可能是 'undefined'
      return false;
    }
  }
  // ...
}
```

这段代码仍然有效，但为什么会出现错误？通过抽取 box 变量，创建了一个 polygon.bbox 的别名，这使得在第一个例子中悄悄工作的控制流分析受阻。可以检查 box 和 polygon.bbox 的类型，看看发生了什么：

```ts
function isPointInPolygon(polygon: Polygon, pt: Coordinate) {
  polygon.bbox; // 类型是 BoundingBox | undefined
  const box = polygon.bbox; // box 类型是 BoundingBox | undefined
  if (polygon.bbox) {
    polygon.bbox; // 类型是 BoundingBox
    box; // 类型是 BoundingBox | undefined
  }
}
```

属性检查完善了 polygon.bbox 的类型，但没有完善 box 的类型，因此出现了错误。这就引出了别名的黄金法则：**如果引入了一个别名，请始终如一地使用它**。

在属性检查中使用 box 就可以解决这个错误：

```ts
function isPointInPolygon(polygon: Polygon, pt: Coordinate) {
  const box = polygon.bbox;
  if (box) {
    if (pt.x < box.x[0] || pt.x > box.x[1] || pt.y < box.y[1] || pt.y > box.y[1]) {
      // 对象可能是 'undefined'
      return false;
    }
  }
  // ...
}
```

现在类型检查器很开心，但对人类读者来说还有一个问题。对同一个东西用了两个名字；box 和 bbox。这是一个没有区别的区别（参见条款 36）。<!-- TODO -->

对象的解构可以通过更紧凑的语法来获得统一的命名。甚至可以将其用于数组和嵌套结构。

```ts
function isPointInPolygon(polygon: Polygon, pt: Coordinate) {
  const { bbox } = polygon;
  if (box) {
    if (pt.x < box.x[0] || pt.x > box.x[1] || pt.y < box.y[1] || pt.y > box.y[1]) {
      // 对象可能是 'undefined'
      return false;
    }
  }
  // ...
}
```

其他几点：

- 如果 x 和 y 属性是可选的，而不是整个 bbox 属性，这段代码就需要更多的属性检查。受益于条款 31 中的建议，该建议讨论了将空值推到类型周边的重要性。<!-- TODO -->

- 可选属性适用于 bbox，但不适用于 holes。如果 holes 是可选的，那么它就有可能是缺失的，或者是一个空数组（[]）。这将是一个没有区别的区别。空数组是表示 “无洞（no holes）” 的好办法。

在与类型检查器的交互中，不要忘记别名也会在运行时引入混乱：

```ts
const { bbox } = polygon;
if (!bbox) {
  calculatePolygonBbox(polygon); // 填入 polygon.bbox
  // 现在 polygon.bbox 和 bbox 指的是不同的值！
}
```

TypeScript 的控制流分析往往对局部变量相当不错。但对于属性，应该提高警惕：

```ts
function fn(p: Polygon) {
  /* ... */
}
polygon.bbox; // 类型是 BoundingBox | undefined
if (polygon.bbox) {
  polygon.bbox; // 类型是 BoundingBox
  fn(polygon);
  polygon.bbox; //类型是 still BoundingBox
}
```

对 fn(polygon) 的调用很可能会取消对 polygon.bbox 的设置，所以将类型恢复为 BoundingBox | undefined 会更安全。但这会令人沮丧：每次调用函数时，都必须重复检查属性。所以 TypeScript 做了一个实用主义的选择：假设函数不会使其类型优化无效，但实际上它可以。如果抽取了一个本地的 bbox 变量，而不是使用 polygon.bbox，那么 bbox 的类型将保持准确，但它可能不再与 polygon.box 取相同的值。

### 3.7 使用 async 函数代替异步代码的回调

JS 使用回调来模拟异步行为。这会导致 “回调地狱”，执行顺序与代码顺序相反。这使得回调代码难以阅读。如果还想并行运行请求，或者当发生错误时终止运行，那就会变得更加混乱。

ES2015 引入了 Promise 的概念来打破 “回调地狱”。一个 Promise 代表了未来可用的东西（因此有时也被称为 Future）。下面是使用 Promise 的代码：

```js
const page1Promise = fetch(url1);
page1Promise
  .then(response1 => {
    return fetch(url2);
  })
  .then(response2 => {
    return fetch(url3);
  })
  .then(response3 => {
    // ...
  })
  .catch(error => {
    // ...
  });
```

现在嵌套少了，执行顺序更接近代码顺序了；同时整合错误处理和使用像 Promise.all 这样更高阶的工具也更容易了。

ES2017 引入了 async 和 await 关键字，使事情变得更加简单：

```js
async function fetchPages() {
  const response1 = await fetch(url1);
  const response2 = await fetch(url2);
  const response3 = await fetch(url3);
  // ...
}
```

await 关键字会暂停 fetchPages 函数的执行，直到解析了每一个 Promise。在一个 async 函数中，还可以对抛出异常的 Promise 使用 await。这样就可以使用通常的 try/catch 机制了。

```js
async function fetchpages() {
  try {
    const response1 = await fetch(url1);
    const response2 = await fetch(url2);
    const response3 = await fetch(url3);
    // ...
  } catch (e) {
    // ...
  }
}
```

当以 ES5 或更早的版本为目标时，TypeScript 编译器将执行一些复杂的转换来使 async 和 await 正常工作。换句话说，无论用什么样的运行时系统，都可以在 TypeScript 中使用 async/await。

例如，想并行地获取页面，可以用 Promise.all 来编排 Promise：

```ts
async function fetchPages() {
  const [response1, response2, response3] = await Promise.all([fetch(url1), fetch(url2), fetch(ur13)]);
  // ...
}
```

在这种情况下，await 加解构赋值会特别好用。

类型推断也能很好地与 Promise.race 一起配合。当 Promise.race 的第一个输入的 Promises 解析时，它就会解析。一般说来，可以用 Promise.race 来给 Promises 添加超时功能：

```ts
function timeout(millis: number): Promise<never> {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject('timeout'), millis);
  });
}
async function fetchwithTimeout(url: string, ms: number) {
  return Promise.race([fetch(url), timeout(ms)]);
}
```

fetchWithTimeout 的返回类型被推断为 `Promise<Response>`，并且不需要类型标注。有趣的是为什么会这样，这需要研究一下：Promise.race 的返回类型是其输入类型的联合，在本例中是 `Promise<Response|never>`。但是，用 never（空集）取一个联合相当于什么都没做，所以这就被简化为 `Promise<Response>`。当使用 Promise 时，所有 TypeScript 的类型推断机制都会得到正确的类型。

有些时候，需要使用原生 Promise，特别是要把一个回调 API 包在 setTimeout 中时。但如果有选择的话，一般来说，更应该使用 async/await 而不是原生 Promise。原因有以下两方面：

- 它通常会产生更简洁和更直接的代码。
- 它强制要求 async 函数总是返回 Promise。

一个 async 函数总是返回一个 Promise，即使它不涉及 await 的任何东西。TypeScript 可以帮助建立一个对它的直观认识：

```ts
// function getNumber(): Promise<number>
async function getNumber() {
  return 42;
}
```

也可以创建 async 箭头函数：

```ts
const getNumber = async () => 42; // 类型是 () => Promise<number>
```

等价的原生 Promise 是：

```ts
const getNumber = () => Promise.resolve(42); // 类型是 () => Promise<number>
```

虽然为一个立即可用的值返回一个 Promise 可能看起来很奇怪，但这实际上有助于贯彻一个重要的规则：**一个函数要么总是同步执行，要么总是异步执行。它永远不应该将两者混在一起**。例如，如果想在 fetchURL 函数中添加一个缓存应该怎么办？以下是一个例子：

```ts
// 不要这样做
const _cache: { [url: string]: string } = {};
function fetchWithCache(url: string, callback: (text: string) => void) {
  if (url in _cache) {
    callback(_cache[url]);
  } else {
    fetchURL(url, text => {
      _cache[url] = text;
      callback(text);
    });
  }
}
```

虽然这看起来像是一种优化，但现在这个功能对使用者来说非常困难：

```ts
let requeststatus: 'loading' | 'success' | 'error';
function getUser(userId: string) {
  fetchWithCache(`/user/${userId}`, profile => {
    requestStatus = 'success';
  });
  requestStatus = 'loading';
}
```

调用 getUser 后的 requeststatus 值是什么？这完全取决于 profile 是否被缓存。如果没有被缓存，那么 requeststatus 将被设置为 “success”。如果已经被缓存了，那么 requeststatus 会被设置为 “success”，然后再设置为 “loading”。

对这两个函数使用 async 可以强制其行为保持一致：

```ts
const _cache: { [url: string]: string } = {};
async function fetchWithCache(url: string) {
  if (url in _cache) {
    return _cache[url];
  }

  const response = await fetch(url);
  const text = await response.text();
  _cache[url] = text;
  return text;
}

let requeststatus: 'loading' | 'success' | 'error';
async function getUser(userId: string) {
  requestStatus = 'loading';
  const profile = await fetchwithcache(`/user/${userId}`);
  requeststatus = 'success';
}
```

现在，非常清楚，requeststatus 将以 “success” 结束。用回调或原生 Promise 会很容易一不小心产生半同步代码，但用 async 则很难。

> **注意**：如果从一个 async 函数中返回一个 Promise，它不会再被另一个 Promise 包起来：返回类型将是 `Promise<T>` 而不是 `Promise<Promise<T>>`。

```ts
// Function getJSON(url:string): Promise<any>
async function getJSON(url: string) {
  const response = await fetch(url);
  const jsonPromise = response.json(); // 类型是 Promise<any>
  return jsonPromise;
}
```

### 3.8 了解类型推断中如何使用上下文

TypeScript 不只是根据值来推断其类型，它还考虑了值所在的上下文。这通常工作得很好，但有时会导致意外。了解上下文是如何被用于类型推断的，将帮助识别并解决这些意外情况。

在 JS 中，可以在不改变代码行为的情况下，将一个表达式抽取成一个常量（只要不改变执行顺序）。换句话说，下面这两个语句是等价的：

```ts
// Inline 格式
setLanguage('JavaScript');
// Reference 格式
let language = 'JavaScript';
setLanguage(language);
```

在 TypeScript 中，这个重构手段仍然有效：

```ts
function setLanguage(language: string) {
  /*...*/
}
setLanguage('JavaScript'); // OK
let language = 'JavaScript';
setLanguage(language); // OK
```

现在把条款 33 中的建议放在心上，用一个更精确的字符串字面量联合类型代替字符串类型：<!-- TODO -->

```ts
type Language = 'JavaScript' | 'TypeScript' | 'python';
function setLanguage(language: Language) {
  /* ... */
}
setLanguage('JavaScript'); // OK
let language = 'JavaScript';
setLanguage(language);
// “string” 的参数不能赋给类型 “Language” 的参数
```

对于内联形式，TypeScript 从函数声明中知道参数应该是 Language 类型。字符串 'JavaScript' 是可以分配到这个类型的，所以它是正确的。但是当抽取一个变量时，TypeScript 必须在赋值时推断出它的类型。在这种情况下，它推断出的是 string 类型，不能分配给 Language 类型，因此出现了错误。

有些语言能够根据变量的最终使用来推断变量的类型，但这也会让人感到困惑。TypeScript 的创造者 Anders Hejlsberg 将其称为 “鬼魅般的超距作用”。大体上，TypeScript 在第一次引入一个变量时就确定了它的类型。关于这个规则的一个明显的例外，请参见条款 41。<!-- TODO -->解决这个问题有两个好办法：

1. 用类型声明来限制 language 的可能值：

   ```ts
   let language: Language = 'JavaScript';
   setLanguage(language); // OK
   ```

   这样做的另一个好处是，如果语言中出现了错别字，可以标记出一个错误。

2. 让变量成为常量：

   ```ts
   const language = 'JavaScript';
   setLanguage(language); // OK
   ```

   通过使用 const，已经告诉类型检查器这个变量不能改变。所以 TypeScript 可以为 language 推断出一个更精确的类型，即字符串字面量类型 "JavaScript"。这个是可以分配给 Language 的，所以代码类型检查通过。当然，如果确实需要重新分配 language 的值，那么需要使用[类型声明](#33-理解类型扩展)。

这里的根本问题是，把值和使用它的上下文分开了。有时这是可以工作的，但往往不是。

**元组类型**
除了字符串字面量类型，元组类型也会出现问题。假设正在使用一个可以以编程方式平移（pan）地图的地图可视化工具：

```ts
// 参数是一个 pair: (latitude, longitude)。
function panTo(where: [number, number]) {
  /* ... */
}
panTo([10, 20]); // OK
const loc = [10, 20];
panTo(loc); // 类型 "number[]" 的参数不能赋给类型 “[number, number]” 的参数
```

如前所述，已经将一个值与它的上下文分离。在第一个例子中，[10, 20] 可分配给元组类型 [number, number]。在第二个例子中，TypeScript 将 loc 的类型推断为 number[]。因为许多数组有错误的元素数，所以它不能分配给元组类型。

现在已经声明了 const，这没有提供帮助。但仍然可以提供一个类型声明，让 TypeScript 知道确切含义：

```ts
const loc: [number, number] = [10, 20];
panTo(loc); // OK
```

还有一种方法是提供一个 “const 上下文”。这可以告诉 TypeScript，打算让值成为深层的常量，而不是 const 给出的浅层常量：

```ts
const loc = [10, 20] as const;
panTo(loc); // 类型 “readonly[10, 20]” 是 “readonly” 的，不能分配给可变类型 “[number, number]”
```

如果在编辑器中悬停在 loc 上，会看到它的类型现在被推断为 readonly[10, 20]，而不是 number[]。不幸的是这太精确了！panTo 的类型签名没有承诺它不会修改它的 where 参数的内容。由于 loc 参数有一个 readonly 类型，这是不可能的。最好的解决办法是在 panTo 函数中添加一个 readonly 标注：

```ts
function panTo(where: readonly [number, number]) {
  /*...*/
}
const loc = [10, 20] as const;
panTo(loc); // OK
```

如果类型签名不在控制范围内，那么就需要使用一个标注。

Const 上下文可以优雅地解决在推断中失去上下文的问题，但它们有一个缺点：如果在定义中犯了一个错误（例如，在元组中添加了第三个元素），那么错误将在调用点而不是在定义中被标记出来。这可能会让人感到困惑，尤其是当错误发生在一个深度嵌套的对象中时：

```ts
const loc = [10, 20, 30] as const; // 真正的错误在这
panTo(loc); // 类型 “readonly [10, 20, 30]” 的参数不能赋给类型 “readonly [number, number]” 的参数
// 属性 “length” 的类型不兼容
// 不能将类型 “3” 分配给类型 “2”
```

**对象**
当从一个包含一些字符串字面量或元组的对象中抽取一个常量时，也会出现将一个值与它的上下文分离的问题。例如：

```ts
type Language = 'JavaScript' | 'TypeScript' | 'Python';
interface GovernedLanguage {
  language: Language;
  organization: string;
}
function complain(language: GovernedLanguage) {
  /* ... */
}
complain({ language: 'TypeScript', organization: 'Microsoft' }); // OK
const ts = {
  language: 'TypeScript',
  organization: 'Microsoft'
};
complain(ts); // 类型 “{ language: string; organization: string; }” 的参数不能赋给类型 “GovernedLanguage” 的参数属性 “language” 的类型不兼容
// 不能将类型 “string” 分配给类型 “Language”
```

在 ts 对象中，language 的类型被推断为 string。如前所述，解决办法是添加一个类型声明，或者使用一个 const 声明（as const）。

**回调**
当把一个回调传递给另一个函数时，TypeScript 使用上下文来推断回调的参数类型：

```ts
function callWithRandomNumbers(fn: (n1: number, n2: number) => void) {
  fn(Math.random(), Math.random());
}

callWithRandom((a, b) => {
  a; // 类型是 number
  b; // 类型是 number
  console.log(a + b);
});
```

由于 callWithRandom 的类型声明，a 和 b 的类型被推断为 number。如果把回调函数转化为一个常量，就会失去这个上下文，并得到 noImplicitAny 错误：

```ts
const fn = (a, b) => {
  // 参数 “a” 隐式具有 “any” 类型
  // 参数 “b” 隐式具有 “any” 类型
  console.log(a + b);
};
callwithRandomNumbers(fn);
```

解决方法有两种：

1. 在参数中加入类型标注：

   ```ts
   const fn = (a: number, b: number) => {
     console.log(a + b);
   };
   callwithRandomNumbers(fn);
   ```

2. [对整个函数表达式应用类型进行声明](#27-尽可能将类型应用于整个函数表达式)。

### 3.9 使用函数式构造和库来帮助类型流转

JS 从未包含可以在 Python、C 或 Java 中找到的那种标准库。多年来，许多库都试图填补这片空缺。jQuery 不仅提供了与 DOM 交互的助手，还提供了对象和数组的迭代和映射。Underscore 更专注于提供一般性的实用工具函数，而 Lodash 则建立在这一工作之上。今天，像 Ramda 这样的库继续将函数式编程的思想带入 JS 世界。

这些库中的一些功能，如 map、flatMap、filter 和 reduce，都已进入 JS 语言本身。虽然这些构造（以及 Lodash 提供的其他构造）在 JS 中很有帮助，而且通常比手写循环更可取，但当把 TypeScript 加入进来时，这种优势往往会变得更加具有压倒性。这是因为它们的类型声明确保了类型可以在这些构造中流动。而对于手写循环，类型就要由自己负责了。

例如，考虑解析一些 CSV 数据的情况。可以在普通的 JS 中以某种命令式的方式来完成：

```js
const csvData = '...';
const rawRows = csvData.split('\n');
const headers = rawRows[0].split(',');

const rows = rawRows.slice(1).map(rowStr => {
  const row = {};
  rowStr.split(',').forEach((val, j) => {
    row[headers[j]] = val;
  });
  return row;
});
```

更在意函数式的 JS 的使用者可能更喜欢用 reduce 来构建行对象：

```js
const rows = rawRows
  .slice(1)
  .map(rowStr => rowStr.split(',').reduce((row, val, i) => ((row[headers[i]] = val), row), {}));
```

这个版本节省了三行（几乎 20 个非空格字符！），但也感觉到这更隐晦难懂了。Lodash 的 zipObject 函数，通过 “拼合（zipping）” 键和值数组形成了一个对象，从而可以进一步地精简这段代码：

```js
import _ from 'lodash';
const rows = rawRows.slice(1).map(rowStr => _.zipObject(headers, rowStr.split(',')));
```

这是所有做法中最清晰的。但是，在项目中添加一个对第三方库的依赖是值得的吗？如果没有使用打包工具，而且这样做的开销很大，那么答案可能是 “不”。但当把 TypeScript 加入进来时，就更强烈地倾向 Lodash 解决方案了。

上面两个普通 JS 版的 CSV 解析器在 TypeScript 中都会产生同样的错误：

```ts
const rowsA = rawRows.slice(1).map(rowStr => {
  const row = {};
  rowstr.split(',').forEach((val, j) => {
    row[headers[j]] = val; // 在类型 “{}” 上没有找到带有 “string” 类型参数的索引签名
  });
  return row;
});

const rowsB = rawRows.slice(1).map(rowstr =>
  rowstr.split(',').reduce(
    (row, val, i) => ((row[headers[i]] = val), row), // 在类型 “{}” 上没有找到带有 “string” 类型参数的索引签名
    {}
  )
);
```

对于每种情况，解决办法都是为 {} 提供一个类型的标注，要么是 {[ column: string]: string}，要么是 `Record<string, string>`。反过来说，对于使用 Lodash 的版本，不需要修改就能通过类型检查器：

```ts
const rows = rawRows.slice(1).map(rowStr => _.zipObject(headers, rowStr.split(','))); // 类型是 _.Dictionary<string>[]
```

Dictionary 是 Lodash 中的一个类型别名，`Dictionary<string>` 跟 {[key: string]: string} 或 Record<string, string> 是一样的。这里重要的是，rows 的类型是完全正确的，并不需要类型标注。

随着数据处理越来越复杂，这些优势会越来越明显。例如，假设有一个所有 NBA 球队的名单：

```ts
interface BasketballPlayer {
  name: string;
  team: string;
  salary: number;
}
declare const rosters: { [team: string]: BasketballPlayer[] };
```

要使用循环构建一个平层列表（flat list），可以对数组使用 concat。这段代码运行没问题，但不能通过类型检查：

```ts
let allPlayers = []; // 在一些无法确定其类型的地方，变量 “allPlayers” 隐式具有 “any[]” 类型
for (const players of Object.values(rosters)) {
  allPlayers = allPlayers.concat(players); // 变量 “allPlayers” 隐式具有 “any[]” 类型
}
```

为了解决这个问题，需要对 allPlayers 加一个类型标注：

```ts
let allPlayers: BasketballPlayer[] = [];
for (const players of Object.values(rosters)) {
  allPlayers = allPlayers.concat(players); // OK
}
```

但更好的解决方案是用 Array.prototype.flat：

```ts
const allPlayers = Object.values(rosters).flat(); // OK，类型是 BasketballPlayer[]
```

flat 方法会把多维数组铺平。它的类型签名类似于 T[][] => T[]。这个方案是最简洁的，不需要任何类型标注；并且额外的好处是，可以使用 const 代替 let 来防止之后 allPlayers 变量的值变（mutations）。

假设想从 allPlayers 着手并列出每支球队中工资最高的球员名单，按工资排序。下面是一个没用 Lodash 的方案，它需要在不使用函数式构造的地方进行类型标注：

```ts
const teamToPlayers: { [team: string]: BasketballPlayer[] } = {};
for (const player of allPlayers) {
  const { team } = player;
  teamToPlayers[team] = teamToPlayers[team] || [];
  teamToPlayers[team].push(player);
}

for (const players of Object.values(teamToPlayers)) {
  players.sort((a, b) => b.salary - a.salary);
}

const bestPaid = Object.values(teamToPlayers).map(players => players[0]);
bestPaid.sort((playerA, playerB) => playerB.salary - playerA.salary);
console.log(bestPaid);
// [
//   { team: 'GSW', salary: 37457154, name: 'Stephen Curry' },
//   { team: 'HOU', salary: 35654150, name: 'Chris Paul' },
//   ( team: 'LAL', salary: 35654150, name: 'Russell Westbrook' },
//   { team: 'OKC', salary: 35654932, name: 'Blake Griffin' }
//   ...
// ]
```

下面则是使用 Lodash 的等价代码：

```ts
const bestPaid = _(allPlayers)
  .groupBy(player => player.team)
  .mapValues(players => _.maxBy(players, p => p.salary)!)
  .values()
  .sortBy(p => -p.salary)
  .value(); // 类型是 BasketballPlayer[]
```

这样不仅代码长度只有一半，而且代码更加清晰，只需要一个非空断言（类型检查器不知道传递到 `_.maxBy` 的 players 数组是非空的）即可。并且这里还使用了 “链（chain）”（这是 Lodash 和 Underscore 中的一个概念），它可以以更自然的顺序写出一系列的操作。不用写成这样：

```ts
_a(_.b(_.c(v)));
```

而只需写成：

```ts
_(v).a().b().c().value();
```

用 `_(v)` 把值 “包起来”，然后用 .value() 把它 “解开”。可以检查链中的每一个函数调用，看一下被包起来的值的类型，它总是正确的。

即使是 Lodash 中的一些神奇的简写形式也可以在 TypeScript 中准确地建模。例如，为什么想使用 `_.map` 代替内置的 Array.prototype.map，其中一个原因是，可以只传递一个属性的名称，而不用传递一个回调。以下这些调用都会产生相同的结果：

```ts
const namesA = allPlayers.map(player => player.name); // 类型是 string[]
const namesB = _.map(allPlayers, player => player.name); // 类型是 string[]
const namesC = _.map(allPlayers, 'name'); // 类型是 string[]
```

这也证明了 TypeScript 类型系统的复杂性，它可以准确地对这样的构造进行建模，但它自然地[避免了字符串字面量类型和索引类型的组合](#29-使用类型操作和泛型来避免重复的工作)。

```ts
const salaries = _.map(allPlayers, 'salary'); // 类型是 number[]
const teams = _.map(allPlayers, 'team'); // 类型是 string[]
const mix = _.map(allPlayers, Math.random() < 0.5 ? 'name' : 'salary'); // 类型是 (string | number)[]
```

类型在内置的和像 Lodash 这样的库中的函数式构造中流转得如此之好，其实并不是一个巧合。[通过避免值变和从每次调用中返回新的值](#32-不同的类型使用不同的变量)，它们也能够产生新的类型。而且在很大程度上，驱动 TypeScript 发展的也包括这些为各种各样 JS 库的行为而准确建模的尝试。

## 四. 类型设计

### 4.1 倾向选择总是代表有效状态的类型

如果把类型设计得很好，代码应该是很容易写的。但如果类型设计得不好，代码会很混乱，且容易出现错误。

有效的类型设计的一个关键是**创建只能代表一个有效状态的类型**。假设正在构建一个 Web 应用程序，允许选择一个页面，加载该页面的内容，然后显示它。可以这样写 State：

```ts
interface State {
  pageText: string;
  isLoading: boolean;
  error?: string;
}
```

当编写代码来渲染页面时，需要考虑所有这些领域：

```ts
function renderPage(state: State) {
  if (state.error) {
    return `Error! Unable to load ${currentPage}: ${state.error}`;
  } else if (state.isLoading) {
    return `Loading ${currentPage}...`;
  }
  return `<h1>${currentPage}</h1>\n${state.pageText}`;
}
```

但这样做对吗？如果 isLoading 和 error 都设置了呢？那是什么意思？是显示加载信息好还是错误信息好？这个很难说！目前信息量不够。或者，如果要写一个 changePage 函数呢？这里有一个尝试的示例：

```ts
async function changePage(state: State, newPage: string) {
  state.isLoading = true;
  try {
    const response = await fetch(getUrlForpage(newPage));
    if (!response.ok) {
      throw new Error(`Unable to load ${newPage}: ${response.statusText}`);
    }
    const text = await response.text();
    state.isLoading = false;
    state.pageText = text;
  } catch (e) {
    state.error = '' + e;
  }
}
```
