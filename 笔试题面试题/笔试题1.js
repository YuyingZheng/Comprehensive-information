function distinct () {
  var arr = this,

      result = [],

      i, j,
      len = arr.length

      for (i = 0; i< len; i++) {
        for (j =i+1; j< len; j++) {
            if(arr[i] === arr[j]) {
                j = ++i;
            }
        }
        result.push(arr[i]);
      }
}
 [1, 2, 2, 3, 3, 4]


 {
    "code": 0,
    "message": "success",
    "data": [
      {
        "rowState": 0,
        "id": "1",
        "name": "国贸大管家"
      },
      {
        "rowState": 0,
        "id": "2",
        "name": "杭州中节能"
      },
      {
        "rowState": 0,
        "id": "3",
        "name": "上海中锐"
      },
      {
        "rowState": 0,
        "id": "4",
        "name": "即墨经济开发区"
      },
      {
        "rowState": 0,
        "id": "5",
        "name": "湖南嘉德"
      },
      {
        "rowState": 0,
        "id": "6",
        "name": "深圳合众集团"
      },
      {
        "rowState": 0,
        "id": "7",
        "name": "云星数据重庆公司南京某政府园区"
      },
      {
        "rowState": 0,
        "id": "8",
        "name": "北京中关村产业技术联盟"
      },
      {
        "rowState": 0,
        "id": "9",
        "name": "深圳星河置业"
      },
      {
        "rowState": 0,
        "id": "10",
        "name": "招商局芯云谷"
      },
      {
        "rowState": 0,
        "id": "11",
        "name": "厦门火炬高新区"
      },
      {
        "rowState": 0,
        "id": "12",
        "name": "广州乐天"
      },
      {
        "rowState": 0,
        "id": "13",
        "name": "深圳中开院"
      },
      {
        "rowState": 0,
        "id": "14",
        "name": "重庆立洋"
      },
      {
        "rowState": 0,
        "id": "15",
        "name": "北大科技园"
      },
      {
        "rowState": 0,
        "id": "16",
        "name": "昆明空港"
      }
    ],
    "success": true
  }