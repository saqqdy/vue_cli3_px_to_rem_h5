const saBs = {} // 基础功能

// 全局参数
saBs.$sitePath = '/'
saBs.$time = new Date()
saBs.$timeStr = '.r' + ('00' + saBs.$time.getHours()).substr(-2, 2) + ('00' + saBs.$time.getMinutes()).substr(-2, 2)
saBs.$version = '1.0.0'

saBs.$weixinAppid = 'wx870a19ad52623f20' // 授权登录，开发者帐号appid
saBs.$wxDebug = false // 微信jssdk的debug模式
saBs.$env = process.env.NODE_ENV // 环境
// saBs.$version = process.env.VERSION // 应用版本
// saBs.$debugIDs = ['45897b53660a4374b885066b2eb601f5', '6381f78302b142028438af3006166bd8']
saBs.$debugIDs = ['oyfG65kYYzamy5iwD6HqUaX2_Jqk', 'oyfG65mjtv-aYO4MznBK3btMIxx8']

// 开发环境
saBs.$locationLink = `http://127.0.0.1:8888${process.env.ROUTER_MODE === 'hash' ? '/#' : ''}`
saBs.$locationLinkWX = `https://127.0.0.1:8888`
saBs.$serverLinkWX = `http://192.168.0.145:18082/kstore/mobile/wx/code/redirect`
saBs.$apiServer = {
  node: '/nodeapi', // 商城nodeapi
  mock: '/mockapi/app/mock/18', // moke接口
  cMock: 'http://192.168.0.169:18286', // cfront moke接口

  sc_h5: '/javaapi', // 商城java接口
  glsh_c: '/lifeapi', // 给乐生活C端接口,
  glsh_wx: '/lifeapi/wxpub', // 给乐生活wxpub接口
  // sc_h5: '/javadev', // 商城java接口
  // glsh_c: '/lifedev', // 给乐生活C端接口,
  // glsh_wx: '/lifedev/wxpub', // 给乐生活wxpub接口

  xldn: 'https://192.168.0.136:8093',
  imh5: 'http://192.168.0.114:2001', // 聊天客服
  baiduAk: {
    // 百度API
    ak: 'YQ6Mfwo6oQMdzDSTlNN7xQuGldYBevPP',
    id: '192242'
  },
  baiduUrl: 'https://api.map.baidu.com/geosearch/v3/nearby'
}
if (process.env.NODE_ENV === 'production_dev' || process.env.NODE_ENV === 'production_app_dev') {
  // 开发联调环境
  saBs.$version += saBs.$timeStr
  saBs.$weixinAppid = 'wxe8ba098bd98baba0' // 授权登录，开发者帐号appid 给乐生活测试号
  saBs.$locationLink = `https://sch5-dev.365gl.com${process.env.ROUTER_MODE === 'hash' ? '/#' : ''}`
  saBs.$locationLinkWX = `https://sch5-dev.365gl.com`
  saBs.$serverLinkWX = `https://loclife-dev.365gl.com/kstore/mobile/wx/code/redirect`
  saBs.$apiServer = {
    node: 'https://h5api-test.365gl.com', // 商城nodeapi
    mock: 'https://rap2.365gl.com:8000/app/mock/18', // moke接口
    cMock: 'http://192.168.0.169:18286', // cfront moke接口

    // 测试环境
    sc_h5: 'https://loclife-dev.365gl.com', // 商城java接口
    glsh_c: 'https://loclife-dev.365gl.com', // 给乐生活C端接口
    glsh_wx: 'https://pay.365gl.com/quick/devtest/wxauth/v2', // 给乐生活wxpub接口

    imh5: 'https://guest-test.365gl.com', // 聊天客服
    baiduAk: {
      // 百度API
      ak: 'YQ6Mfwo6oQMdzDSTlNN7xQuGldYBevPP',
      id: '192242'
    },
    baiduUrl: 'https://api.map.baidu.com/geosearch/v3/nearby'
  }
} else if (process.env.NODE_ENV === 'production_test' || process.env.NODE_ENV === 'production_app_test') {
  // 测试环境
  saBs.$version += saBs.$timeStr
  saBs.$weixinAppid = 'wx870a19ad52623f20' // 授权登录，开发者帐号appid 给乐生活测试号
  saBs.$locationLink = `https://scapi-test.365gl.com${process.env.ROUTER_MODE === 'hash' ? '/#' : ''}`
  saBs.$locationLinkWX = `https://scapi-test.365gl.com`
  saBs.$serverLinkWX = `https://loclife.365gl.com/kstore/mobile/wx/code/redirect`
  saBs.$apiServer = {
    node: 'https://h5api-test.365gl.com', // 商城nodeapi
    mock: 'https://rap2.365gl.com:8000/app/mock/18', // moke接口
    cMock: 'http://192.168.0.169:18286', // cfront moke接口

    // 测试环境
    sc_h5: 'https://loclife.365gl.com', // 商城java接口
    glsh_c: 'https://loclife.365gl.com', // 给乐生活C端接口
    glsh_wx: 'https://pay.365gl.com/quick/loctest/wxauth/v2', // 给乐生活wxpub接口

    // 测试环境
    // sc_h5: 'http://192.168.0.145:18082', // 商城java接口
    // glsh_c: 'http://192.168.0.145:18082', // 给乐生活C端接口
    // // glsh_c: 'https://192.168.0.136:8093', // 给乐生活C端接口
    // glsh_wx: 'http://192.168.0.145:18195', // 给乐生活wxpub接口

    // 开发环境
    // sc_h5: 'https://loclife-dev.365gl.com', // 商城java接口
    // glsh_c: 'https://loclife-dev.365gl.com', // 给乐生活C端接口
    // glsh_wx: 'https://pay.365gl.com/quick/devtest/wxauth/v2', // 给乐生活wxpub接口

    // uat
    // sc_h5: 'https://uat2life.365gl.com', // 商城java接口
    // glsh_c: 'https://uat2life.365gl.com', // 给乐生活C端接口
    // glsh_wx: 'https://pay.365gl.com/quick/test/wxauth/v2', // 给乐生活wxpub接口

    imh5: 'https://guest-test.365gl.com', // 聊天客服
    baiduAk: {
      // 百度API
      ak: 'YQ6Mfwo6oQMdzDSTlNN7xQuGldYBevPP',
      id: '192242'
    },
    baiduUrl: 'https://api.map.baidu.com/geosearch/v3/nearby'
  }
} else if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'production_app') {
  // 生产环境
  // saBs.$weixinAppid = 'wx07213139a2987663' // 授权登录，开发者帐号appid 给乐商家
  saBs.$weixinAppid = 'wxf290902fec0f2fe5' // 授权登录，开发者帐号appid 给乐生活
  saBs.$locationLink = `https://m.365gl.com${process.env.ROUTER_MODE === 'hash' ? '/#' : ''}`
  saBs.$locationLinkWX = `https://m.365gl.com`
  saBs.$serverLinkWX = `https://life.365gl.com/kstore/mobile/wx/code/redirect`
  saBs.$apiServer = {
    node: 'https://h5api.365gl.com', // 商城nodeapi
    mock: 'https://rap2.365gl.com:8000/app/mock/18', // 商城moke接口
    cMock: 'http://192.168.0.169:18286', // cfront moke接口

    sc_h5: 'https://life.365gl.com', // 商城java接口
    glsh_c: 'https://life.365gl.com', // 给乐生活C端接口
    glsh_wx: 'https://pay.365gl.com/quick/prod/wxauth/v2', // 给乐生活wxpub接口

    imh5: 'https://im-wx.365gl.com', // 聊天客服
    baiduAk: {
      // 百度API
      // ak: '5c386b41caecdd8f9003871d2660ef2d',
      // id: '172778'
      ak: 'hEbCHFklzlNWe43gA7gAgxv2',
      id: '192684'
    },
    baiduUrl: 'https://api.map.baidu.com/geosearch/v3/nearby'
  }
  // saBs.$weixinAppid = 'wxf290902fec0f2fe5' // 授权登录，开发者帐号appid 给乐生活
  // saBs.$locationLink = `https://m.365gl.com${process.env.ROUTER_MODE === 'hash' ? '/#' : ''}`
  // saBs.$locationLinkWX = `https://m.365gl.com`
  // saBs.$apiServer = {
  //   node: 'https://h5api.365gl.com', // 商城nodeapi
  //   mock: 'https://rap2.365gl.com:8000/app/mock/18', // moke接口
  //   sc_h5: 'https://loclife.365gl.com', // 商城java接口
  //   glsh_c: 'https://loclife.365gl.com', // 给乐生活C端接口
  //   glsh_wx: 'https://pay.365gl.com/quick/loctest/wxauth/v2', // 给乐生活wxpub接口
  //   imh5: 'https://im-wx.365gl.com', // 聊天客服
  //   baiduAk: {
  //     // 百度API
  //     ak: 'YQ6Mfwo6oQMdzDSTlNN7xQuGldYBevPP',
  //     id: '192242'
  //   },
  //   baiduUrl: 'http://api.map.baidu.com/geosearch/v3/nearby'
  // }
}

