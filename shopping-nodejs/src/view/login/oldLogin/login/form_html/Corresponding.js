// 若职团电商平台直接提供链接给用户，登录页面分为有白名单校验及无白名单校验两种模式。
// 1、无白名单校验，需填写的字段有：手机号码、图形验证码、短信验证码。
//	白名单校验，分4种校验类型：
// 2、手机号做为白名单，需填写的字段有：手机号码、图形验证码、短信验证码。请先校验手机号是否为白名单，再进行短信验证码的触发；
// 3.	员工工号加员工姓名做为白名单，需填写的字段有：员工工号、员工姓名、手机号码、短信验证码。请先校验员工工号和员工姓名是否为白名单，再进行短信验证码的触发；
// 4.	员工证件类型加员工证件号做为白名单，需填写的字段有：员工证件类型、员工证件号、手机号码、短信验证码。请先校验员工证件类型和员工证件号是否为白名单，再进行短信验证码的触发；
// 5.	员工证件号后六位加员工姓名做为白名单，需填写的字段有：员工证件号后六位、员工姓名、手机号码、短信验证码。请先校验员工证件号后六位和员工姓名是否为白名单，再进行短信验证码的触发；
// 6.	员工证件号加员工姓名做为白名单，需填写的字段有：员工证件号、员工姓名、手机号码和短信验证码。请先校验员工证件号和员工姓名是否为白名单，再进行短信验证码的触发。
// 若跟对方系统进行对接，通过单点登录的方式跳转到职团电商平台的投保页面，需带入的信息以各企业提供的为准。