<template>
        <div class="body_2">
                        <router-link to="/quanguo" class="type_tuijian"
                        >全国打工人</router-link
                >
                
                <router-link to="/diqu" class="type_tuijian"
                        >地区打工人</router-link
                >
                <router-link to="/gaopin" class="type_tuijian"
                        >高频打工人</router-link
                >
                <router-view></router-view>
        </div>
</template>

<script>

</script>

<style lang="less" scoped>
.body_2 {
        margin-top: 10px;
        height: auto;
        width: 100%;
}
.type_tuijian {
        font-size: 18px;
        width: 33.3%;
        height: 50px;
        display: inline-block;
        background-color: #f5f5ee;
        text-align: center;
        line-height: 50px;
}
</style>