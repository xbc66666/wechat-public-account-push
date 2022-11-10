/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxf081df0f9bde9974',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '7d93e4a6d29f197819cf52b3e0855a53',

  PROVINCE: '广东',
  CITY: '清远',

  USERS: [
    {
      // 想要发送的人的名字
      name: '老婆0',
      // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o9QWt58YZgHQB3RhP3H64d9lO0RE',
      // 你想对他发送的模板消息的模板ID
      useTemplateId: 'g_eFt60aBtYsDXGYqu8ao84nvYk9Jne0egqHvJQtNls	',
      // 所在省份或城市，也可以不填
      province: '惠州',
      // 所在城市或县区
      city: '惠阳',
      // 新历生日, 仅用作获取星座运势, 格式必须
      horoscopeDate: '12-27',
      // 获取什么时候的星座运势，可选：['今日', '明日', '本周', '本月', '今年'], 留空则随机
      horoscopeDateType: '今日',
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: 'https://wangxinleo.cn',
      // 专属节日提醒，如果你在这里填写了节日提醒，就不会执行FESTIVALS的提醒了, 和FESTIVALS的配置方法相同，可以往下查看，我这里就不重复写了
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '老婆', year: '1996', date: '09-09',
        },
        {
          type: '节日', name: '结婚纪念日', year: '2020', date: '09-03',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '李四', year: '1996', date: '09-31',
        },
        {
          type: '节日', name: '被搭讪纪念日', year: '2021', date: '09-01',
        }
      ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'mPwzpgglbpT0HiwCYat5DrxrMey7NHyXESLo_2XywCY',

  CALLBACK_USERS: [
    {
      name: '偷懒的小蜜蜂',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o9QWt58YZgHQB3RhP3H64d9lO0RE',
      useTemplateId: 'g_eFt60aBtYsDXGYqu8ao84nvYk9Jne0egqHvJQtNls',

    }
  ],

}

module.exports = USER_CONFIG

