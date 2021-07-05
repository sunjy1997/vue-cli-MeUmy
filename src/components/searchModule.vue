<template>
  <!--
    分页组件导入方法

    <searchModule @on-search='search' :isPhone='isPhone'></searchModule>

    data() {
      return {
        isPhone: false
      };
    },
    search(param) {
      console.log(param)
    }

  根据需要可以在组件内通过props传入参数进行修改
  例如，不需要根据标题或者作者搜索的页面

  霜飔慕雪  ————2021/6/17
   -->
  <div class="all">
    <div class="search_body" :class="{phone_search_body: isPhone}">
      <!-- 下拉框 -->
      <div
        class="pull_box"
        :class="{phone_pull_box: isPhone}"
        @click="clickMenuBtn(0)">
        <span> {{ searchTypeList[placeNum].name }} </span>
        <img
          src="../assets/img/pull.png"
          class="pull_img"
          :class="{phone_pull_img: isPhone}"
        >
      </div>
      <!-- 输入框 -->
      <!-- 标题、时间 -->
      <div
        class="search_box"
        :class="{phone_search_box: isPhone}"
        v-if="placeNum !== '2'"
      >
        <input
          type="text"
          class="input_box"
          :class="{phone_input_box: isPhone}"
          v-model="search"
          :placeholder="placeholderList[placeNum]"
        >
        <!-- 搜索按钮 -->
        <div class='right_btn' @click="searchWorks(search)">
          <img
            src="../assets/img/line.png"
            class="search_img line"
            :class="{phone_search_img: isPhone}"
          >
          <img
            src="../assets/img/search.png"
            class="search_img"
            :class="{phone_search_img: isPhone}"
          >
        </div>
      </div>
      <div
        class="right_btn_date"
        :class="{phone_right_btn_date: isPhone}"
        v-else
      >
        <div
          class="pull_box pull_box_date"
          :class="{phone_pull_box_date: isPhone}"
          @click="clickMenuBtn(1)"
        >
          <span> {{ year }} </span>
          <img
            src="../assets/img/pull.png"
            class="pull_img_date"
            :class="{phone_pull_img_date: isPhone}"
          >
        </div>
        <div
          class="pull_box pull_box_date"
          :class="{phone_pull_box_date: isPhone}"
          @click="clickMenuBtn(2)"
        >
          <span> {{ month }} </span>
          <img
            src="../assets/img/pull.png"
            class="pull_img_date"
            :class="{phone_pull_img_date: isPhone}"
          >
        </div>
        <div
          class="pull_box pull_box_date"
          :class="{phone_pull_box_date: isPhone}"
          @click="clickMenuBtn(3)"
        >
          <span> {{ day }} </span>
          <img
            src="../assets/img/pull.png"
            class="pull_img_date"
            :class="{phone_pull_img_date: isPhone}"
          >
        </div>
        <div
          class="search_btn"
          :class="{phone_search_btn: isPhone}"
          @click="searchDate()"
        >
          搜索
        </div>
        <transition
          enter-active-class="animate__animated animate__fadeIn"
          leave-active-class="animate__animated animate__fadeOut">
          <div
            class="alert_text"
            :class="{phone_alert_text: isPhone}"
            v-show="showAlertText"
          >
            {{ alertText }}
          </div>
        </transition>
      </div>
    </div>
    <div class="menu_box" :class="{phone_menu_box: isPhone}">
      <!-- 搜索方式选择框 -->
      <transition
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut">
        <div
          class="menu_body"
          :class="{phone_menu_body: isPhone}"
          v-show="showMenu">
          <!-- 遍历展示子菜单按钮，包括标题、作者、日期 -->
          <div
            v-for="item in searchTypeList"
            :key="item.id"
            @click="switchsearch(item.id)"
            class="list_font"
            :class="{phone_list_font: isPhone}"
          >
            {{ item.name }}
          </div>
        </div>
      </transition>
      <!-- 年份框 -->
      <transition
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut">
        <div
          class="year_body"
          :class="{phone_year_body: isPhone}"
          v-show="showYear">
          <!-- 遍历展示子菜单按钮，包括标题、作者、日期 -->
          <div
            v-for="item in yearList"
            :key="item.id"
            @click="switchdate(0, item)"
            class="list_font"
            :class="{phone_list_font: isPhone}"
          >
            {{ item }}
          </div>
        </div>
      </transition>
      <!-- 月份框 -->
      <transition
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut">
        <div
          class="year_body month_body"
          :class="{phone_year_body: isPhone, phone_month_body: isPhone}"
          v-show="showMonth">
          <!-- 遍历展示子菜单按钮，包括标题、作者、日期 -->
          <div
            v-for="item in 12"
            :key="item.id"
            @click="switchdate(1, item)"
            class="list_font"
            :class="{phone_list_font: isPhone}"
          >
            {{ item }}
          </div>
        </div>
      </transition>
      <!-- 日期框 -->
      <transition
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut">
        <div
          class="year_body day_body"
          :class="{phone_year_body: isPhone, phone_day_body: isPhone}"
          v-show="showDay">
          <!-- 遍历展示子菜单按钮，包括标题、作者、日期 -->
          <div
            v-for="item in dayList"
            :key="item.id"
            @click="switchdate(2, item)"
            class="list_font"
            :class="{phone_list_font: isPhone}"
          >
            {{ item }}
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'searchModule',
  props: {
    isPhone: {
      // 是否是移动端进入页面
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      searchTypeList: [
        {
          id: '0',
          name: '标题'
        },
        {
          id: '1',
          name: '作者'
        },
        {
          id: '2',
          name: '时间'
        }
      ], // 弹窗内容
      placeholderList: [
        '按标题搜索：',
        '按作者搜索：'
      ], // 默认展示内容
      placeNum: '0', // 控制上面两个展示内容
      search: '', // 输入的搜索内容
      showMenu: false, // 是否展示子菜单
      clickMenu: false, // 控制点击监听让展示框消失
      year: '年份',
      yearList: [],
      showYear: false,
      clickYear: false,
      month: '月份',
      showMonth: false,
      clickMonth: false,
      day: '日期',
      dayList: '',
      showDay: false,
      clickDay: false,
      alertText: '咩啊，这不好搜啊，请缩小点范围吧，斯米马三~~',
      showAlertText: false
    }
  },
  mounted() {
    // 监听body上的点击
    document.querySelector("body").addEventListener("click", this.closeMenu);
  },
  beforeDestroy() {
    // 移除监听
    document.querySelector("body").removeEventListener("click", this.closeMenu);
  },
  methods: {
    // 点击别处时隐藏目录
    closeMenu() {
      if (this.showMenu === true && this.clickMenu === true) {
        this.showMenu = this.clickMenu = false;
      } else if (this.showYear === true && this.clickYear === true) {
        this.showYear = this.clickYear = false;
      } else if (this.showMonth === true && this.clickMonth === true) {
        this.showMonth = this.clickMonth = false;
      } else if (this.showDay === true && this.clickDay === true) {
        this.showDay = this.clickDay = false;
      }
    },
    // 延时改变clickMenu的值实现点击别处让弹窗消失
    clickMenuBtn(i) {
      switch(i) {
        case 0:
          if ( this.showMenu === false ) {
            this.showMenu = true;
            setTimeout(() => {
              this.clickMenu = true;
            }, 30)
          }
          break;
        case 1:
          if ( this.showYear === false ) {
            this.showYear = true;
            setTimeout(() => {
              this.clickYear = true;
            }, 30)
          }
          break;
        case 2:
          if ( this.showMonth === false ) {
            this.showMonth = true;
            setTimeout(() => {
              this.clickMonth = true;
            }, 30)
          }
          break;
        case 3:
          if ( this.showDay === false ) {
            this.showDay = true;
            setTimeout(() => {
              this.clickDay = true;
            }, 30)
          }
          break;
        default:
          break;
      }
    },
    // 切换搜索方式
    switchsearch(i) {
      this.placeNum = i;
      // 若选择了按日期搜索，生成年份数组
      if (i === '2') {
        // 获取年份
        let date = Number(new Date().getFullYear());
        let length = date - 2019;
        for (let j = 0; j <= length; j++) {
          this.yearList.push(2019 + j);
        }
      } else {
        this.yearList = [];
      }
    },
    // 切换时间
    switchdate(i, data) {
      switch(i) {
        case 0:
          this.year = String(data);
          let leap = this.isLeapYear(Number(this.year));
          if (leap === true && String(this.month) === '2') {
            this.dayList = 29;
          } else if (leap === false && String(this.month) === '2') {
            this.dayList = 28;
          }
          break;
        case 1:
          this.month = String(data);
          // 对应月份的天数
          switch(data) {
            case 1: case 3: case 5: case 7: case 8: case 10: case 12:
              this.dayList = 31;
              break;
            case 2:
              if ( this.year !== '年份' ) {
                let leap = this.isLeapYear(Number(this.year));
                if (leap === true) {
                  this.dayList = 29;
                } else {
                  this.dayList = 28;
                }
              } else {
                this.dayList = 29;
              }
              break;
            default:
              this.dayList = 30;
              break;
          }
          break;
        case 2:
          this.day = String(data);
          break;
        default:
          break;
      }
    },
    // 搜索
    searchWorks(data) {
      // 如果没有输入内容，则不操作
      if (data === '') {
        return;
      }
      // 将搜索类型和关键字传递到父组件
      // 0：标题；1：作者
      let param = {
        type: this.placeNum,
        word: data
      }
      this.$emit('on-search', param);
      // 点击搜索后清空搜索内容
      this.search = '';
    },
    // 搜索时间
    searchDate() {
      let sYear;
      let sMonth;
      let sDay;
      if ( this.year === '年份' ) {
        sYear = '';
      } else {
        sYear = this.year;
      }
      if ( this.month === '月份' ) {
        sMonth = '';
      } else {
        sMonth = this.month;
      }
      if ( this.day === '日期' ) {
        sDay = '';
      } else {
        sDay = this.day;
      }

      if ( sYear === '' && sMonth === '' && sDay === '' ) {
        // 如果三个参数都为空，不做操作
        return;
      } else if ( sYear !== '' && sMonth === '' && sDay === '' ) {
        // 如果仅输入年份，则可以搜索
        // 将搜索类型和关键字传递到父组件
        // 2：时间
        let time = sYear + '-';
        let param = {
          type: '2',
          word: time
        }
        this.$emit('on-search', param);
        // 点击搜索后清空搜索内容
        this.year = '年份';
      } else if (
        ( sYear === '' && sMonth !== '' && sDay === '' ) ||
        ( sYear === '' && sMonth === '' && sDay !== '' ) ||
        ( sYear !== '' && sMonth === '' && sDay !== '' )
      ) {
        // 如果仅输入月份或者日期，或只输入年份日期，显示提示字样
        this.showAlertText = true;
        setTimeout(() => {
          this.showAlertText = false;
        }, 3000);
      } else {
        // 如果输入年、月；月、日；年、月、日，则正常搜索
        // 将搜索类型和关键字传递到父组件
        // 2：时间
        let time = sYear + '-' + sMonth + '-' + sDay;
        let param = {
          type: '2',
          work: time
        }
        this.$emit('on-search', param);
        // 点击搜索后清空搜索内容
        this.year = '年份';
        this.month = '月份';
        this.day = '日期';
        this.dayList = [];
      }
    }
  }
}
</script>

