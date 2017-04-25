
var Utils = {
    quickSort: function(arr){//快速排序法
        if(arr.length < 1) {return arr;}
        var pivotIndex = Math.floor(arr.length / 2),
            pivot = arr.splice(pivotIndex,1)[0],
            left = [],
            right = [];
        for(var i = 0;i < arr.length;i++){
            if(arr[i] < pivot){
                left.push(arr[i]);
            }else{
                right.push(arr[i]);
            }
        }
        return this.quickSort(left).concat([pivot],this.quickSort(right));
    },
    unique: function(arr){//数组去重
        if(arr.length < 1) {return arr;}
        var hash = {}, arr1 = [];
        for(var i = 0;i < arr.length;i++){
            if(!hash[arr[i]]){
                hash[arr[i]] = true;
                arr1.push(arr[i]);
            }
        }
        return arr1;
    },
    setCookie: function(name,value,path,exp,type){//存储cookie
        if(type){
            localStorage.setItem(name,value);
        }else{
            var exdate = new Date();
            exdate.setTime(exdate.getTime() + exp * 24 * 60 * 60 * 1000);
            document.cookie = name + "=" + escape(value) + ";expires=" + exdate.toGMTString() + ";path=" + (path == ''? '' : path);
        }

    },
    getCookie: function(name,type){//获取cookie
        if (type) {
            return localStorage.getItem(name);
        } else {
            var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
            if (arr != null) return unescape(arr[2]);
            return null;
        } 
    },
    timeStamp: function(stamp){//仿微信返回时间戳
        if(!stamp) return;
        stamp = typeof stamp == 'string'? stamp : stamp.toString();
        if(stamp.length !== 10 && stamp.length !== 13) return 'error';
        stamp = stamp.length == 10 ? parseInt(stamp) * 1000 : parseInt(stamp);

        var now = new Date(),
            month = now.getMonth() +　1,
            days = now.getDate(),
            hours = now.getHours(),
            minutes = now.getMinutes(),
            stime = new Date(stamp),
            syear = stime.getFullYear(),
            smonth = stime.getMonth() + 1,
            sdays = stime.getDate(),
            sday = stime.getDay(),
            shours = stime.getHours(),
            sminutes = stime.getMinutes(),
        change = function(obj){
            var j,
                n = [0,1,2,3,4,5,6],
                a = ['日','一','二','三','四','五','六'];
            for(var i = 0; i < n.length;i++){
                if(obj == n[i]){
                    j = i;
                    break
                }
            }
            return a[i];
        },
        getDate = function(){
            if(smonth !== month) return syear + '年' + smonth + '月' + sdays + '日';
            if(days == sdays) return '';
            if(days - sdays == 1) return '昨天';
            if( 1 < days - sdays && days - sdays <= 7) return '星期' + change(sday);
            if(7 < days - sdays) return syear + '年' + smonth + '月' + sdays + '日';
        },
        getquantum = function(){
            if( 0 <= shours && shours < 6) return '凌晨';
            if( 6 <= shours && shours< 12) return '上午';
            if( 12 <= shours && shours< 24) return '下午';
        },
        getHours = function(){
            return shours = shours > 12 ? shours - 12 : shours;
        },
        double = function(o){
            return o = o < 10 ? '0' + o : o;
        }
        if(getDate() == '') return getquantum() + ' ' + getHours() + ':'+ double(sminutes);
        return getDate() + ' ' + getquantum() + ' ' + getHours() + ':'+ double(sminutes);       
    },
    formatJSON: function (jsonStr) {//构造由字符串描述的JavaScript值或对象
        return "JSON" in window ? JSON.parse(jsonStr) : eval("(" + jsonStr + ")");
    }
    
    
    
}