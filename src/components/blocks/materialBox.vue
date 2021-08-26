<template>
  <div class="material_body" :class="{ phone_material_body: isPhone }">
    <div class="material_text" :class="[{ phone_material_text: isPhone }]">
      <div class="title_text">
        <span
          class="title_font"
          :class="{ phone_title_font: isPhone }"
          @click="jumpToMaterial(matPath)"
        >
          {{ matTitle }}
        </span>
      </div>
      <div class="auth_text" :class="{ phone_auth_text: isPhone }">
        <span>
          创作者：
          <span class="name" @click.stop="jumpToAuthPage(authUid)">
            {{ matAuth }}
          </span>
        </span>
        <span class="time">{{ matTime }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "materialBox",
  props: ["info", "isPhone"],
  data() {
    return {
      // 素材标题
      matTitle: "\xa0\xa0\xa0\xa0" + this.info.title,
      matAuth: this.info.auth, // 素材作者
      matTime: this.info.time, // 素材上传时间
      authUid: this.info.uid, // 作者地址
      matPath: this.info.workPath, // 素材地址
    };
  },
  methods: {
    // 跳转创作者页面
    jumpToAuthPage() {
      this.$router.push({
        path: `authorInfoPage/${this.authUid}`,
      });
    },
    // 跳转素材页面
    jumpToMaterial(path) {
      window.open(path);
    },
  },
};
</script>

<style scoped>
.material_body {
  display: flex;
  background: white;
  overflow: auto;
  width: 100%;
  height: 8rem;
  border-radius: 0.6rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  box-shadow: #838383 0px 2px 3px 1px;
}
.phone_material_body {
  height: 12rem;
  box-shadow: #adadad 0px 2px 3px 1px;
}
.material_body:hover {
  cursor: default;
}
.material_img {
  width: 40%;
  height: 100%;
  filter: blur(0.5rem);
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -khtml-user-select: none;
  user-select: none;
}
.material_img:hover {
  filter: blur(0.1rem);
}
.material_text {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0.7rem;
}
.phone_material_text {
  padding: 1rem;
}
.title_text {
  width: 100%;
  height: 48%;
}
.title_font {
  font-size: 1.2rem;
  overflow: hidden;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
.phone_title_font {
  font-size: 2.1rem;
}
.title_font:hover {
  cursor: pointer;
  color: #ff3b41;
}
.auth_text {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  font-size: 0.9rem;
  width: 100%;
  height: 52%;
}
.phone_auth_text {
  justify-content: space-evenly;
  font-size: 1.7rem;
}
.name {
  color: #b072f2;
}
.name:hover {
  cursor: pointer;
  color: #ff3b41;
}
.time {
  padding-top: 0.3rem;
}
</style>
