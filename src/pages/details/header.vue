<template>
  <div class="header-con">
    <div class="top-con">
      <div class="top-content">
        <div class="top-con-localcity">北京</div>
        <div class="top-con-search">
          <div class="search-content">
            搜索您要的车
          </div>
        </div>
        <div class="top-con-proving"></div>
        <div class="top-con-login"></div>
      </div>
    </div>
    <div class="under-con">
      <div class="under-content">
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
  .header-con{
    padding: 6px 78px 6px 38px;
    height: 32px;
    display: -webkit-box;
    display: box;
    background: pink;
  }
  .top-con{
    width: 100%;
    height: .32rem;
    background: #ccc;
    position: absolute;
    top: .06rem;
    left: 0;
    z-index: 80;
    display: flex;
  }
  .top-con-localcity{
    width: .44rem;
    height: 100%;
    padding-left: .16rem;
    padding-right: .15rem;
    font-size: .15rem;
    font-weight: 300;
    color: #303741;
    line-height: .32rem;
    position: relative;
    float: left;
    background: red;
  }
  .top-con-search{
    background: #eff2f6;
    width: 2.16rem;
    height: .32rem;
    float: left;
    font-size: .14rem;
    color: #bec5cf;
    text-align: center;
    line-height: .32rem;
    border-radius: .15rem;
  }
</style>
