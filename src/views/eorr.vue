<template>
        <div>
                <img src="../assets/404.jpg" alt="" class="box" />
                <p class="a">你的页面走失了……</p>
                <div class="fh">
                        <router-link to="/quanguo" class="c"
                                >返回首页</router-link
                        >
                        <router-link to class="b">
                                <button @click="goback" class="syy">
                                        上一页
                                </button>
                        </router-link>
                </div>
        </div>
</template>

<script>
export default {
        methods: {
                goback() {
                        this.$router.go(-1);
                },
        },
};
</script>

<style lang="less" scoped>
.syy {
        font-weight: bolder;
        font-size: 25px;
        border: 0;
        background-color: transparent;
        outline: none;
}
.fh {
        margin-top: 15px;
        display: flex;
        justify-content: space-evenly;
}
.c {
        color: #000;
        width: 100px;
        height: 40px;
        line-height: 40px;
        font-size: 25px;
        font-weight: bolder;
}
.b {
        width: 100px;
        height: 40px;
        line-height: 40px;
        font-size: 25px;
        font-weight: bolder;
}
.a {
        margin-top: 10px;
        font-size: 20px;
        font-weight: bolder;
        display: flex;
        justify-content: center;
}
.box {
        width: 100%;
        height: 100%;
}
</style>