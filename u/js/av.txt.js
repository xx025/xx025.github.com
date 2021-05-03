function name() {
    let phone = prompt("输入手机号");
    if (phone != null) {
        if (phone.length == 11) {

            let acvcode = prompt("\n输入激活码,没有激活码点击取消");
            if (acvcode != null) {
                if (acvcode / 2 + 12797979797 == phone) {
                    return true;
                } else {
                    location.href = "https://www.loefairy.top/u/xca.html?" + phone;
                }
            } else {
                location.href = "https://www.loefairy.top/u/xca.html?" + phone;
            }
        } else {
            location.reload()
        }
    } else {
        location.reload()
    }
}
name()