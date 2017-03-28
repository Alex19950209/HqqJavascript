
var Utils = {
    quickSort:function(arr){
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
    unique:function(arr){
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
    setCookie:function(name,value,path,exp,type){
        if(type){
            localStorage.setItem(name,value);
        }else{
            var exdate = new Date();
            exdate.setTime(exdate.getTime() + exp * 24 * 60 * 60 * 1000);
            document.cookie = name + "=" + escape(value) + ";expires=" + exdate.toGMTString() + ";path=" + (path == ''? '' : path);
        }

    },
    getCookie:function(name,type){
        if (type) {
            return localStorage.getItem(name);
        } else {
            var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
            if (arr != null) return unescape(arr[2]);
            return null;
        } 
    }
    
    
    
    
}