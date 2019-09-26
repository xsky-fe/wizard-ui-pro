import React from 'react';
import { Badge, Icon, UsageBar } from 'wizard-ui';
import 'wizard-ui/lib/style/index.scss';

const App = () => {
  return (
    <React.Fragment>
      <Badge count="关闭" status="default" />
      <Icon type="os-search-role" />
      <UsageBar percent={0.16} />
    </React.Fragment>
  )
}

export default App;