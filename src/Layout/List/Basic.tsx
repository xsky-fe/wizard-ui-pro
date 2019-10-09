import React from 'react';
import { Tabs } from 'wizard-ui';

export default () => {
  return (
    <>
      <Tabs
        tabs={[
          { title: '标题1', key: 'key-1', children: <div>第1个tab</div> },
          { title: '标题2', key: 'key-2', children: <div>第2个tab</div> },
          { title: '标题3', key: 'key-3', children: <div>第3个tab</div> },
          { title: '标题4', key: 'key-4', children: <div>第4个tab</div> }
        ]}
      />
    </>
  )
}