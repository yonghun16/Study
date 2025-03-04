<script>
  import { getDatabase, ref, set, push } from "firebase/database";
  import Footer from "../components/Footer.svelte";

  let title;
  let price;
  let description;
  let place;

  async function writeUserData() {
    console.log("호출");
    const db = getDatabase();
    push(ref(db, 'items/' + title), {
      title,
      price,
      description,
      place
    });
    alert("저장 완료");
    window.location.hash = "/";
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
    <button type="submit" class="write-button">저장</button>
  </div>
</form>

<style>
  .write-button {
    background-color: #fe6f0f;
    color:  white;
    font-size: 16px;
    padding: 10px 15px;
    margin: 10px;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    text-decoration: none;
  }
</style>

<Footer location="/write"/>
