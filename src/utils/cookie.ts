
import Cookies from 'js-cookie';

export function clearCookie() {
  Cookies.remove('datas')
}

type Values = {
  name: string,
  password: string,
}

export function setCookie(values: Values) {
  // 设置过期时间为 1 天
  Cookies.set('datas', { expires: 1 });
  Cookies.set('datas', values);
}

export function getCookie(): Values {
  return JSON.parse(Cookies.get('datas') || '{}');
}