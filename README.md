# vue-cli-MeUmy 项目介绍
------------------------------------------------------------------------------------------------------
### 项目创建的目的

> * 用于收集汇总MeUmy的二创视频，为各位辛苦的创作者引流。
> * ~~当然我们本身就是很牛逼的一个二创。~~

### 一些注意事项
> * __请不要把任何没有经过测试的代码直接合并到main分支__
> * __开发请单独拉新分支，整体项目测试请合并SIT分支__
> * __关于SIT分支的作用和使用规范未来会继续更新__

### 依赖下载及项目启动

``` bash
# git clone 过慢处理方式
> git clone https://gitclone.com/github.com/sunjy1997/vue-cli-MeUmy.git

# 使用gitclone.com路径会导致push路径也是gitclone.com,处理方式如下
  # git 删除远程地址
> git remote rm origin

  # git 更换远程地址
> git remote add origin https://github.com/sunjy1997/vue-cli-MeUmy.git

  # 把当前分支与远程分支进行关联(branchname要改成你的当前分支名称)
> git push --set-upstream origin branchname

# 如果报错OpenSSL SSL_connect: SSL_ERROR_SYSCALL in connection to github.com:443
> git config --global --unset http.proxy

# 下载依赖，在package.json中查看
> npm install

# 项目启动，默认地址： localhost:8080
> npm run dev

# 测试手机端时，手机连接本地项目的方法
> 在package.json中，script => dev ，末尾添加 -- host 你的本地地址（查看方式：ipconfig）
```

### 项目结构

###### 所有页面元素相关的文件都在src目录下

    --src
      ---assets   （图片和公共方法）
        | img   |（图片，原则上图片要小于100kb）
        | utils |（公共方法）
      ---components
        | blocks |（组件中引用的小组件）
      ---font （字体）
      ---router （路由）
      ---views （页面）
        | 页面名称 |
          - components （页面组件）