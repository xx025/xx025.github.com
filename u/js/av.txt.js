function name() {
    let phone = prompt("输入手机号");
    if (phone.length == 11) {
        let acvcode = prompt("输入激活码,激活码需要打赏获取");
        if (acvcode / 2 + 12797979797 == phone) {
            return true;
        } else {
            location.reload();
        }
    } else {
        location.reload();
    }
}
name()