<style scoped>
  .all {
    font-family: cjkFonts;
    display: flex;
    flex-direction: column;
    align-items: center;
    -webkit-touch-callout:none;  /*系统默认菜单被禁用*/
    -webkit-user-select:none; /*webkit浏览器*/
    -khtml-user-select:none; /*早期浏览器*/
    -moz-user-select:none; /*火狐*/
    -ms-user-select:none; /*IE10*/
    user-select:none;
  }
  img {
    pointer-events: none;
  }
  .search_body {
    display: flex;
    width: 53vw;
    height: 4vw;
    cursor: default;
  }
  .phone_search_body {
    width: 90vw;
    height: 8vw;
  }
  .pull_box {
    font-family: cjkFonts;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #8B8B8B;
    width: 10vw;
    border: 2px solid #757575;
    border-radius: 5rem;
    margin-right: 3vw;
    font-size: 1.3rem;
  }
  .phone_pull_box {
    width: 20vw;
    font-size: 2.5rem;
  }
  .pull_box_date {
    font-size: 1.2rem;
    margin-right: 1vw;
  }
  .phone_pull_box_date {
    width: 17vw;
    font-size: 2.1rem;
  }
  .pull_img {
    width: 1rem;
  }
  .phone_pull_img {
    width: 1.9rem
  }
  .pull_img_date {
    width: 0.7rem;
  }
  .phone_pull_img_date {
    width: 1.2rem;
  }
  .menu_box {
    display: flex;
    width: 53vw;
  }
  .phone_menu_box {
    width: 90vw;
  }
  .menu_body {
    position: absolute;
    overflow: auto;
    background: rgba(245, 245, 245, 0.5);
    width: 10vw;
    border-radius: 0.5rem;
    z-index: 1;
    font-size: 1.3rem;
    margin-left: 0.2vw;
  }
  .phone_menu_body {
    width: 20vw;
    font-size: 2.4rem;
    margin-left: 0.2vw;
  }
  .list_font {
    font-family: cjkFonts;
    background: rgba(245, 245, 245, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
  }
  .list_font:hover {
    background: rgba( 222, 222, 222, 0.8);
    cursor: pointer;
    border-radius: 0.5rem;
  }
  .phone_list_font {
    height: 4rem;
  }
  .search_box {
    display: flex;
    width: 39vw;
    border: 2px solid #757575;
    border-radius: 5rem;
  }
  .phone_search_box {
    width: 65vw;
  }
  .input_box {
    font-family: cjkFonts;
    width: 85%;
    padding-left: 1rem;
    border: none;
    border-radius: 5rem;
    font-size: 1.2rem;
  }
  .input_box:focus {
    outline: none;
  }
  .phone_input_box {
    font-size: 2.5rem;
  }
  .right_btn {
    display: flex;
    color: #8B8B8B;
  }
  .search_img {
    align-self: center;
    width: 2.6vw;
    height: 2.6vw;
  }
  .phone_search_img {
    width: 5vw;
    height: 5vw;
  }
  .line {
    width: 0.8rem;
  }
  .right_btn_date {
    display: flex;
    width: 39vw;
  }
  .phone_right_btn_date {
    width: 65.5vw;
  }
  .search_btn {
    font-family: cjkFonts;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #8B8B8B;
    width: 8vw;
    border: 2px solid #757575;
    border-radius: 5rem;
    font-size: 1.3rem;
  }
  .search_btn:hover {
    background: #F0F0EF;
    color: #646464;
  }
  .phone_search_btn {
    width: 12vw;
    font-size: 2.2rem;
  }
  .year_body {
    position: absolute;
    overflow: auto;
    background: rgba(245, 245, 245, 0.5);
    width: 10vw;
    border-radius: 0.5rem;
    z-index: 1;
    font-size: 1.3rem;
    left: 36vw;
    max-height: 15rem;
  }
  .phone_year_body {
    width: 17vw;
    font-size: 2.4rem;
    left: 28.5vw;
  }
  .month_body {
    left: 46.4vw;
  }
  .phone_month_body {
    left: 46.2vw;
  }
  .month_body::-webkit-scrollbar {
     width: 0 !important;
  }
  .month_body::-webkit-scrollbar {
     width: 0 !important;height: 0;
   }
  .day_body {
    left: 56.7vw;
  }
  .phone_day_body {
    left: 63.9vw;
  }
  .day_body::-webkit-scrollbar {
     width: 0 !important;
  }
  .day_body::-webkit-scrollbar {
     width: 0 !important;height: 0;
   }
  .alert_text {
    position: absolute;
    color: #ff565b;
    font-size: 1.3rem;
    margin-top: 4.4vw;
  }
  .phone_alert_text {
    font-size: 2.4rem;
    margin-top: 8.4vw;
    right: 0;
    margin-right: 6.5vw;
  }
</style>