<template>
    <div  class="calendar-box">
        <div class="calendar">
            <span class="el-icon-arrow-left goback" @click="goback"></span>
            <span class="calendar-words">打工人的日历</span>
        </div>
        
        <el-calendar v-model="value">
</el-calendar>
    </div>
</template>

<script>
    export default {
         methods: {
            goback() {
                        this.$router.replace("/quanguo");
                },
        },
        data() {
            return {     
        value: new Date()
       
        }
    }
    }
</script>

<style lang="less" scoped>
/deep/.el-calendar-day{ //deep穿透
height: 80px!important;
}
.calendar{
    width: 100%;
    display: flex;
    align-content: space-between;
}
.calendar-words{
    color: gray;
    font-size: 20px;
    font-weight: bolder;
    display: flex;
    justify-content: center;
    height: 40px;
    line-height: 40px;
    width: 50%;
}
.goback {
    left: 0;
        width: 25%;
        font-size: 30px;
        display: flex;
        align-content: center;
        height: 40px;
        line-height: 40px;
}
.calendar-box{
    height: 100%;
}
</style>