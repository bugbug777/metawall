<template>
  <div
    class="overlapping border border-2 border-dark text-center font-monospace bg-white py-5 mb-4"
  >
    <h2 class="fs-5">張貼動態</h2>
  </div>
  <div class="card shadow-card-2 border border-2 border-dark">
    <div class="card-body p-8">
      <form>
        <div class="mb-4">
          <label for="content" class="form-label">貼文內容</label>
          <textarea
            class="form-control rounded-0 border-2 border-dark px-4 py-3"
            id="content"
            rows="7"
            placeholder="輸入您的貼文內容"
          ></textarea>
        </div>
        <button type="button" class="btn btn-dark | rounded-2 | py-1 px-8 mb-4">上傳圖片</button>
        <img
          src="@/assets/images/image@2x.png"
          alt="upload image"
          class="card-img rounded-8 | mb-8"
        />
        <div class="invalid-feedback | text-center | mb-4">
          圖片檔案過大，僅限 1mb 以下檔案<br />
          圖片格式錯誤，僅限 JPG、PNG 圖片
        </div>
        <div class="text-center">
          <button
            type="submit"
            class="w-60 | btn btn-gray-2 | border
            border-2 border-dark | lh-sm | py-4"
            :class="{ 'bg-warning': false, 'btn-shadow': false }"
          >
            送出貼文
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
