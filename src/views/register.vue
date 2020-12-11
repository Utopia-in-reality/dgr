<template>
        <div class="information">
                <div class="goback">
                        <span class="el-icon-arrow-left" @click="goback"></span>
                </div>
                <div class="title">User<br />Registration</div>
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
                                        name="username"
                                        id="user_name"
                                        placeholder="请输入账号"
                                        class="zhanghao1"
                                        maxlength="10px"
                                        v-model="vmodel_username"
                                        @blur="blur_username"         
                                /> 
                                <!--  blur  失焦 -->
                        </div>
                        <span :class="span_a" class="color1"
                        >用户名请输入中文</span>
                        <div class="password">
                                <span class="icon iconfont icon-mima1"></span>
                                <input
                                        :type="password"
                                        name="pwd"
                                        id="pwd"
                                        placeholder="请输入密码"
                                        class="mima1"
                                        maxlength="10px"
                                        v-model="quxiao"
                                        @blur="blur_pwd"  
                                />
                                <!-- blur 失焦事件 -->
                        </div>
                        <span :class="span_b" class="color2"
                        >请输入8-20位数字</span>
                        <div class="password2">
                                <span
                                        class="icon iconfont icon-mimaqueren aa"
                                ></span>
                                <input
                                        :type="password"
                                        name=""
                                        id=""
                                        placeholder="请确认密码"
                                        class="mima1"
                                        maxlength="10px"
                                        v-model="vmodel_cpwd"
                                        @blur="blur_cpwd"
                                />
                        </div>
                        <span :class="span_c" class="color3"
                                >密码不一致</span>
                        <div class="button">
                                <button class="register" @click="zhuce">
                                        注册
                                </button>
                        </div>
                </div>
        </div>
</template>

<script>
export default {
        data() {
                return {
                        type: "password",
                        span_a:"sspp",
                        span_b:"bb",
                        span_c:"cc",
                        pwd_msg: "",
                        cpwd_msg: "",
                        vmodel_username: "",
                        quxiao: "",
                        vmodel_cpwd: "",
                };
        },
        methods: {
                blur_username: function () {
                        // 检查正则匹配
                        var re_username = /[\u4E00-\u9FA5]/;   //中文正则
                        if (re_username.test(this.vmodel_username)) {
                                this.span_a="sspp";
                        } else {
                                this.span_a="sspp1";
                                
                        }
                },
                blur_pwd: function () {
                        // 检查正则匹配
                        var re_pwd = /^[0-9]{8,20}$/;
                        if (re_pwd.test(this.quxiao)) {
                                this.span_b="bb";
                        } else {
                                this.span_b="bb1";
                        }
                },
                blur_cpwd: function () {
                        // 检查是否与password一样
                        if (this.quxiao == this.vmodel_cpwd) {
                                this.span_c="cc";
                        } else {
                                this.span_c="cc1";
                        }
                },
                zhuce() {
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
                        this.$router.replace("/information");
                },
        },
};
</script>

<style lang="less" scoped>
.color1{
        color: red;
}
.color2{
        color: red;
}
.color3{
        color: red;
}
.cc{
visibility: hidden;
}
.cc1{
        visibility: visible;
}
.bb{
visibility: hidden;
}
.bb1{
        visibility: visible;
}
.sspp{
        visibility: hidden;
}
.sspp1{
        visibility: visible;
}

.button {
        z-index: 1001;
        margin-top: 10px;
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
.title {
        width: 100%;
        height: 170px;
        text-align: center;
        font-size: 40px;
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
.password2 {
        position: relative;
        // 相对定位
        border-bottom: gray solid 2px;
        width: 199px;
        height: 50px;
        line-height: 60px;
        margin: 0 auto;
}
.aa {
        font-size: 20px;
        // font-weight: bold;
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
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        margin: 0 auto;
        width: 90%;
        height: 320px;
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
.goback {
        color: white;
        font-size: 45px;
        display: flex;
        align-content: center;
        margin-bottom: 10px;
        width: 20%;
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
        background-image: url(../assets/register.png);
        background-size: 100% 100%;
}
</style>