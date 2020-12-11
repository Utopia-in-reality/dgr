<template>
        <div class="head">
                <div class="first">
                        <div class="dgrtp">
                                <router-link :to="{ path: '/' }" class="link">
                                        <img
                                                class="logo"
                                                :src="Img_logo"
                                                alt="logo"
                                        />
                                </router-link>
                                <span class="nihao" @click="hello"
                                        >你好,欢迎来到打工人!</span
                                >
                        </div>
                        <div class="lianjie">
                                <router-link
                                        class="lianjie-1"
                                        to="/information"
                                        >个人信息</router-link
                                >
                                <a> | </a>
                                <router-link
                                        class="lianjie-1"
                                        to="/404"
                                        >瞅你咋地</router-link
                                >
                        </div>
                </div>
                <div class="body">
                        <div class="lunbo">
                                <div class="block">
                                        <el-carousel
                                                trigger="click"
                                                height="100px"
                                                arrow="hover"
                                        >
                                                <el-carousel-item
                                                        v-for="item in list"
                                                        :key="item.id"
                                                >
                                                        <img
                                                                class="small"
                                                                :src="
                                                                        item.idView
                                                                "
                                                        />
                                                </el-carousel-item>
                                        </el-carousel>
                                </div>
                        </div>
                        <div class="daohang">
                                <div class="daohang_item">
                                        <router-link to="/frends">
                                                <span>
                                                        <el-button
                                                                class="anniu"
                                                                type="success"
                                                                icon="el-icon-user-solid"
                                                                circle
                                                        ></el-button>
                                                </span>
                                                <span>我的朋友</span>
                                        </router-link>
                                </div>
                                <div class="daohang_item">
                                        <router-link to="/tools"
                                                ><span>
                                                        <el-button
                                                                class="anniu"
                                                                type="success"
                                                                icon="el-icon-s-cooperation"
                                                                circle
                                                        ></el-button>
                                                </span>
                                                <span>打工工具</span>
                                        </router-link>
                                </div>
                                <div class="daohang_item">
                                        <router-link to="/schedule"
                                                ><span>
                                                        <el-button
                                                                class="anniu"
                                                                type="success"
                                                                icon="el-icon-date"
                                                                circle
                                                        ></el-button>
                                                </span>
                                                <span>打工日程</span>
                                        </router-link>
                                </div>
                                <div class="daohang_item">
                                        <router-link to="/location"
                                                ><span>
                                                        <el-button
                                                                class="anniu"
                                                                type="success"
                                                                icon="el-icon-location-outline"
                                                                circle
                                                        ></el-button>
                                                </span>
                                                <span>
                                                        打工位置</span
                                                >
                                        </router-link>
                                </div>
                        </div>
                </div>
                <Tuijian /> 
                <!-- 封装组件 -->
                <Footer />
                <div :class="flag">
                        <div class="box1">
                                <p>提示</p>
                                <p>欢迎来到打工人APP</p>
                                <div class="box2">
                                        <button class="btn1" @click="ssr">
                                                取消
                                        </button>
                                        <button class="btn2" @click="sp">
                                                确定
                                        </button>
                                </div>
                        </div>
                </div>
        </div>
</template>

<script>
import Tuijian from "@/components/tuijian.vue";
import Footer from "@/components/footer.vue";

export default {
       
        components: {
                Tuijian,
                Footer,
        },
        data() {
                return {
                        flag: "sue",
                        Img_logo: require("@/assets/打工人logo.png"),
                        list: [
                                {
                                        id: 0,
                                        idView: require("../assets/手机轮播背景图1.png"),
                                },
                                {
                                        id: 1,
                                        idView: require("../assets/手机轮播背景图2.png"),
                                },
                                {
                                        id: 2,
                                        idView: require("../assets/手机轮播背景图3.png"),
                                },
                                {
                                        id: 3,
                                        idView: require("../assets/手机轮播背景图4.png"),
                                },
                        ],
                };
        },
        methods: {
                hello() {
                        this.flag = "box";
                        console.log(11);
                },
                // 取消按钮
                ssr() {
                        this.flag = "box";
                },
                // 确认按钮
                sp() {
                        this.flag = "sue";
                },
                 location() {
                this.$router.replace("/location");
        },
        },
};
</script>


<style lang="less" scoped>
span{
        color:black;
}
// 隐藏样式
.sue {
        z-index: 1000; //层级
        width: 100%;
        height: 100%;
        background-color: rgba(94, 91, 91, 0.6);
        padding-top: 50%;
        display: none;
        position: fixed; //固定定位
        top: 0;
        left: 0;
}
// 显示样式
.box {
        z-index: 1000; //层级
        width: 100%;
        height: 100%;
        background-color: rgba(94, 91, 91, 0.6);
        padding-top: 50%;
        position: fixed; //固定定位
        top: 0;
        left: 0;
}
.box1 {
        font-size: 15px;
        border-radius: 15px;
        width: 70%;
        height: 100px;
        box-sizing: border-box; //怪异盒子???
        padding: 10px 10px 10px 10px;
        background-color: #fff;
        margin: 0 auto;
}
.box2 {
        margin-top: 10px;
        z-index: 1001; //层级
        width: 100%;
        height: auto;
        display: flex;
        justify-content: flex-end;
        button {
                width: 20%;
                height: 20px;
                font-size: 12px;
                line-height: 20px;
        }
}
.btn1 {
        margin-right: 20px;
}

.link {
        display: block;
        width: 20%;
        height: 50px;
}
.body {
        height: 180px;
}
.anniu {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
}
.daohang {
        height: 80px;
}
.daohang_item {
        margin-top: 10px; //上边距
        background-color: #f5f5ee;
        float: left; //从左到右
        width: 25%;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
}
.head {
        position: relative;
        width: 100%;
        height: 100%;
}
.el-carousel__item {
        display: flex;
        justify-content: center;
}
.small {
        width: 100%;
        height: 100%;
}
.lunbo {
        width: 100%;
        height: 100px;
}
.block {
        width: 100%;
        height: 100%;
}
.dgrtp {
        display: flex;
        align-items: center;
}
.first {
        background-color: white;
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-between;
}
.logo {
        height: 100%;
        width: 100%;
}
.lianjie {
        display: flex;
        width: 100%;
        height: 50px;
        line-height: 50px;
        justify-content: space-around;
}
</style>