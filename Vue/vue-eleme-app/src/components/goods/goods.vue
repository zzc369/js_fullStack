<template>
  <div>
    <div class="goods">
      <div class="menu-wrapper" ref="menuWrapper">
        <ul>
          <li
            v-for="(item, index) in goods"
            :key="index"
            class="menu-item"
            :class="{'current':currentIndex === index}"
            @click="selectMenu(index,$event)"
          >
            <span class="text border-1px">
              <span class="icon" v-show="item.type > 0" :class="classMap[item.type]"></span>
              {{item.name}}
            </span>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper" ref="foodsWrapper">
        <ul>
          <li v-for="(item, index) in goods" :key="index" class="food-list" ref="foodList">
            <h1 class="title">{{item.name}}</h1>
            <ul>
              <li v-for="(food, index) in item.foods" :key="index" class="food-item border-1px">
                <div class="icon">
                  <img :src="food.icon" width="57" height="57">
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.description}}</p>
                  <div class="extra">
                    <span class="count">月售{{food.sellCount}}份</span>
                    <span>好评率{{food.rating}}%</span>
                  </div>
                  <div class="price">
                    <span class="now">￥{{food.price}}</span>
                    <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                  </div>
                  <!-- 添加按钮 抽离出来当作组件-->
                  <div class="cartcontrol-wrapper">
                    <cartcontrol :food="food" @add="addFood"></cartcontrol>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import cartcontrol from '@/components/cartcontrol/cartcontrol'
export default {
  name: "Goods",
  data() {
    return {
      classMap: [],
      goods: []
    };
  },
  components: {
    cartcontrol
  },
  methods: {
    _initScroll() {
      this.menuScroll = new BScroll(this.$refs.menuWrapper, {
        click: true
      });
      this.foodScroll = new BScroll(this.$refs.foodsWrapper, {
        click: true
      });
    },
    addFood(target) {
      this._drop(target)
    },
    _drop(target) {
      // 体验优化，异步执行下落动画
      this.$nextTick(()=> {
        // 动画组件
      })
    }
  },
  created() {
    this.classMap = ["decrease", "discount", "special", "invoice", "guarantee"];

    this.$http
      .get(
        "https://www.easy-mock.com/mock/5ca466a713e4cf68f04a42f7/js_fullStack/goods"
      )
      .then(res => {
        console.log(res);
        if (res.data.errno === 0) {
          this.goods = res.data.data;
          // $nextTick() 检测页面是否渲染完成，，完成才能执行里面的代码
          this.$nextTick(() => {
            this._initScroll();
          });
        }
      });
  }
};
</script>

<style lang="stylus">
@import '../../common/stylus/mixin.styl'
.goods
  display flex
  position absolute
  top 174px
  bottom 46px
  width 100%
  overflow hidden
  .menu-wrapper
    flex 0 0 80px
    width 80px
    background #f3f5f7
    .menu-item
      display table
      height 54px
      width 56px
      padding 0 12px
      line-height 14px
      &.current
        position relative
        z-index 10
        margin-top -1px
        background #ffffff
        font-weight 700
      .text
        border-none()
        display table-cell
        vertical-align middle
        border-1px(rgba(7,17,27,0.1))
        font-size 12px
        .icon
          display inline-block
          vertical-align top
          width 12px
          height 12px
          margin-right 2px
          background-size 12px 12px
          background-repeat no-repeat
          &.decrease {
          bg-image('decrease_3');
          }

          &.discount {
          bg-image('discount_3');
          }

          &.guarantee {
          bg-image('guarantee_3');
          }

          &.invoice {
          bg-image('invoice_3');
          }

          &.special {
          bg-image('special_3');
          }

  .foods-wrapper 
    flex 1      
    .title
      padding-left 14px
      height 26px
      line-height 26px
      border-left 2px solid #d9dde1
      font-size 12px
      color rgb(147,153,159)
      background #f3f5f7
    .food-item
      display flex
      margin 18px
      padding-bottom 18px
      border-1px(rgba(7,17,27,0.1))
      &:last-child
        border-none()
        margin-bottom 0

      .icon
        flex 0 0 57px
        margin-right 10px
      .content
        flex 1
        .name
          margin 2px 0 8px 0
          height 14px
          line-height 14px
          font-size 14px
          color rgb(7,17,27)
        .desc,.extra
          line-height 10px
          font-size 10px
          color rgb(147,153,159)
        .desc
          line-height 12px
          margin-bottom 8px
        .extra
          .count
            margin-right 12px
        .price
          font-weight 700
          line-height 24px
          .now
            margin-right 8px
            font-size 14px
            color rgb(240,20,20)
          .old
            text-decoration line-through
            font-size 10px
            color rgb(147,153,159)
        
        .cartcontrol-wrapper
          position absolute
          right 0
          bottom 12px
</style>

