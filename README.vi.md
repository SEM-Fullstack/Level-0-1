# SEM Fullstack Level 0+1 (Typescript + NodeJS + React)
| Mục                       | Nội dung                                                                                                                                                                                                                                |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Lv**                    | **Level 0 – Code Runner**<br>**Level 1 – Buildable Developer**                                                                                                                                                                          |
| **Tên cấp độ**            | Code Runner → Buildable Developer                                                                                                                                                                                                       |
| **Tiêu chí đạt được**     | ✅ Viết được component React đơn giản, có thể render không lỗi<br>✅ Tạo được API route NodeJS trả JSON<br>✅ Biết dùng `npm`, `tsconfig`, và `package.json` căn bản<br>✅ Tạo một fullstack app đơn giản (VD: Todo List) có thể chạy local |
| **Kỹ năng sở hữu**        | - TypeScript căn bản (kiểu, interface, function)<br>- React: JSX, useState, props<br>- NodeJS: Express route cơ bản<br>- Biết cách tổ chức project structure đơn giản<br>- Biết debug console, đọc stacktrace<br>- Git cơ bản           |
| **Thành tựu / Nhận diện** | Intern kỹ sư phần mềm / Junior mới học nghề / Student tốt nghiệp khóa code bootcamp                                                                                                                                                     |
| **Checklist kiểm chứng**  | 🔲 Todo App fullstack chạy local (Create/Delete)<br>🔲 Không lỗi syntax / runtime<br>🔲 Đẩy code lên GitHub<br>🔲 Có cấu trúc thư mục rõ ràng (src/components, src/routes, etc.)                                                            |
| **Scope ảnh hưởng**       | Chủ yếu là **bản thân**: tự build được, tự debug được, có thể nộp bài test kỹ thuật ở vòng tuyển dụng đầu vào                                                                                                                           |
| **Mindset chuyển đổi**    | 🎯 Từ “code sao cho chạy” → “code sao cho **người khác đọc được** và **có thể mở rộng**”<br>🎯 Học cách **chia nhỏ tính năng**, tách UI – logic – backend, và test từng phần                                                              |

## ToC

