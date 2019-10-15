import React from 'react';
import { Icon, Tooltip, Panel, Badge } from 'wizard-ui';
import Toolbar from '../../components/Toolbar';
import { Link } from 'react-router-dom';
import Table from 'rc-table';
import listDatas from '../../mock/list';
import { FormattedMessage } from 'react-intl';
import './style.scss';

const columns = [
  { title: <span><FormattedMessage id="app.resname" /><Icon type="filter"/></span>, dataIndex: 'name', key: 'name' },
  { title: <FormattedMessage id="app.desc" />, dataIndex: 'description', key: 'description' },
  { title: <FormattedMessage id="app.status" />, dataIndex: 'status', key: 'status' },
  { title: <FormattedMessage id="app.update.time" />, dataIndex: 'update_time', key: 'update_time' },
];

const data = listDatas.list.map((d: any) => {
  // @ts-ignore
  const status: string = <FormattedMessage id={`status.${d.status}`} />;
  return {
    ...d,
    name: <Link to="/detail-basic">{d.name}</Link>,
    status: <Badge count={status} status={d.status} />
  }
});

export default () => {
  return (
    <>
      <div className="InfoBar">
        <Icon type="nfs-gateway"/>
        <span><FormattedMessage id="app.detail.list" /></span>
        <Tooltip iconAlign="middle" placement="right"><FormattedMessage id="app.list.mess" /></Tooltip>
      </div>
      <Panel className="List__panel">
        <div className="Toolbar">
          <Toolbar />
        </div>
        <Table
          prefixCls="table"
          columns={columns}
          expandedRowRender={(record: any) => record.title}
          data={data}
        />
      </Panel>
    </>
  )
}