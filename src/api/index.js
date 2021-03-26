import http from './http'

/**
 * 
 * @param {*} userName 
 * @param {*} password 
 * @returns 用户界面
 */
// 用户登录
export const userLogin = (userName, password) => http.get('/user/login', {userName,password})
// 用户注册
export const userRegister = (userName, password) => http.get('/user/register', {userName,password})
// 用户修改密码
export const userChangePwd = (id,password,newPassword) => http.get('/user/changePwd', {id,password,newPassword})
// 用户修改用户名
export const userChangeUserName = (id, userName) => http.get('/user/changeUserName', {id, userName})
// 用户注销
export const userClose = (id) => http.get('/user/close', {id})

/**
 * 
 * @param {*} id 
 * @returns 搜索界面
 */
// 搜索历史
export const searchHistory = (id) => http.get('/search/history', {id})
// 搜索
export const searchSearch = (id,searchKey) => http.get('/search/search', {id, searchKey})
// 热门搜索
export const searchHotSearch = (typeKey) => http.get('/search/hotSearch', {typeKey})

/**
 * 
 * @param {*} adminName 
 * @param {*} password 
 * @returns 管理员界面
 */
// 管理员登录
export const adminLogin = (adminName, password) => http.get('/admin/login', {adminName,password})
// 管理员修改密码
export const adminChangePwd = (adminID, password, newPassword) => http.get('/admin/changePwd', {adminID, password, newPassword})
// 管理员更新热搜
export const adminStatistics = (adminID) => http.get('/admin/statistics', {adminID})
// 获取所有用户
export const adminGetAllUser = (adminID) => http.get('/admin/getAllUser', {adminID})
// 更改用户数据
export const adminRenewUser = (
  adminID,
  id,
  userName,
  password,
  loginDate,
  status) => http.get('/admin/renewUser', {adminID,id,userName,password,loginDate,status})
// 获取所有管理员
export const adminGetAllAdmin = (adminID) => http.get('/admin/getAllAdmin', {adminID})
// 更改管理员数据
export const adminRenewAdmin = (adminID, adminName, password, permission) => http.get('/admin/renewAdmin', {adminID, adminName, password, permission})