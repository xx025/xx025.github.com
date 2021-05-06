$(function () {
    $("#btnn").click(function () {
        let phone = $("#phone").val() + "";
        let dingdanhao = document.querySelector("#dingdanhao").value;
        if (phone.length == 11) {
            if (dingdanhao.search('202105') != -1) {
                let id = (phone - 12999999997) * 2;
                let idcode = id;
                let avcode = (idcode / 2 + 202020200) * 2;
                document.querySelector("#acvcode").value = avcode;
                document.querySelector("#mmssg").innerHTML = "请截图保存激活码";
            } else {
                document.querySelector("#mmssg").innerHTML = "订单号不正确";
            }
        } else {
            document.querySelector("#mmssg").innerHTML = "手机号不正确";
        }

    })
})
