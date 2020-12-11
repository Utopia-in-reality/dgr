<template>
        <div class="information">
                <div class="close">
                        <span
                                class="icon iconfont icon-chacha1 chacha"
                                @click="goback"
                        ></span>
                </div>
                <div class="title">CUSTOMER<br />LOGIN</div>
                <div class="customer">
                        <div class="camera">
                                <span
                                        class="icon iconfont icon-touxiang touxiang"
                                ></span>
                        </div>
                        <div class="name">
                                <span
                                        class="icon iconfont icon-zhcc_yonghuming"
                                ></span>
                                <input
                                        type="text"
                                        name=""
                                        id=""
                                        placeholder="请输入账号"
                                        class="zhanghao1"
                                        maxlength="10px"
                                />
                        </div>
                        <div class="password">
                                <span
                                        class="icon iconfont icon-mima1"
                                ></span>
                                <input
                                        :type="type"
                                        name=""
                                        id=""
                                        placeholder="请输入密码"
                                        class="mima1"
                                        maxlength="10px"
                                        v-model="quxiao"  
                                />
                                <!-- maxlength 设置允许输入字符串最大长度     v-model 双向绑定 -->
                                <span
                                        class="icon iconfont icon-chacha quxiao"
                                        @click="qinchu"
                                ></span>
                                <span
                                        class="icon iconfont icon-yanjing_kai xianshi"
                                        style="
                                                position: relative;
                                                right: -25px;
                                                display: block;
                                        "
                                        ref="TheStyle"
                                        @click="xs"
                                ></span>
                                <span
                                        class="icon iconfont icon-yanjing-bi-01 yincang"
                                        style="position: relative; right: -25px;display: none;"
                                        ref="TheStyle2"
                                        @click="yc"
                                ></span>
                                <!-- 点击改变样式 -->
                        </div>
                        <div class="button">
                                <button class="login">登录</button>
                                <button class="register" @click="zhuce">注册</button>
                        </div>
                </div>
        </div>
</template>

<script>
export default {
        data() {
                return {
                        quxiao: "", //返回为空  点击清空
                        type: "password",
                };
        },
        methods: {
                zhuce(){
                        this.$router.replace("/register");
                },
                //     眼睛闭
                yc() {
                        this.$refs.TheStyle.style.display = "block";  
                        //  点击后眼睛 睁 显示
                        this.$refs.TheStyle2.style.display = "none";
                        // 点击后眼睛 闭 隐藏  
                        this.type = "password";    
                        // 密码输入栏为隐藏输入
                },
                //     眼睛睁
                xs() {
                        this.$refs.TheStyle.style.display = "none";
                        this.$refs.TheStyle2.style.display = "block";
                        this.type = "text";
                         // 密码输入栏为显示输入
                },
                qinchu() {
                        this.quxiao = "";
                },

                goback() {
                        this.$router.replace("/quanguo");
                },
        },
};
</script>

<style lang="less" scoped>
.button {
        margin-top: 20px;
        display: flex;
        justify-content: space-evenly;
}
.register {
        font-size: 20px;
        font-weight: bold;
        width: 100px;
        height: 40px;
        border-radius: 7px;
        border: #4ab3b3 solid 1px;
        color: white;
        background-color: #5fb9b9;
}
.login {
        font-size: 18px;
        font-weight: bold;
        width: 100px;
        height: 40px;
        border: #4ab3b3 solid 1px;
        border-radius: 7px;
        color: white;
        background-color: #5fb9b9;
}
.title {
        width: 100%;
        height: 170px;
        text-align: center;
        font-size: 35px;
        font-weight: bold;
        color: white;
}
.password {
        position: relative;
        // 相对定位
        border-bottom: gray solid 2px;
        width: 199px;
        height: 50px;
        line-height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
}
.mima {
        position: absolute;
        //绝对定位
        left: 0px;
        color: grey;
        font-size: 30px;
}
.mima1 {
        border: 0;
        flex: 1;
        text-indent: 40px; //修改input框placeholder的左侧边距
        height: 30px;
}
.quxiao {
        position: absolute;
        right: 0px;
        color: grey;
}
.name {
        position: relative;
        // 相对定位
        border-bottom: gray solid 2px;
        width: 199px;
        height: 50px;
        line-height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        margin-top: -50px;
}
.zhanghao {
        position: absolute;
        //绝对定位
        left: 1px;
        width: 30px;
        display: block;
        color: grey;
        font-size: 30px;
}
.zhanghao1 {
        width: 100%;
        border: 0;
        height: 30px;
        text-indent: 40px;
        
}
.customer {
        position: relative;
        margin: 0 auto;
        width: 90%;
        height: 250px;
        background-color: white;
        border-radius: 4px; //圆角边框
        box-shadow: 0px 0px 10px 2px rgb(128, 126, 126); //盒子阴影css3
}
.camera {
        position: relative;
        top: -70px;
        border-radius: 50%;
        background-color: #5fb9b9;
        width: 110px;
        height: 110px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
}
.touxiang {
        position: absolute;
        color: white;
        font-size: 100px;
}
.close {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        margin-left: 10px;
        width: 10%;
        height: 40px;
        line-height: 40px;
}
.chacha {
        height: 30px;
        font-size: 30px;
        color: white;
}
.information {
        width: 100%;
        height: 100%;
        background-image: url(../assets/login.jpg);
        background-size: 100% 100%;
}
</style>