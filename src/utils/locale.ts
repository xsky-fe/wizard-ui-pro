
type Locale = 'en-US' | 'zh-CN';

const isClient = typeof window === 'object';

export function setLocale(locale: Locale) {
  if (isClient) {
    window.localStorage.setItem('lang', locale);
    window.location.reload();
  }
}

export function getLocale(): Locale {
  if(isClient) {
    if (!window.localStorage.getItem('lang')) {
      window.localStorage.setItem('lang', "zh-CN");
    }
    return window.localStorage.getItem('lang') as Locale;
  }
  return 'zh-CN';
}