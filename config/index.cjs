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
      name: '小谭',
      id: 'o9QWt58YZgHQB3RhP3H64d9lO0RE',
      useTemplateId: 'g_eFt60aBtYsDXGYqu8ao84nvYk9Jne0egqHvJQtNls	',
      province: '广东',
      city: '清远',
      horoscopeDate: '11.10',
      horoscopeDateType: '今日',
      openUrl: 'https://mp.weixin.qq.com/s?__biz=MzkwMjQwMzY0Mg==&mid=2247483682&idx=1&sn=002e49362ea8432224dd567248eb3045&chksm=c0a74277f7d0cb6192b354626eb1b374c443e112d50cf269ad437c675611e2ef3ea5e107dcd6&token=1205761133&lang=zh_CN#rd',
      festivals: [],
      customizedDateList: [  {"type": "*生日", "name": "小谭", "year": "2002", "date": "3-13"},],
      customizedDateList: [  {"type": "*生日", "name": "小聪", "year": "2002", "date": "7-02"},],
      courseSchedule: null
    },
    

  


    

  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'mPwzpgglbpT0HiwCYat5DrxrMey7NHyXESLo_2XywCY',

  CALLBACK_USERS: [
    {
      name: '偷懒的小蜜蜂',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'osZhI67GIj0AsmiruHSP_-MTjJOk',
      useTemplateId: 'mPwzpgglbpT0HiwCYat5DrxrMey7NHyXESLo_2XywCY',

    }
  ],

}

module.exports = USER_CONFIG

