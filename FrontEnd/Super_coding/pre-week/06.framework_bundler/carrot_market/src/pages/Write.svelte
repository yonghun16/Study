<script>
  import { getDatabase, ref, set, push } from "firebase/database";

  let title;
  let price;
  let description;
  let place;

  function writeUserData() {
    console.log("호출");
    const db = getDatabase();
    push(ref(db, 'items/' + title), {
      title,
      price,
      description,
      place
    });
  }
</script>

<form id="write-form" on:submit|preventDefault={writeUserData}>
  <!-- 
  <div>
    <label for="image">이미지</label>
    <input type="file" id="image" name="image" accept="image/*" required>
  </div> 
  -->
  <div>
    <label for="title">제목</label>
    <input type="text" id="title" name="title" required bind:value={title}>
  </div>
  <div>
    <label for="price">가격</label>
    <input type="number" id="price" name="price" required bind:value={price}>
  </div>
  <div>
    <label for="description">설명</label>
    <input type="text" id="description" name="description" required bind:value={description}>
  </div>
  <div>
    <label for="place">장소</label>
    <input type="text" id="place" name="place" required bind:value={place}>
  </div>
  <div>
    <button type="submit">저장</button>
  </div>
</form>
