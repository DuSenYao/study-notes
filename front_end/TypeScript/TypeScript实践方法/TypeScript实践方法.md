# TypeScript 实践方法

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [TypeScript 实践方法](#typescript-实践方法)
  - [一. 了解 TypeScript](#一-了解-typescript)
    - [1.1 理解代码的生成是独立于类型的](#11-理解代码的生成是独立于类型的)
    - [1.2 习惯结构类型（Structural Typing）](#12-习惯结构类型structural-typing)
    - [1.3 限制使用 any 类型](#13-限制使用-any-类型)

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
       hape; // 类型是 Square
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

将类型视为一组值，那 extends 是什么意思呢？如同 “assignable to（可赋值到）”一样，可以把它理解为 “subset of（的子集）”。PersonSpan 中的每个值都必须有一个 name 属性，它是一个 string，并且每个值也必须有一个 birth 属性，所以它是一个合适的子集。
