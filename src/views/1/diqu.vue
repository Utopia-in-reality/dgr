<template>
<div>
        <div class="diqu" v-for="dq in dqs" :key="dq.area">
       <div class="title">
                        <div class="title-left">
                                <a href="https://www.baidu.com/">
                                        <strong class="area">
                                                {{dq.area}}</strong>
                                </a>
                        </div>
                        <div class="title-right">{{dq.terrain}}</div>
                </div>
                <p class="position">
                        <span>
                                {{dq.characteristic}}
                        </span>
                </p>
                <div class="picture">
                        <img class="tp" :src="dq.img1"  />
                        <img class="tp" :src="dq.img2"  />
                        <img class="tp" :src="dq.img3"  />
                </div>
                <div class="button-group">
                        <el-button-group>
                                <el-button
                                size="mini"
                                        type="success"
                                        icon="el-icon-arrow-left"
                                        plain
                                        >上一页</el-button
                                >
                                <el-button 
                                size="mini"
                                type="success"
                                plain
                                        >下一页<i
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
                        dqs:[
                                {
                                        area:"青藏地区",
                                        terrain:"[地势高耸]",
                                        characteristic:"冬季严寒，夏季温暖，全年干旱少雨，辐射强烈，植被较少。",
                                        img1: require("@/assets/bdlg.jpg"),
                                        img2:require("@/assets/gl.jpg"),
                                        img3:require("@/assets/hc.jpg"),
                                },
                                 {
                                        area:"西北地区",
                                        terrain:"[沙漠赤壁]",
                                        characteristic:"面积广大，干旱缺水，荒漠广布，风沙较多，生态脆弱。",
                                        img1: require("@/assets/xb1.jpg"),
                                        img2:require("@/assets/xb2.jpg"),
                                        img3:require("@/assets/xb3.jpg"),
                                },
                                 {
                                        area:"北方地区",
                                        terrain:"[高原山地]",
                                        characteristic:"温带大陆性气候和季风气候。冬夏温差大，四季气温变化分明。",
                                        img1: require("@/assets/bf1.jpg"),
                                        img2:require("@/assets/bf2.jpg"),
                                        img3:require("@/assets/bf3.jpg"),
                                },
                                 {
                                        area:"南方地区",
                                        terrain:"[西高东低]",
                                        characteristic:"热带亚热带季风气候为主，夏季高温多雨，冬季温和少雨。",
                                        img1: require("@/assets/nf1.jpg"),
                                        img2:require("@/assets/nf2.jpg"),
                                        img3:require("@/assets/nf3.jpg"),
                                }
                        ]
                      
                };
        },
};
</script>

<style lang="less" scoped>
.button-group{
    float: right;
    margin-right: 10px;
}
.picture {
    margin-bottom: 10px;
        height: 50px;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        img{
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
        width: 17%;
        color: #666;
}
.title {
        width: 95%;
        height: 20px;
}
 .diqu{
     margin: 0 auto;
        margin-top: 10px;
        height: 150px;
        width: 95%;
        border-radius: 4px;
        box-shadow: 0px 0px 4px #dadabf;
  }
</style>
  
