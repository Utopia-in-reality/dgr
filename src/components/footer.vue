<template>
        <footer class="footer-info">
                <div class="footer">
                        <ul class="info-box">
                                <li class="li">
                                        <a
                                                href="https://www.baidu.com/"
                                                class="a"
                                                >百度搜索</a
                                        >
                                </li>
                                <li class="li">
                                        <a href="./customer" class="a"
                                                >联系客服</a
                                        >
                                </li>
                                <li class="li-a">
                                        <a href="/" class="a">返回首页</a>
                                </li>
                        </ul>
                </div>
                <p class="sentence">这么不努力，怎么做打工人啊你!</p>
                <p class="sentence">打工人，打工魂，打工人都是人上人!</p>
                <p class="sentence">没有困难的工作，只有勇敢的打工人!</p>
        </footer>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.sentence{
    font-size: 15px;
    color: rgb(52, 129, 52);
    width: 100%;
    display: flex;
    justify-content: center;
}
.info-box {
        line-height: 30px;
        height: 30px;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
}
.footer-info {
    margin-top: 10px;
        width: 100%;
        height: 100px;
        background-color: #f4f4f4;
}
.a{
    color: #9f9f9f;
}
.li-a {
        border-right: none;
        font-size: 15px;
        margin: auto;
        font-size: 15px;
        line-height: 30px;
        height: 30px;
        width: 32%;
        display: flex;
        justify-content: space-evenly;
}
.li {
        margin: auto;
        font-size: 15px;
        border-right: 1px solid #9f9f9f;
        line-height: 20px;
        height: 20px;
        width: 32%;
        display: flex;
        align-content: center;
        justify-content: space-evenly;
}
ul li {
    
        list-style: none;
}
</style>