<template>
        <div class="location">
                <span class="el-icon-arrow-left goback" @click="goback"></span>
                <div class="bdmap" id="allmap" style="height: 667px"></div>
        </div>
</template>

<script>
export default {
        mounted() {
                this.baiduMap();
        },
        methods: {
                goback() {
                        this.$router.replace("/quanguo");
                },
                baiduMap() {
                        // GL版命名空间为BMapGL
                        // 按住鼠标右键，修改倾斜角和角度
                        var map = new BMapGL.Map("allmap"); // 创建Map实例
                        map.centerAndZoom(
                                new BMapGL.Point(104.070091, 30.584569),
                                19
                        ); // 初始化地图,设置中心点坐标和地图级别
                        map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
                        map.setHeading(64.5);
                        map.setTilt(73);
                },
        },
};
</script>

<style lang="less" scoped>
.location{
    position:relative;
}
.goback {
    z-index: 1000;
    position: absolute;
    top:10px;
        font-size: 45px;
        display: flex;
        align-content: center;
        width: 20%;
        height: 40px;
        line-height: 40px;
}
</style>