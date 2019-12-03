import { request } from './axios'

// 用户注册
export function register(msg) {
    return request({
        method: 'post',
        url: '/user/register',
        data: msg
    })
}

// 用户登录
export function login(msg) {
    return request({
        method: 'post',
        url: '/user/login',
        data: msg
    })
}

// 用户更新信息
export function update(msg) {
    return request({
        method: 'post',
        url: '/user/update',
        data: msg
    })
}

// 获取食堂信息
export function getCanteenList() {
    return request({
        method: 'get',
        url: '/list/canteenlist'
    })
}

// 获取餐口信息
export function getStoreList(id) {
    return request({
        method: 'post',
        url: '/list/storelist',
        data: id
    })
}

// 获取食物信息
export function getFoodList(id) {
    return request({
        method: 'post',
        url: '/list/foodlist',
        data: id
    })
}

// 获取评论信息
export function getCommentList(id) {
    return request({
        method: 'post',
        url: '/list/commentlist',
        data: id
    })
}

// 发送评论
export function sendComment(msg) {
    return request({
        method: 'post',
        url: '/list/sendcomment',
        data: msg
    })
}

// 删除评论
export function deleteComment(id) {
    return request({
        method: 'post',
        url: '/list/deletecomment',
        data: id
    })
}


// 点赞
export function thumbUp(id) {
    return request({
        method: 'post',
        url: '/food/thumbup',
        data: id
    })
}

// 随机食物
export function getRandomFood() {
    return request({
        method: 'get',
        url: '/food/randomlist'
    })
}

// 获取档口信息
export function getStoreInfo(id) {
    return request({
        method: 'post',
        url: '/food/getstore',
        data: id
    })
}
