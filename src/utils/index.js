// 判断属性是否为空
export function notNull(obj) {
    for(let i in obj) {
        if(obj[i]==='') {
            return false
        }
    }
    return true
}

// 本地存储个人信息
export function saveUserInfo(username,nickname,password,age,gender,hometown,signature) {
    localStorage.setItem('username',username)
    localStorage.setItem('nickname',nickname)
    localStorage.setItem('password',password)
    localStorage.setItem('age',age)
    localStorage.setItem('gender',gender)
    localStorage.setItem('hometown',hometown)
    localStorage.setItem('signature',signature)
}

// 清除个人信息
export function clearUserInfo() {
    window.localStorage.removeItem('username')
    window.localStorage.removeItem('nickname')
    window.localStorage.removeItem('gender')
    window.localStorage.removeItem('age')
    window.localStorage.removeItem('hometown')
    window.localStorage.removeItem('signature')
}

// 按钮切换
export function changeTab(id,refs) {
    if(id === 1) {
        refs.tab1.style.background = "none";
        refs.tab2.style.background = "#eeecec";
        refs.main1.style.display = "none";
        refs.main2.style.display = "flex";
    } else {
        refs.tab2.style.background = "none";
        refs.tab1.style.background = "#eeecec";
        refs.main2.style.display = "none";
        refs.main1.style.display = "block";          
    }
}