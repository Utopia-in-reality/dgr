<template>
        <div>
                <div class="quanguo" v-for="qg in qgs" :key="qg.position">
                        <div class="title">
                                <div class="title-left">
                                        <a href="https://www.baidu.com/">
                                                <strong class="provincial">{{
                                                        qg.provincial
                                                }}</strong>
                                        </a>
                                </div>
                                <div class="title-right">{{ qg.city }}</div>
                        </div>
                        <p class="position">
                                <span>
                                        {{ qg.position }}
                                </span>
                        </p>
                        <div class="picture">
                                <img class="tp" :src="qg.img1" />
                                <img class="tp" :src="qg.img2" />
                                <img class="tp" :src="qg.img3" />
                        </div>
                        <div class="button-group">
                                <el-button-group>
                                        <el-button
                                        class="buttonL"
                                                size="mini"
                                                type="success"
                                                icon="el-icon-arrow-left"
                                                plain
                                                >上一页</el-button
                                        >
                                        <el-button
                                        class="buttonR"
                                                size="mini"
                                                type="success"
                                                plain
                                                >下一页
                                                <i
                                                        class="el-icon-arrow-right el-icon--right"
                                                ></i
                                        ></el-button>
                                </el-button-group>
                        </div>
                </div>
        </div>
</template>


<script>
export default {
        data() {
                return {
                        qgs: [
                                {
                                        provincial: "四川",
                                        city: "成都",
                                        position:
                                                "界于北纬26°03′～34°19′，东经97°21′～108°12′之间",
                                        img1: require("@/assets/贡嘎.jpg"),
                                        img2: require("@/assets/熊猫.jpg"),
                                        img3: require("@/assets/九寨沟.jpg"),
                                },
                                {
                                        provincial: "重庆",
                                        city: "渝中",
                                        position:
                                                "界于东经105°11′～110°11′,北纬28°10′～32°13′之间",
                                        img1: require("@/assets/cq.jpg"),
                                        img2: require("@/assets/hyd.jpg"),
                                        img3: require("@/assets/yj.jpg"),
                                },
                                {
                                        provincial: "北京",
                                        city: "东城",
                                        position:
                                                "界于东经115.7°～117.4°，北纬39.4°～41.6°之间",
                                        img1: require("@/assets/cc.jpg"),
                                        img2: require("@/assets/tam.jpg"),
                                        img3: require("@/assets/nc.jpg"),
                                },
                        ],
                };
        },
};
</script>

<style lang="less" scoped>

.el-button-group{
        width: 100%;
        height: 28px;
}
.button-group {
        width: 50%;
        float: right;
        margin-right: 10px;
}
.picture {
        margin-bottom: 10px;
        height: 50px;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        img {
                width: 85px;
                height: 50px;
        }
}
.position {
        margin-bottom: 10px;
        width: 100%;
        margin-left: 10px;
        color: #666;
        float: left;
}
.title-left {
        margin-top: 5px;
        margin-left: 10px;
        width: 75%;
        float: left;
        font-size: 18px;
}
.title-right {
        margin-top: 5px;
        margin-right: -5px;
        float: right;
        width: 10%;
        color: #666;
}
.title {
        width: 95%;
        height: 20px;
}
.quanguo {
        margin: 0 auto;
        margin-top: 10px;
        height: 150px;
        width: 95%;
        border-radius: 4px; //圆角边框
        box-shadow: 0px 0px 4px #dadabf;  //盒子阴影css3
}
</style>