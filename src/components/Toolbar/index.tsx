import React from 'react';
import { ButtonToolbar, Button, DropdownButton, Modal } from 'wizard-ui';
import { FormattedMessage } from 'react-intl';

export default () => {
  // @ts-ignore
  const operate: string = <FormattedMessage id="app.list.operate" />;
  // @ts-ignore
  const create: string = <FormattedMessage id="app.list.create" />
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(true);
  const handleHide = () => setShow(false);
  return (
    <>
      <ButtonToolbar>
        <Button bsStyle="primary" onClick={handleClick}>
          {create}
        </Button>
        <DropdownButton
          title={operate}
          id="dropdown-operations"
          bsStyle="info"
          modifer="table-toolbar"
          menu={[
            'operate-1',
            { key: 'menu2', title: 'operate-2', children: ['operate-2-1', 'operate-2-2'] },
            'operate-3'
          ]}
        />
      </ButtonToolbar>
      <Modal
        title={create}
        show={show}
        onHide={handleHide}
        onOk={handleHide}
      >
        <p>内容 1</p>
        <p>内容 2</p>
      </Modal>
    </>
  )
}