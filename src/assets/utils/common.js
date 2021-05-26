export default {
  install(Vue) {
    // 时间格式化
    Vue.prototype.formatTime = function (date) {
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
          type: params.type, // 作品类型
          title: '这里是标题', // 作品标题
          text: '这里是内容', // 也许会有的作品内容
          auth: '这里是作者', // 作者名
          time: '这里是时间', // 作品上传时间
          uid: params.uid, // 作者uid
          img: require('../../assets/img/videoImg.png'), // 图片地址
          workPath: '' // 作品id（需要根据id进行页面跳转）
        }

        // 标题
        if (params.title && params.title !== "") {
          // 正文空两格，语文老师教我的
          infoData.title = '\xa0\xa0\xa0\xa0' + params.title;
        } else if (params.text && params.text !== '') {
          // 文章没有标题则展示正文内容；绘图展示正文内容
          infoData.text = '\xa0\xa0\xa0\xa0' + params.text;
        }

        // 作者名
        // 处理作者名，若无作者名数据，使用默认值
        if (params.auth && params.auth !== '') {
          infoData.auth = params.auth;
          // 对作者名长度做出限制
          if (auth.length > 10) {
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
        if (params.type === '3') {
          infoData.img = '';
        } else {
          infoData.img = params.img;
        }

        // 跳转链接
        if (params.id && params.id !== '') {
          // 根据不同的作品类型拼接跳转链接
          switch (params.type) {
            // 视频根据av号配置链接跳转
            case '0':
              infoData.workPath =
                'https://www.bilibili.com/video/av' + params.id;
              break;
            case '1':
              // 绘图可能会放在动态中或者专栏中，两种情况分别处理
              // 具体处理方式等接口完成
              if (1) {
                infoData.workPath =
                  'https://t.bilibili.com/' + params.id;
              } else if (2) {
                infoData.workPath =
                  'https://www.bilibili.com/read/cv' + params.id;
              }
              break;
            case '2':
              // 文章有可能会放在动态或者专栏中，两种情况分别处理
              // 具体处理方式等接口完成
              if (1) {
                infoData.workPath =
                  'https://t.bilibili.com/' + params.id;
              } else if (2) {
                infoData.workPath =
                  'https://www.bilibili.com/read/cv' + params.id;
              }
              break;
            case '3':
              // 素材是不是也会分动态和专栏啊。。。
              // 想了想这玩意链接是管理端配的，好像无所谓
              infoData.workPath = params.id;
              break;
            default:
              break;
          }
        }

        return infoData;
      }
  }
}
