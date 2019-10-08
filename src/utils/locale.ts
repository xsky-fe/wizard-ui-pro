
type Locale = 'en-US' | 'zh-CN';

export function setLocale(locale: Locale) {
  window.localStorage.setItem('lang', locale);
  window.location.reload();
}

export function getLocale(): Locale {
  if (!window.localStorage.getItem('lang')) {
    window.localStorage.setItem('lang', "zh-CN");
  }
  return localStorage.getItem('lang') as Locale;
}