- [SEM Fullstack Level 0+1 (Typescript + NodeJS + React)](#sem-fullstack-level-01-typescript--nodejs--react)
  - [ToC](#toc)
  - [Tuần 1 - Typescript \& Git](#tuần-1---typescript--git)
    - [Ngày 1 - Typescript cơ bản](#ngày-1---typescript-cơ-bản)
      - [Khai báo biến](#khai-báo-biến)
      - [Các kiểu dữ liệu cơ bản](#các-kiểu-dữ-liệu-cơ-bản)
      - [Các kiểu dữ liệu chỉ "không"](#các-kiểu-dữ-liệu-chỉ-không)
        - [Khác biệt giữa `undefined`, `null` và `unknown`](#khác-biệt-giữa-undefined-null-và-unknown)
      - [any](#any)
        - [So sánh chi tiết và cách dùng](#so-sánh-chi-tiết-và-cách-dùng)
        - [Tại sao lại là `unknown`?](#tại-sao-lại-là-unknown)
      - [Các kiểu dữ liệu người dùng định nghĩa](#các-kiểu-dữ-liệu-người-dùng-định-nghĩa)
      - [Type với Interface khác nhau như thế nào](#type-với-interface-khác-nhau-như-thế-nào)
        - [Declaration Merging](#declaration-merging)
        - [So sánh chi tiết](#so-sánh-chi-tiết)
    - [Ngày 2 - Hàm số (function)](#ngày-2---hàm-số-function)
      - [Kiểu của hàm số](#kiểu-của-hàm-số)
      - [Function Expression \& Arrow function](#function-expression--arrow-function)
      - [Tham số của hàm](#tham-số-của-hàm)
        - [Tham số (tham số thông thường)](#tham-số-tham-số-thông-thường)
        - [Tham số tuỳ chọn - không bắt buộc (optional)](#tham-số-tuỳ-chọn---không-bắt-buộc-optional)
        - [Tham số "rest", "còn lại"](#tham-số-rest-còn-lại)
        - [Tham số có giá trị mặc định, `default param`](#tham-số-có-giá-trị-mặc-định-default-param)


## Tuần 1 - Typescript & Git

### Ngày 1 - Typescript cơ bản

#### Khai báo biến

Để khai báo biến trong **Typescript** dùng `let` hoặc `const`.

- `let`: dùng để khai báo biến bình thường, có thể thay đổi giá trị
- `const`: dùng để khai báo hằng số, không thể thay đổi giá trị

#### Các kiểu dữ liệu cơ bản

- `string`: chuỗi, được thể hiện bằng `""` hoặc `''`. Ví dụ: `"đây là một chuỗi"`
- `number`: số, có thể là số nguyên, hoặc số có dấu chấm động. Ví dụ: `1`, `1.234`
- `boolean`: có hai giá trị `true` hoặc `false`

#### Các kiểu dữ liệu chỉ "không"

- `undefined`: chưa khai báo
- `null`: null
- `unknown`: chưa biết

##### Khác biệt giữa `undefined`, `null` và `unknown`

**1. undefined**

Nói là: _**giá trị của tôi chưa được khai báo**_, **không** khai báo giá trị

`undefined` là giá trị mặc định của mọi biến.

```typescript
let a:number;
console.log(a) // undefined

function getAThing():void{
    return; // undefined
}
```

**2. null**

Nói là: _**Giá trị của tôi là "không có giá trị gì hết, rỗng"**_, **không** có giá trị, là **rỗng**

`null` thường được chủ đích dùng khi muốn nói là, dữ liệu là "rỗng", thường dùng trong database và thuật toán

```typescript
type Something = string | null
function getSomething() : Something {
    return null;
}
```

**3. unknown**

Nói là: **Không** biết kiểu dữ liệu sẽ là gì, cần kiểm tra trước khi dùng.

#### any

Kiểu dữ liệu `any` là một kiễu dữ liệu thể hiện sự chặc chẽ yếu, nói rằng, *"Kiểu nào cũng được"*.

```typescript
type SomeType = {
    name: string;
}

function log(a: any){
    console.log(a)
}

const s1: SomeType = {
    name: 'name1'
}

log(s1)             
log(1)              
lgo('hehe')         
```

##### So sánh chi tiết và cách dùng

| Thuộc tính            | `any`                                | `unknown`                         | `null`                       | `undefined`                                   |
| --------------------- | ------------------------------------ | --------------------------------- | ---------------------------- | --------------------------------------------- |
| Là kiểu dữ liệu       | ✅                                    | ✅                                 | ✅                            | ✅                                             |
| Là giá trị cụ thể     | ❌                                    | ❌                                 | ✅                            | ✅                                             |
| Cho phép dùng bất kỳ  | ✅ (nguy hiểm)                        | ❌ Phải kiểm tra trước             | ❌ Không dùng như hàm/hành vi | ❌ Không dùng như hàm/hành vi                  |
| An toàn               | ❌ Không                              | ✅ Rất an toàn                     | ✅ Nếu dùng có chủ đích       | ⚠️ Cẩn thận — có thể là lỗi                    |
| Dùng như gì cũng được | ✅                                    | ❌                                 | ❌                            | ❌                                             |
| Thường dùng khi nào   | Khi cần “tắt” kiểm tra kiểu tạm thời | Khi cần nhận giá trị chưa rõ kiểu | Để biểu thị "rỗng" có chủ ý  | Biến chưa được gán hoặc kết thúc không trả về |
| Có trong JavaScript?  | ❌ (chỉ TS)                           | ❌ (chỉ TS)                        | ✅                            | ✅                                             |

##### Tại sao lại là `unknown`?

**Typescript** với hệ thống kiểm tra kiểu dữ liệu sẽ chỉ có thể giúp chúng ta trong build time, tức là trong lúc code và đến trước khi compile sang javascript. Còn trong runtime, lúc chương trình được chạy, **SẼ KHÔNG CÓ BẤT KÌ KIỂM TRA KIỂU NÀO** nếu chúng ta không chủ đích kiểm tra bằng runtime type check (toán tử *typeof*, *instanceof*). 

Vì lí do này, `unknown` hiện lên như một lời nhắc nhỡ, **"Hãy check kiểu của cái này đi, biết kiểu rồi hãy thực hiện logic, nguy hiểm đó".** vì nếu một dữ liệu có kiểu `unknown` compiler sẽ yêu cầu thực hiện kiểm tra kiểu trước khi truy cập vào, properties, methods hoặc prototype và điều đó giúp giảm thiểu lỗi xảy ra ở runtime do sai kiểu dữ liệu. 

> ‼️ Kiểm tra kiểu liên tục sẽ làm giảm performance của hệ thống, typeof, instanceof hoặc các hàm kiểm tra kiểu built-in thì không đáng kể, còn lại chỉ nên check kiểu tại runtime khi thực sự quan trọng. Có thể dùng thư viện như **zod**, cho các kiểu phức tạp. 

#### Các kiểu dữ liệu người dùng định nghĩa

- `type`: dùng để định nghĩa một kiểu

```typescript
type MyType = string

type MyOtherType = {
    name: string;
    age: number;
}
```

- `interface`: dùng để định nghĩa một interface. Ví dụ

```typescript
interface MyInterface {
    method1: (param1: string)=>void
}

interface MyOtherInterface {
    name: string;
    age: string;
}
```

#### Type với Interface khác nhau như thế nào

Về mặt bản chất, `interface` thể hiện một bản _"hợp đồng"_, mọi instance tuân theo `interface` thì sẽ tuân theo bản hợp đồng này. Còn `type` lại giống như một _"biệt danh"_ giúp cho chúng ta có thể dễ dàng và linh hoạt hơn trong việc thể hiện kiểu dữ liệu.

Về mặt tính chất kỹ thuật `interface` hỗ trợ `declaration merging` còn `type` thì không, ở chiều ngược lại `type` hỗ trợ các phép toán trên kiểu dữ liệu như _union_, _intersection_, còn `interface` thì không.

##### Declaration Merging

Typescript cho phép khai báo một `interface` nhiều lần, và compiler sẽ tự động merge các khai báo của interface lại.

```typescript
// Declaration merging
interface MyType {
    hi: ()=>void
}

interface MyType {
    name:string
}

const myTypeInstance: MyType  = {
    name: 'Max',
    hi: ()=>console.log('My name is Max')
}
```

##### So sánh chi tiết

| Feature                  | `interface`           | `type`                        |
| ------------------------ | --------------------- | ----------------------------- |
| Basic Object Shape       | ✅ Yes                 | ✅ Yes                         |
| Union & Intersection     | ❌ No                  | ✅ Yes                         |
| Declaration Merging      | ✅ Yes                 | ❌ No                          |
| Extending                | ✅ Yes (via `extends`) | ✅ Yes (via `&` operator)      |
| Implements (in classes)  | ✅ Yes                 | ✅ Yes                         |
| Primitives, Tuples, etc. | ❌ No                  | ✅ Yes                         |
| Better for OO Design     | ✅ Yes                 | ⚠️ Possible, but not idiomatic |

### Ngày 2 - Hàm số (function)

Hàm số là một đơn vị đóng gói cơ bản của logic. trong **Typescript**, hàm số được khai báo theo cú pháp sau, gọi là `function declaration`.

```typescript
function <Tên hàm số>(param1:<kiểu param 1>, param2: <kiểu param 2>):<kiểu trả về>{
    // Logic ở đây
}
```

Ví dụ

```typescript
// Hàm không có param (tham số)
function callMeMaybe():void{
    console.log('Call me maybe');
}

// Hàm có param
function callMeByYournam(yourname:string):void{
    console.log(`Call me: ${yourname}`);
}

function add(a: number, b: number):number{
    return a + b;
}
```

Hàm số có thể trả về giá trị hoặc không, dùng từ khoá `return` để trả về giá trị cho hàm số.

Hàm số có thể được định nghĩa kiểu trả về hoặc không, mặc định là `void`, `void` nói rằng hàm này sẽ không trả về giá trị, không cần hứng nó. **Vậy nếu cố tình hứng thì sao?**

```typescript
type func = () => void;

const a: func = () => console.log();

const b = a();
console.log(b); //undefined
```

`undefined` sẽ là giá trị mặc định trả về cho hàm `void`, nhưng như đã nói, không nên quan tâm đến gía trị trả về của hàm được định nghĩa là `void`.

#### Kiểu của hàm số

Hàm số trong **Typescript** có một kiểu chung (dạng WrapperClass) gọi là **Function**,nhưng kiểu này rất chung chung và không đáng tin cậy.

Mỗi dạng hàm số trong Typescript sẽ có một kiểu riêng, gọi là **Signature (chữ ký)**, chữ ký này là tổng hợp của:
- Số lượng tham số của hàm
- Kiểu của các tham số đó

Ví dụ:

```typescript
function add(a: number, b:number):number{
    return a + b
}

// Signature là (number,number)

function add2(a: number, b: number):string{
    return (a + b).toString()
}

// Signature là (number,number)
```

**‼️‼️‼️ KIỂU TRẢ VỀ SẼ KHÔNG ĐƯỢC XÉT TRONG SIGNATURE**

**‼️‼️‼️ HAI HÀM CÓ CHUNG SIGNATURE KHÔNG ĐƯỢC TRÙNG TÊN**

#### Function Expression & Arrow function

Ngoài cách khai báo bên trên, chúng ta có thể khai báo hàm như một expression (có thể không cần tên), cách này còn được gọi là `Nameless function`.

```typescript
const a = function(a:number, b: number): number {
    return a + b;
}

a(1,2); // 3

// Signature (number, number)
```

Hoặc có thể bằng **Arrow function**

```typescript
const a = (a: number, b: number) => number {
    return a + b;
}

a(1,2); // 3

// Signature (number, number)
```

Điểm khác biệt có thể nhìn thấy rõ ràng nhất là cả hai cách này cần một biến để gán vào và dùng biến đó như tên để gọi hàm.

Khác biệt chi tiết hơn so với **Function declaration** là

| Đặc điểm                   | `function declaration`        | `function expression` (nameless) | `arrow function`                        |
| -------------------------- | ----------------------------- | -------------------------------- | --------------------------------------- |
| **Cú pháp**                | `function name(...) {}`       | `const x = function (...) {}`    | `const x = (...) => {}`                 |
| **Có tên không?**          | ✅ Luôn có                     | ❌ Có thể không (và thường không) | ❌ Không có tên riêng                    |
| **Khai báo hoisted?**      | ✅ Hoisted toàn bộ             | ❌ Không hoisted                  | ❌ Không hoisted                         |
| **Gán vào biến?**          | ❌ Không cần (tự có tên)       | ✅ Cần gán để dùng                | ✅ Cần gán để dùng                       |
| **`this` binding**         | ✅ Dynamic — phụ thuộc context | ✅ Dynamic — phụ thuộc context    | 🚫 Lexical — lấy `this` từ phạm vi ngoài |
| **Dùng làm constructor**   | ✅ Có thể                      | ✅ Có thể                         | ❌ Không thể (`TypeError`)               |
| **Có `arguments` object?** | ✅ Có                          | ✅ Có                             | ❌ Không có `arguments`                  |
| **Thích hợp cho**          | Hàm cấp cao, public, khởi tạo | Callback, gán biến, IIFE         | Callback ngắn gọn, không cần `this`     |


_hoisted_ có thể hiểu đơn giản là "kéo lên", tức là Javascript sẽ thực hiện "kéo" các khai báo này lên phần dành cho khai báo biến và hàm trước khi bắt đầu thực thi.

**Function declaration** được kéo lên, còn hai kiểu khai báo còn lại thì không.

```typescript
const sum = add(1, 2);

function add(a: number, b: number): number{
    return a + b;
}
```

Đoạn code này sẽ **KHÔNG LỖI** gì khi chạy cả, vì khai báo hàm *add* sẽ được kéo lên trước dù hiện tại ta thấy nó được khai báo sau khi dùng.

```typescript

const sum = add(1, 2);

const add = function(a: number, b: number): number {
    return a + b;
} // Lỗi thực thi
```

Đoạn code này bị **LỖI THỰC THI**, *add* được gọi trước khi khai báo.

#### Tham số của hàm

Dù được khai báo như thế nào thì thành phần quan trọng nhất tạo ra signature cho hàm là các tham số.

##### Tham số (tham số thông thường)

Là các tham số được nêu tên trong phần khai báo tham số trong hàm, và bắt buộc phải có giá trị khi gọi hàm.

```typescript
function add(a: number, b): number {
    return a + b
}

add(1,2); // 3
add(1); // Error, không đủ tham số đầu vào

function add(a: number, b: number|undefined){
    if(b === undefined){
        return a;
    }

    return a + b;
}

add(1,2); // 3
add(1); // Error, thiếu tham số đầu vào
add(1, undefined); // 1
```

##### Tham số tuỳ chọn - không bắt buộc (optional)

Là tham số, có thể được truyền vào hàm, hoặc không (nếu không, `undefined` sẽ là giá trị của tham số đó).

```typescript
function add(a: number, b?:number){
    if(b === undefined){
        return a;
    }

    return a + b;
}

add(1, 2); // 3
add(1); // 1
add(1, undefined) // 1
```

Tham số tuỳ chọn sẽ không bị lỗi thực thi nếu chúng ta không truyền giá trị vào lời gọi hàm.

> ‼️ Các tham số tuỳ chọn luôn nên được để sau cùng của hàm. 

##### Tham số "rest", "còn lại"

Tham số `rest` là một dạng tham số đặc biệt, nó là một mảng, chứa các tham số từ vị trí được khai báo trở về sau.

```typescript
// Mọi tham số từ vị trí 0 sẽ được gôm vào rest tên là items
function add(...items: number[]):number{
    return items.reduce((a,b)=>a+b, 0)
}

add(); // 0
add(1,2,3); // 6
add(1,2,3,4); // 10

// Mọi tham số từ vị trí 1 sẽ được gôm vào rest tên otherItems
function add(a: number, ...otherItems: number[]): number {
    return a + otherItems.reduce((a,b)=>a+b, 0);
}

add(); // Error, thiếu tham số
add(1); // 1
add(1,2,3,4); // 10
```

##### Tham số có giá trị mặc định, `default param`

Đây là cách khai báo một tham số mà có thể gán giá trị mặc định cho nó khi không có giá trị truyền vào, có thể coi đây là một biến thể của tham số tuỳ chọn.

```typescript
function add(a: number, b: number = 1): number {
    return a + b
}

add(1); // 2
add(1,2); // 3
```