saBs.$api = {
  registerForTransfer: `${saBs.$apiServer.glsh_wx}/wxpubApi/user/registerForTransfer`, // 给乐商家账号迁移 老用户绑定手机

  // 微信相关
  getIp: `${saBs.$apiServer.node}/getip`, // get方法
  getJssdkConfig: `${saBs.$apiServer.node}/weixin/jssdk`, // post方法
  weChatCredit: `${saBs.$apiServer.sc_h5}/kstore/mobile/CreditController/weChatCredit`, // 通过微信code获取openid
  weChatCreditForShop: `${saBs.$apiServer.sc_h5}/kstore/mobile/CreditController/weChatCreditForShop`, // 通过微信code获取openid
  weChatJsSDK: `${saBs.$apiServer.sc_h5}/kstore/mobile/CreditController/weChatJsSDK`, // jssdk授权
  updateGoodsStatus: `${saBs.$apiServer.sc_h5}/kstore/mobile/gl/link/updateGoodsStatus`, // 转赠link分享完成（更新礼品状态）
  wxQueryMerchantInfoLBS: `${saBs.$apiServer.glsh_c}/wxpubApi/merchant/queryMerchantInfoLBS`, // 公众号 获取百度云接口
  appQueryMerchantInfoLBS: `${saBs.$apiServer.glsh_c}/lifeAPI/merchant/queryMerchantInfoLBS`, // APP 获取百度云接口
  getcommonPay: `${saBs.$apiServer.glsh_c}/lifeAPI/wxPay/commonPay` /* 小程序 */,
  // 乐抢单
  rlAmountPro: `${saBs.$apiServer.glsh_c}/lifeAPI/groupManagement/rlAmountPro`,
  qrCodeInGroup: `${saBs.$apiServer.glsh_c}/lifeAPI/groupManagement/qrCodeInGroup`,
  recordLastOne: `${saBs.$apiServer.glsh_c}/lifeAPI/group/record/lastOne`, // 进行中的乐抢单提示
  recordListOwner: `${saBs.$apiServer.glsh_c}/lifeAPI/group/record/list/owner`, // 我发起的乐抢单记录
  recordListMember: `${saBs.$apiServer.glsh_c}/lifeAPI/group/record/list/member`, // 我参与的乐抢单记录
  groupRecordInfo: `${saBs.$apiServer.glsh_c}/lifeAPI/group/record/info`, // 乐抢单交易流水

  // 曾思仲
  GetLibList: `${saBs.$apiServer.sc_h5}/kstore/mobile/gl/present/listPageGoods`, // 获取我的礼品库列表
  listGoodsDetail: `${saBs.$apiServer.sc_h5}/kstore/mobile/gl/present/listGoodsDetail`, // 我的礼品库列表详情
  getCoupons: `${saBs.$apiServer.sc_h5}/kstore/mobile/coupon/getMyCoupon`, // 我的优惠券
  activateCode: `${saBs.$apiServer.sc_h5}/kstore/mobile/coupon/activateCode`, // 兑换优惠券
  getCouponList: `${saBs.$apiServer.sc_h5}/kstore/mobile/coupon/getCouponList`, // 我的优惠券列表
  getExClassNavigation: `${saBs.$apiServer.sc_h5}/kstore/mobile/category/getCategory`, // 获取兑换商城导航-菜单及列表
  giftCouponList: `${saBs.$apiServer.sc_h5}/kstore/mobile/coupon/getGiftCouponList`, // 领取完了界面 获取赠券
  allList: `${saBs.$apiServer.sc_h5}/kstore/mobile/gl/customer/address/list`, // 查询所有收货地址
  selectDefaultAddress: `${saBs.$apiServer.sc_h5}/kstore/mobile/gl/customer/address/selectDefaultAddress`, // 查询默认收货地址
  submitOrder: `${saBs.$apiServer.sc_h5}/kstore/mobile/gl/order/submitOrder`, // 提交订单
  sendSms: `${saBs.$apiServer.glsh_c}/lifeAPI/sms/sendSms`, // 发送验证码
  verifySms: `${saBs.$apiServer.glsh_c}/lifeAPI/sms/verifySms`, // 校验验证码
  login: `${saBs.$apiServer.glsh_c}/lifeAPI/login`, // 登录
  getSign: `${saBs.$apiServer.glsh_c}/lifeAPI/getSign`, // Getsing
  register: `${saBs.$apiServer.glsh_c}/lifeAPI/register`, // 注册
  regToken: `${saBs.$apiServer.glsh_c}/lifeAPI/regToken`, // 获取token
  outlogin: `${saBs.$apiServer.glsh_c}/lifeAPI/logout`, // 登出
  forgotPassword: `${saBs.$apiServer.glsh_c}/lifeAPI/user/forgotPassword`, // 忘记密码
  updatePwd: `${saBs.$apiServer.glsh_c}/lifeAPI/user/updatePwd`, // 修改密码校验原密码
  password: `${saBs.$apiServer.glsh_c}/lifeAPI/user/password`, // 修改密码
  happycoin: `${saBs.$apiServer.glsh_c}/lifeAPI/payment/user/happycoin/`, //  获取乐豆数量
  isPayPassword: `${saBs.$apiServer.glsh_c}/lifeAPI/payPassword/isPayPassword`, // 是否已设置支付密码
  getCheckToken: `${saBs.$apiServer.glsh_c}/lifeAPI/payPassword/getCheckToken`, // 获取验证支付密码Token
  checkPayPassword: `${saBs.$apiServer.glsh_c}/member/payPassword/checkPayPassword`, // 验证支付密码
  unlogin: `${saBs.$apiServer.glsh_c}/chat/queryNeteaseId/unlogin`, // 未登录
  logined: `${saBs.$apiServer.glsh_c}/chat/queryNeteaseId/logined`, // 已登录
  queryCustomerOnline: `${saBs.$apiServer.glsh_c}/chat/queryCustomerOnline`, // 分配客服
  queryHavePassword: `${saBs.$apiServer.glsh_c}/lifeAPI/queryHavePassword`, // 查询用户是否设置登录密码
  authNew: `${saBs.$apiServer.glsh_wx}/wxpubApi/authNew`, // 商城版本公众号登录
  userBind: `${saBs.$apiServer.glsh_wx}/wxpubApi/user/userBind`, // 判断用户是否绑定
  userregister: `${saBs.$apiServer.glsh_wx}/wxpubApi/user/register`, // 引导注册
  wxpubApisendSms: `${saBs.$apiServer.glsh_wx}/wxpubApi/sms/sendSms`, // 发送验证码
  wxpubApiverifySms: `${saBs.$apiServer.glsh_wx}/wxpubApi/sms/verifySms`, // 检验验证码
  imh5: saBs.$apiServer.imh5, // 公众号客服访客端

  // 曾宇
  listPageOrders: `${saBs.$apiServer.sc_h5}/kstore/mobile/gl/order/listPageOrders`, // 订单列表POST /gl/receivedOrder/listPageOrders
  fetchOrderDetail: `${saBs.$apiServer.sc_h5}/kstore/mobile/gl/order/fetchOrderDetail`, // 订单详情
  selectLetterList: `${saBs.$apiServer.sc_h5}/kstore/mobile/insidelLetter/selectLetterList`, // 消息中心
  queryBackOrderDetial: `${saBs.$apiServer.sc_h5}/kstore/mobile/backorder/queryBackOrderDetial`, // 售后详情查询接口
  applyGiftRefund: `${saBs.$apiServer.sc_h5}/kstore/mobile/backorder/applyGiftRefund`, // 申请退款接口(礼品商城)
  applyExChangeRefund: `${saBs.$apiServer.sc_h5}/kstore/mobile/backorder/applyExChangeRefund`, // 申请退货接口(兑换商城)
  saveBackOrderGeneral: `${saBs.$apiServer.sc_h5}/kstore/mobile/backOrderGeneral/saveBackOrderGeneral`, // 退单物流保存接口
  selectNoReadInfo: `${saBs.$apiServer.sc_h5}/kstore/mobile/insidelLetter/selectNoReadInfo`, // 查询会员未读的站内信息
  getCouponNum: `${saBs.$apiServer.sc_h5}/kstore/mobile/coupon/getCouponNum`, // 优惠卷数量
  getOrderCount: `${saBs.$apiServer.sc_h5}/kstore/mobile/gl/order/getOrderCount`, // 获取应请求标识对应的订单总数
  getOrderPresentCount: `${saBs.$apiServer.sc_h5}/kstore/mobile/gl/present/getOrderPresentCount`, // 统计我的礼品库的礼品总数
  uploadImg: `${saBs.$apiServer.sc_h5}/kstore/mobile/fileUpload/uploadImg`, // 图片上传xiaoma
  toSender: `${saBs.$apiServer.sc_h5}/kstore/mobile/gl/link/toSender`, // 转赠link分享完成（更新礼品状态）
  queryKuaiDiDetial: `${saBs.$apiServer.sc_h5}/kstore/mobile/kuaiDi/queryKuaiDiDetial`, // 快递100明细查询接口
  comfiremDelivery: `${saBs.$apiServer.sc_h5}/kstore/mobile/gl/receivedOrder/comfiremDelivery`, // 用户确认收货
  listAllLogisticsCompanies: `${saBs.$apiServer.sc_h5}/kstore/mobile/kuaiDi/listAllLogisticsCompanies`, // 获取物理公司列表
  token: `${saBs.$apiServer.glsh_c}/lifeAPI/user/aliyun/token`, // 获取阿里token
  getVerifyCode: `${saBs.$apiServer.glsh_c}/lifeAPI/payPassword/getVerifyCode`, // 获取忘记支付密码手机验证码
  verifyCodeToTokan: `${saBs.$apiServer.glsh_c}/lifeAPI/payPassword/verifyCodeToTokan/`, // 忘记支付密码手机验证码换取修改密码{vCode}
  info: `${saBs.$apiServer.glsh_c}/lifeAPI/user/info`, // 获取个人信息
  photo: `${saBs.$apiServer.glsh_c}/lifeAPI/user/photo`, // 修改头像
  mobilePhone: `${saBs.$apiServer.glsh_c}/lifeAPI/user/mobilePhone`, // 修改手机
  passwordName: `${saBs.$apiServer.glsh_c}/lifeAPI/user/password`, // 实名认证
  bindBankForRegistForApp: `${saBs.$apiServer.glsh_c}/lifeAPI/user/bindBankForRegistForApp`, // 绑定银行卡
  queryBindStatus: `${saBs.$apiServer.glsh_c}/lifeAPI/payment/bindinfo/queryBindStatus`, // 查询绑定状态
  cardRegist: `${saBs.$apiServer.glsh_c}/lifeAPI/payment/fft/card`, // 获取银行卡列表
  setPayPassword: `${saBs.$apiServer.glsh_c}/lifeAPI/payPassword/setPayPassword`, // 设置密码
  forgetPayPassword: `${saBs.$apiServer.glsh_c}/lifeAPI/payPassword/updatePayPassword`, // 支付密码修改
  nickName: `${saBs.$apiServer.glsh_c}/lifeAPI/user/nickName`, // 修改昵称{nickName}
  bankCard: `${saBs.$apiServer.glsh_c}/lifeAPI/user/unbindBankForRegistForApp`, // 解绑银行卡{nickName}
  listGreetTypes: `${saBs.$apiServer.sc_h5}/kstore/mobile/gl/greetings/listGreetTypes`, // 获取祝福语类别
  listGreetingsByTypeId: `${saBs.$apiServer.sc_h5}/kstore/mobile/gl/greetings/listGreetingsByTypeId`, // 获取祝福语列表

  // 潘莹部分:
  getTypeList: `${saBs.$apiServer.sc_h5}/kstore/mobile/category/getPageCategory`, // 获取首页类目分类导航
  getHeadImg: `${saBs.$apiServer.sc_h5}/kstore/mobile/carousel/getCarouselAdGift`, // 礼品商城首页轮播图
  getExmallImg: `${saBs.$apiServer.sc_h5}/kstore/mobile/carousel/getCarouselAdConvert`, // 兑换商城首页轮播图
  getPrice: `${saBs.$apiServer.sc_h5}/kstore/mobile/gl/mobileGoods/queryPriceFilter`, // 礼品商城价格区间
  getshopList: `${saBs.$apiServer.sc_h5}/kstore/mobile/category/getPageCategoryGoods`, // 礼品商城商品列表
  updateAddress: `${saBs.$apiServer.sc_h5}/kstore/mobile/gl/customer/address/update`, // 修改地址
  addAddress: `${saBs.$apiServer.sc_h5}/kstore/mobile/gl/customer/address/add`, // 新增收货地址
  myLove: `${saBs.$apiServer.sc_h5}/kstore/mobile/follow/myLiveGoodsList`, // 我的喜欢
  defaultAddress: `${saBs.$apiServer.sc_h5}/kstore/mobile/gl/customer/address/selectDefaultAddress`, // 查询默认收货地址
  queryAddress: `${saBs.$apiServer.sc_h5}/kstore/mobile/gl/customer/address/list`, // 查询用户收货地址
  queryOrder: `${saBs.$apiServer.sc_h5}/kstore/mobile/app/mock/18/gl/order/previewOrder`, // 查询订单信息
  myLoveShop: `${saBs.$apiServer.glsh_c}/lifeAPI/merchant/getFavoritesList`, // 查询喜欢的商家列表
  queryMyBill: `${saBs.$apiServer.glsh_c}/lifeAPI/payment/queryUserBills`, // 查询我的交易流水
  queryRewardStatus: `${saBs.$apiServer.glsh_c}/lifeAPI/payment/commentPersonal/status`, // 查询打赏状态
  setDefaultAddress: `${saBs.$apiServer.sc_h5}/kstore/mobile/gl/customer/address/setDefaultAddress`, // 设置默认收货地址
  cancelDefaultAddress: `${saBs.$apiServer.sc_h5}/kstore/mobile/gl/customer/address/cancelDefaultAddress`, // 取消设置默认收货地址
  listProvince: `${saBs.$apiServer.sc_h5}/kstore/mobile/gl/customer/address/listProvince`, // 省市区联动
  deleteAddress: `${saBs.$apiServer.sc_h5}/kstore/mobile/gl/customer/address/delete`, // 删除收货地址
  goodsarea: `${saBs.$apiServer.sc_h5}/kstore/mobile/gl/mobileGoods/findGoodsMarketAreaList`, // 送货区域
  confirmOrder: `${saBs.$apiServer.sc_h5}/kstore/mobile/gl/order/submitOrder`, // 礼品商城提交订单
  payOrder: `${saBs.$apiServer.sc_h5}/kstore/mobile/gl/order/payOrder`, // 去支付
  bgimg: `${saBs.$apiServer.sc_h5}/kstore/mobile/carousel/getExchangestoreHomeImg`, // 兑换商城背景图
  queryOrderPayInfo: `${saBs.$apiServer.sc_h5}/kstore/mobile/gl/order/queryOrderPayInfo`, // 轮询查询订单状态
  baiduAk: saBs.$apiServer.baiduAk, // 百度API
  getMerchant: saBs.$apiServer.baiduUrl /* 我的喜欢商家 计算距离用 */,
  sendBean: `${saBs.$apiServer.sc_h5}/kstore/mobile/gl/mobileGoods/fetchBeanAndExchangeRatio` /* 查询乐豆和兑换金赠送比例 */,
  areaTips: `${saBs.$apiServer.sc_h5}/kstore/mobile/gl/mobileGoods/findGoodsMarketArea`, // 送货提示
  goodsLimit: `${saBs.$apiServer.sc_h5}/kstore/mobile/gl/mobileGoods/goodsLimit`, //  商品限购

  getReceivedOrder: `${saBs.$apiServer.sc_h5}/kstore/mobile/gl/receivedOrder/giftDetail`, // 线下商品领取详情

  // 蔡鸿城
  search: `${saBs.$apiServer.sc_h5}/kstore/mobile/gl/mobileGoods/searchproductnew`, // 搜索
  finGoodsDetails: `${saBs.$apiServer.sc_h5}/kstore/mobile/gl/mobileGoods/finGoodsDetails`, // 商品详情页
  listGreetings: `${saBs.$apiServer.sc_h5}/kstore/mobile/gl/greetings/listGreetings`, // 祝福语
  area: `${saBs.$apiServer.sc_h5}/kstore/mobile/gl/mobileGoods/findGoodsMarketAreaList`, // 配送区域
  queryPriceFilter: `${saBs.$apiServer.sc_h5}/kstore/mobile/gl/mobileGoods/queryPriceFilter`, // 价格区间
  queryGoodsInfoByPriceFilter: `${saBs.$apiServer.sc_h5}/kstore/mobile/gl/mobileGoods/queryGoodsInfoByPriceFilter`, // 根据价格区间查询货品
  goodsFollow: `${saBs.$apiServer.sc_h5}/kstore/mobile/follow/goodsFollow`, // 商品关注
  cancelGoodsFollow: `${saBs.$apiServer.sc_h5}/kstore/mobile/follow/cancelGoodsFollow`, // 取消关注
  getGoodsFollow: `${saBs.$apiServer.sc_h5}/kstore/mobile/follow/getGoodsFollow`, // 查询商品是否已经关注
  queryUserBeanReport: `${saBs.$apiServer.sc_h5}/lifeAPI/payment/queryUserBeanReport`, // 查询商品是否已经关注

  // 贾凯丽
  sendCouponAndReg: `${saBs.$apiServer.sc_h5}/kstore/mobile/coupon/sendCouponAndReg`, // 发送优惠价创建账号
  verificateOrderGetStatus: `${saBs.$apiServer.sc_h5}/kstore/mobile/gl/present/verificateOrderGetStatus`, // 校验是否有领取 与receivedOrderPage接口同意功能 receivedOrderPage会送券
  checkCacheForWX: `${saBs.$apiServer.sc_h5}/kstore/mobile/gl/verificationCode/checkCache`, // 领取礼品时-校验手机号是否已验证
  giftShareIndex: `${saBs.$apiServer.sc_h5}/kstore/mobile/gl/present/receivedOrderPage`, // 送朋友领取礼物页面查询接口
  giftPresent: `${saBs.$apiServer.sc_h5}/kstore/mobile/gl/present/verificateCode`, // 获取验证码后验证接口
  getVerificationCode: `${saBs.$apiServer.sc_h5}/kstore/mobile/gl/verificationCode/getVerificationCode`, // 发送验证码
  isAffirmSender: `${saBs.$apiServer.sc_h5}/kstore/mobile/gl/link/isAffirmSender`, // 获取发送者是否已确认分享
  affirmSender: `${saBs.$apiServer.sc_h5}/kstore/mobile/gl/link/affirmSender`, // 确认分享
  cancelSender: `${saBs.$apiServer.sc_h5}/kstore/mobile/gl/link/cancelSender`, // 取消分享
  receivedOrder: `${saBs.$apiServer.sc_h5}/kstore/mobile/gl/receivedOrder/comfiremReceiptInfoAjax`, // 订单领取成功更新选中收货地址
  create: `${saBs.$apiServer.sc_h5}/lifeAPI/shortUrl/create`, // 压缩url链接
  query: `${saBs.$apiServer.sc_h5}/lifeAPI/shortUrl/query` // 解压url链接
}

export { saBs }
