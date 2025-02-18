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
      name: '小谭',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o9QWt5083hSDzUmrGvWlY3_Jc6-c',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'OLyqcpJg_5_ntN7tZDeM8IYitHOzO3KE0ezYxv4cupU',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      CALLBACK_USERS: [
    {
      // 一般都填自己
      name: '自己',
      // 自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o9QWt58YZgHQB3RhP3H64d9lO0RE',
    }
    // 你可以不断按格式往下增加
    // ...
  ],
      horoscopeDate: '12-27',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '小谭', year: '2002', date: '03-13',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
      
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '06-14',
        },
         {
          type: '节日', name: '距离四级考试', year: '2022', date: '10-9',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-06-15' },
        // 结婚纪念日
     
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '',
    }
  ],

}

module.exports = USER_CONFIG
