# populate


### 참조 코드
```js
const productSchema = new mongoose.Schema({
  writer: {
    type: Schema.Types.ObjectId,    // Schema.Types.ObjectId -> MongoDB의 ObjectId를 이용한 자료형
    ref: 'User'
});
```
- ref: 'User'을 통해서 product.writer를 User 모델과 연결, 
- console.log(product.writer.name); 하면 유저 이름이 나옴. 
- 즉! (product.writer의 ObjectId) === (User의 ObjectId)


### populate했을 때.
```js
const product = await Product.findById(product._id).populate('writer'); // findById(product._id)는 Product 컬렉션에서 해당 _id를 가진 문서를 찾는 작업
console.log(product.writer.name); 
// 👉 출력: "Alice"
```
- Product 문서에서 특정 상품을 찾고, 그 상품의 작성자(writer)가 누구인지도 함께 조회해서 객체로 채워주는 코드입니다.
