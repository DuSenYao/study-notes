// 省份代码
const PROVINCES = {
  11: '北京',
  12: '天津',
  13: '河北',
  14: '山西',
  15: '内蒙古',
  21: '辽宁',
  22: '吉林',
  23: '黑龙江',
  31: '上海',
  32: '江苏',
  33: '浙江',
  34: '安徽',
  35: '福建',
  36: '江西',
  37: '山东',
  41: '河南',
  42: '湖北',
  43: '湖南',
  44: '广东',
  45: '广西',
  46: '海南',
  50: '重庆',
  51: '四川',
  52: '贵州',
  53: '云南',
  54: '西藏',
  61: '陕西',
  62: '甘肃',
  63: '青海',
  64: '宁夏',
  65: '新疆',
  71: '台湾',
  81: '香港',
  82: '澳门'
};

/**
 * 省份校验
 * @param {String} val
 * @returns {Boolean}
 */
function checkProv(val) {
  let pattern = /^[1-9][0-9]/;

  if (pattern.test(val) && PROVINCES[val]) return true;

  console.log('地区码不符');
  return false;
}

/**
 * 出生日期校验
 * @param {String} val
 * @returns {Boolean}
 */
function checkDate(val) {
  let pattern = /^(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)$/;

  if (pattern.test(val)) {
    let year = val.substring(0, 4);
    let month = val.substring(4, 6);
    let day = val.substring(6, 8);
    let date = new Date(`${year}-${month}-${day}`);

    if (date && date.getMonth() === parseInt(month) - 1) {
      return true;
    }
  }

  console.log('日期码不符');
  return false;
}

/**
 * 校验码校验
 * @param {String} val
 * @returns {Boolean}
 */
function checkCode(val) {
  // 校验码为第十八位，根据前十七位计算得出，前十七位分别乘以不同的系数，系数分别为：7、9、10、5、8、4、2、1、6、3、7、9、10、5、8、4、2
  // 将这 17 位数字和系数相乘的结果相加之和除以 11，看余数是多少
  // 余数只可能有 0 1 2 3 4 5 6 7 8 9 10 这 11 个数字，其分别对应的校验码为 1 0 X 9 8 7 6 5 4 3 2
  let p = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
  let factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
  let parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
  let code = val.substring(17);

  if (p.test(val)) {
    let sum = 0;
    for (let i = 0; i < 17; i++) {
      sum += Number(val[i]) * factor[i];
    }

    if (parity[sum % 11] === code.toUpperCase()) {
      return true;
    }
  }
  console.log('校验码不符');
  return false;
}

/**
 * 身份证校验
 * @param {String} val
 * @returns {Boolean}
 */
function checkID(val) {
  if (checkCode(val)) {
    let date = val.substring(6, 14);

    if (checkDate(date) && checkProv(val.substring(0, 2))) {
      console.log('合法');
      return true;
    }
  }

  return false;
}

checkID('11010519491231002X'); // true
checkID('110105194912310021'); // false
