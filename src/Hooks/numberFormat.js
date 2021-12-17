const numberFormatter = (number, type) => {
  if (!number) {
    return '';
  }
  number = number.replace(/[^0-9]/g, '');
  let result = [];
  let restNumber = '';
  if (type === 'phone') {
    // 전화번호
    // 02로 시작되는 지역번호
    if (number.startsWith('02')) {
      result.push(number.substr(0, 2));
      restNumber = number.substring(2);
    } else if (number.startsWith('1')) {
      /// 지역 번호가 없는 경우
      restNumber = number;
    } else {
      // 3자리 지역번호 10글자
      // 000-0000-0000
      result.push(number.substr(0, 3));
      restNumber = number.substring(3);
    }
    // 7자리가 남았을 때
    if (restNumber.length === 7) {
      result.push(restNumber.substring(0, 3));
      result.push(restNumber.substring(3));
    } else {
      result.push(restNumber.substring(0, 4));
      result.push(restNumber.substring(4));
    }
  } else {
    // 사업자 번호
    result.push(number.substr(0, 3));
    restNumber = number.substring(3);
    result.push(restNumber.substring(0, 2));
    result.push(restNumber.substring(2));
  }
  return result.filter(num => num).join('-');
};

export default numberFormatter;
