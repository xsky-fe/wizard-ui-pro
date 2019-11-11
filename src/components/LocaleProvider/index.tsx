
import React from 'react';
import { IntlProvider } from 'react-intl';
import zh_CN from '../../locales/zh-CN';
import en_US from '../../locales/en-US';

type Locale = 'zh-CN' | 'en-US';

type Info = {
  [key in Locale]: {
    appLocale: 'en' | 'zh',
    appMessages: any
  };
};

const localeInfo: Info = {
  'zh-CN': {
    appLocale: 'zh',
    appMessages: zh_CN,
  },
  'en-US': {
    appLocale: 'en',
    appMessages: en_US,
  },
};

interface Props {
  locale: Locale,
  children: React.ReactNode,
}

export default function LocaleProvider(props: Props) {
  const { locale, children } = props;
  const myLocale = localeInfo[locale];
  return (
    <IntlProvider locale={myLocale.appLocale} messages={myLocale.appMessages}>
      {children}
    </IntlProvider>
  );
}
