import React from 'react';
import { Badge, Icon, Loader } from 'wizard-ui';
import { FormattedMessage } from 'react-intl';
import './style.scss';

export default (props: any) => {
  const { data } = props;
  // @ts-ignore
  const status: string = <FormattedMessage id={`status.${data.status}`} />;
  // @ts-ignore
  const actionStatus: string = <FormattedMessage id={`status.${data.action_status}`} />;
  return (
    <div className="Basic">
      <h1><FormattedMessage id="app.attr" /></h1>
      <div className="Basic__item">
        <span>
          <Icon type="catalog" />
          {data.name}
        </span>
        <Badge count={status} status={data.status} />
      </div>
      <h2><span><FormattedMessage id="app.info" /></span></h2>
      <div className="Basic__item">
        <span className="Basic__label"><FormattedMessage id="app.info" />：</span>
        {data.description}
      </div>
      <div className="Basic__item">
        <span className="Basic__label"><FormattedMessage id="app.status" />：</span>
        <Badge count={actionStatus} status={data.action_status}  />
      </div>
      <div className="Basic__item">
        <span className="Basic__label"><FormattedMessage id="app.update.time" />：</span>
        {data.update_time}
    </div>
    </div>
  )
}
