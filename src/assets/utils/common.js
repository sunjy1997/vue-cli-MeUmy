export default {
  install(Vue) {
    // 接口获取时间
    Vue.prototype.getWorksInfo = function (params) {
      var myRequest = new Request('http://parallel.meumy.club/api');
      try {
        return fetch(
          myRequest,{
          method:"POST",
          mode: 'cors',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(params)
        }).then(response => response.json()).then(json => {
          if (json.MuHeader.msg !== 'success') {
            console.log(json.MuHeader)
            return {};
          } else {
            return Promise.resolve(json.MuBody.worksList);
          }
        })
      } catch(e) {
        console.log(e);
      }
    },
    // 接口获取作品总数
    Vue.prototype.getWorksNum = function (params) {
      var myRequest = new Request('http://parallel.meumy.club/api');
      try {
        return fetch(
          myRequest,{
          method:"POST",
          mode: 'cors',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(params)
        }).then(response => response.json()).then(json => {
          if (json.MuHeader.msg !== 'success') {
            console.log(json.MuHeader)
            return {};
          } else {
            // console.log(json.MuBody)
            return Promise.resolve(json.MuBody.worksNum);
          }
        })
      } catch(e) {
        console.log(e);
      }
    },
    // 展示框信息格式化
    Vue.prototype.formatInfo = function (params) {
      /*
        根据传入的数据type进行数据处理
        0：视频
        1：绘图
        2：文章
        3：素材
      */

      let infoData = {
        type: params.workType, // 作品类型
        title: '这里是标题', // 作品标题
        text: '这里是内容', // 也许会有的作品内容
        auth: '这里是作者', // 作者名
        time: '这里是时间', // 作品上传时间
        uid: params.authUid, // 作者uid
        img: require('../../assets/img/videoImg.png'), // 图片地址
        workPath: '' // 作品id（需要根据id进行页面跳转）
      }

      // 标题
      if (params.workTitle && params.workTitle !== "") {
        // 正文空两格，语文老师教我的
        infoData.title = params.workTitle;
      } else if (params.workText && params.workText !== '') {
        // 文章没有标题则展示正文内容；绘图展示正文内容
        infoData.title = '\xa0\xa0\xa0\xa0' + params.workText;
      }

      // 作者名
      // 处理作者名，若无作者名数据，使用默认值
      if (params.authName && params.authName !== '') {
        infoData.auth = params.authName;
        // 对作者名长度做出限制
        if (infoData.auth.length > 10) {
          infoData.auth = infoData.auth.substring(0, 8) + '...';
        }
      }

      // 作品上传时间
      // 处理上传时间，若无上传时间数据，使用默认值
      if (params.time && params.time !== '') {
        // 对时间进行格式化
        infoData.time = this.formatTime(params.time);
      }

      // 作品图片，素材不展示图片，文章有可能不展示
      if (params.workType === '3') {
        infoData.img = '';
      } else {
        infoData.img = params.imgAddr;
      }

      // 跳转链接
      if (
        (params.bvid || params.dynamic_id || params.cvid) &&
        (params.bvid !== '' || params.cvid !== '' || params.dynamic_id !== '')
      ) {
        // 根据bvid、cvid和dynamic_id判断，有哪个就拼哪个
        // 甚至不需要判断作品类型了，有点爽
        if (params.bvid && params.bvid !== '') {
          infoData.workPath = params.bvid;
        } else if (params.cvid && params.cvid !== '') {
          infoData.workPath = params.cvid;
        } else if (params.dynamic_id && params.dynamic_id !== '') {
          infoData.workPath = params.dynamic_id;
        }
      }
      return infoData;
    },
    // 时间格式化
    Vue.prototype.formatTime = function (date) {
        // alert(typeof(1596101962))
        if (typeof (date) === 'number') {
          if (date) {
            let val = new Date(date * 1000) // 时间戳为秒：10位数
            //let date = new Date(value)	// 时间戳为毫秒：13位数
            let year = val.getFullYear()
            let month = val.getMonth() + 1 < 10 ? `0${val.getMonth() + 1}` : val.getMonth() + 1
            let day = val.getDate() < 10 ? `0${val.getDate()}` : val.getDate()
            let hour = val.getHours() < 10 ? `0${val.getHours()}` : val.getHours()
            let minute = val.getMinutes() < 10 ? `0${val.getMinutes()}` : val.getMinutes()
            let second = val.getSeconds() < 10 ? `0${val.getSeconds()}` : val.getSeconds()
            date = `${year}-${month}-${day} ${hour}:${minute}:${second}`
          } else {
            return ''
          }
        }
        if (date === '') {
          return;
        }
        let messageDate = new Date(date.replace(/-/g, '/'));
        let nowDate = new Date();
        let leftTime = nowDate.getTime() - messageDate.getTime();
        let year = messageDate.getFullYear();
        let month = messageDate.getMonth() + 1;
        let day = messageDate.getDate();
        let hour = messageDate.getHours();
        let min = messageDate.getMinutes();
        if (leftTime < 3600000) {
          let timeDes = Math.floor(leftTime / 60000);
          return timeDes + '分钟前';
        } else if (leftTime >= 3600000 && leftTime < 86400000) {
          let timeDes = Math.floor(leftTime / 3600000);
          return timeDes + '小时前';
        } else {
          if (min < 10) {
            min = '0' + min;
          }
          if (month < 10) {
            month = '0' + month;
          }
          if (day < 10) {
            day = '0' + day;
          }
          return `${year}-${month}-${day} ${hour}:${min}`;
        }
    },
    // 判断平年闰年
    Vue.prototype.isLeapYear = function (year) {
      if (
        (Number(year) % 4 == 0 && Number(year) % 100 != 0) ||
        (Number(year) % 400 == 0)
      ) {
        return true;
      }
      return false;
    }
  }
}
