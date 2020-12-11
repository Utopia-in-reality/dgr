<template>
        <div class="frends">
                <div class="head">
                        <router-link to="/quanguo">
                                <img :src="Img_logo" class="logo" />
                        </router-link>
                        <span class="lxr">联系人</span>
                        <span
                                class="icon iconfont icon-tianjiahaoyou tj"
                        ></span>
                </div>
                <div class="search">
                        <button class="icon iconfont icon-sousuo ss">
                                搜索
                        </button>
                </div>
                <div class="body">
                        <div class="maybe">
                                <div class="mba">
                                        <span
                                                class="inco iconfont icon-iconfontjiantou5 knrs"
                                        ></span>
                                        <span>可能认识的人</span>
                                </div>
                                <div class="mbb">
                                        <img
                                                class="tx"
                                                :src="Img_tx"
                                                alt="头像"
                                        />
                                        <div class="word">
                                                <span class="word1"
                                                        >安吉拉巴巴</span
                                                >
                                                <span class="word2"
                                                        >15位共同好友</span
                                                >
                                        </div>
                                        <button class="tj2">添加</button>
                                        <span
                                                class="icon iconfont icon-chacha2 gb"
                                        ></span>
                                </div>
                                <div class="bgc1"></div>
                                <div class="btn">
                                        <div class="xpy">
                                                <button class="xpy1">
                                                        新朋友
                                                </button>
                                                <span
                                                        class="icon iconfont icon-iconfontjiantou5 xpy2"
                                                ></span>
                                        </div>
                                        <div class="qtz">
                                                <button class="qtz1">
                                                        群通知
                                                </button>
                                                <span
                                                        class="icon iconfont icon-iconfontjiantou5 qtz2"
                                                ></span>
                                        </div>
                                </div>
                                <div class="bgc2"></div>
                                <div class="list">
                                        <div class="list-title">
                                                <div class="content">
                                                        <!-- <button class="bar1"  @click="contentclick">好友</button>
                                                        <button class="bar1"  @click="contentclick">分组</button>
                                                        <button class="bar1"  @click="contentclick">群聊</button>
                                                        <button class="bar1"  @click="contentclick">设备</button>
                                                        <button class="bar1"  @click="contentclick">通讯</button> -->
                                                        <button
                                                                class="bar1"
                                                                 v-for="item in button_data"
                                                                :key="item.name"
                                                               :class="{isActive:index===s1}"   
	                                                         @click="setmun(index)"              
                                                        >
                                                                {{ item.name }}
                                                        </button>
                                                </div>
                                        </div>
                                        <div class="list-body"></div>
                                </div>
                        </div>
                </div>
        </div>
</template>
<script>
export default {
        data() {
                return {
                        s1:0,
                        button_data: [
                                {
                                        name: "好友",
                                },
                                {
                                        name: "分组",
                                },
                                {
                                        name: "群聊",
                                },
                                {
                                        name: "设备",
                                },
                                {
                                        name: "通讯",
                                },
                        ],
                        Img_logo: require("@/assets/打工人logo.png"),
                        Img_tx: require("@/assets/tx.png"),
                };
        },
         methods: {
          setmun(index){
				this.s1=index;
			}

  },
  }

</script>

<style lang="less" scoped>

// .bgcolor {
//         color: rgb(99, 200, 247);
//         background-color: #e6f3f7;
// }
.isActive{
		    background-color: #ff7e00;
		    color: #fff;
		}
.list {
        width: 100%;
}
.content {
        height: 50px;
        width: 375px;
        display: flex;
        overflow: hidden;
        overflow-x: scroll;
        align-items: center;
}
.bar1 {
        border-radius: 30px;
        flex: 0 0 85px;
        border: 0;
        // color: gray;
        // background-color: #fff;
        // width: 100px;
        height: 30px;
        font-size: 15px;
}
.list-title {
        height: 50px;
        line-height: 50px;
        width: 100%;
}
.qtz2 {
        height: 50px;
        line-height: 50px;
        right: 20px;
        position: absolute;
        color: grey;
}
.qtz1 {
        height: 50px;
        line-height: 4px;
        margin-left: 15px;
        font-size: 15px;
        background: none;
        border: none;
}
.qtz {
        position: relative;
        height: 50px;
        width: 375px;
}
.xpy2 {
        height: 50px;
        line-height: 50px;
        right: 20px;
        position: absolute;
        color: grey;
}
.xpy1 {
        height: 40px;
        line-height: 4px;
        margin-left: 15px;
        font-size: 15px;
        background: none;
        border: none;
}
.xpy {
        position: relative;
        height: 50px;
        width: 375px;
}
.btn {
        // margin-top: 20px;
        width: 100%;
        height: 100px;
}
.bgc1 {
        width: 100%;
        height: 10px;
        background-color: rgb(247, 246, 246);
}
.bgc2 {
        width: 100%;
        height: 10px;
        background-color: rgb(247, 246, 246);
}
.gb {
        margin-right: 15px;
        font-size: 15px;
        color: grey;
}
.tj2 {
        margin-right: 15px;
        width: 55px;
        height: 25px;
        font-size: 10px;
        padding: 2.5px;
        color: black;
        border: 0;
        border-radius: 15px;
}
.word2 {
        color: grey;
}
.word1 {
        color: black;
        font-size: 15px;
        // font-weight: bold;
}
.word {
        margin-left: 10px;
        display: flex;
        flex-direction: column; //改变主轴方向
        width: 55%;
}
.tx {
        margin-left: 15px;
        border-radius: 100%;
        width: 45px;
        height: 45px;
}
.mbb {
        display: flex;
        align-items: center;
        width: 100%;
}
.knrs {
        position: relative;
        left: 90px;
}
.mba {
        display: flex;
        align-content: center;
        height: 25px;
        width: 100%;
}
.maybe {
        // color: grey;
        width: 100%;
        // height: 100px;
        position: absolute;
}
.body {
        background-color: balck;
}
.ss {
        font-size: 15px;
        color: grey;
        border: 0;
        border-radius: 10px;
        width: 90%;
        height: 30px;
        line-height: 30px;
}
.search {
        // margin-bottom: 5px;
        display: flex;
        justify-content: center;
        height: 40px;
        width: 100%;
}
.tj {
        display: flex;
        justify-content: center;
        width: 15%;
        color: goldenrod;
        font-size: 20px;
}
.lxr {
        display: flex;
        justify-content: center;
        width: 63%;
        color: goldenrod;
        font-size: 20px;
        // font-weight: bolder;
}
.logo {
        border-radius: 100%;
        margin-top: 5px;
        margin-left: 5px;
        left: 15px;
        width: 40px;
        height: 40px;
}
.head {
        margin-bottom: 10px;
        background-color: #000;
        height: 50px;
        line-height: 50px;
        width: 100%;
        display: flex;
        justify-content: space-between;
}
</style>