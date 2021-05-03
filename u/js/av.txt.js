function name() {
    let phone = prompt("输入手机号");
    if (phone != null) {
        if (phone.length == 11) {

            let id = (account - 12999999997) * 2
            let acvcode = prompt("输入激活码,激活码联系微信:wandouled,发红包两元\n使用乐创空间刷课的同学激活码还是用于激活的激活码\n未使用的请提供此id:" + id);
            if (acvcode / 2 + 12797979797 == phone) {
                return true;
            } else {
                location.reload();
            }
        } else {
            location.reload();
        }
    } else {
        location.reload();
    }
}
name()