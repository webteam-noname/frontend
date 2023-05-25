<template>
  <div class="header">
    <img src="./assets/images/logo.png" class="logo" />
    <div class="search">
      <div class="input-group">
        <span class="input-group-text">
          <svg
            aria-label="검색"
            class="x1lliihq x1n2onr6"
            color="rgb(142, 142, 142)"
            fill="rgb(142, 142, 142)"
            height="16"
            role="img"
            viewBox="0 0 24 24"
            width="16"
          >
            <title>검색</title>
            <path
              d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            ></path>
            <line
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              x1="16.511"
              x2="22"
              y1="16.511"
              y2="22"
            ></line>
          </svg>
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="검색"
          aria-label="serarch"
          aria-describedby="basic-addon1"
        />
      </div>
    </div>
  </div>

  <div class="footer">
    <ul class="footer-button-plus">
      <li>
        <svg
          aria-label="홈"
          class="_ab6-"
          color="rgb(0, 0, 0)"
          fill="rgb(0, 0, 0)"
          height="24"
          role="img"
          viewBox="0 0 24 24"
          width="24"
        >
          <path
            d="M22 23h-6.001a1 1 0 0 1-1-1v-5.455a2.997 2.997 0 1 0-5.993 0V22a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V11.543a1.002 1.002 0 0 1 .31-.724l10-9.543a1.001 1.001 0 0 1 1.38 0l10 9.543a1.002 1.002 0 0 1 .31.724V22a1 1 0 0 1-1 1Z"
          ></path>
        </svg>
      </li>
      <li>
        <input
          @change="upload"
          multiple
          accept="image/*"
          type="file"
          id="file"
          class="inputFile"
        />
        <label for="file" class="input-plus"
          ><svg
            aria-label="새로운 게시물"
            class="_ab6-"
            color="rgb(0, 0, 0)"
            fill="rgb(0, 0, 0)"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            ></path>
            <line
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              x1="6.545"
              x2="17.455"
              y1="12.001"
              y2="12.001"
            ></line>
            <line
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              x1="12.003"
              x2="12.003"
              y1="6.545"
              y2="17.455"
            ></line></svg
        ></label>
      </li>
      <li>
        <img
          src="./assets/images/profile.jpg"
          alt="mdo"
          width="32"
          height="32"
          class="rounded-circle"
        />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
ul {
  padding: 5px;
  list-style-type: none;
}
.header {
  width: 100%;
  height: 60px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
  overflow: hidden;
  border-bottom: 1px solid #efefef;
  margin-bottom: 8px;
}
.logo {
  height: 29px;
  margin: auto;
  display: block;
  position: absolute;
  left: 10px;
  top: 15px;
}
.search {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
}
.footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
  border-top: 1px solid #efefef;
  margin-top: 8px;
}
.footer-button-plus {
  width: 100%;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
  /* font-size: 0; */
  text-align: center;
}
.footer-button-plus li {
  display: inline-block;
  width: 33.33%;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputFile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
</style>
