$(function () {
    $("#btnn").click(function () {
        let phone = $("#phone").val() + "";
        let dingdanhao = document.querySelector("#dingdanhao").value;
        if (phone.length == 11) {
            var date = new Date();
            var seperator1 = "";
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var strDate = date.getDate();
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            var currentdate = year + seperator1 + month + seperator1 + strDate;
            if (dingdanhao.search(currentdate) != -1 && dingdanhao.length > 13) {
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
