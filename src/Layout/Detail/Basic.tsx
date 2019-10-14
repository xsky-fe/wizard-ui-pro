import React from 'react';
import { Breadcrumb, BreadcrumbItem, Icon } from 'wizard-ui';

export default () => {
  return (
    <>
      Basic detail
      <Breadcrumb>
        <BreadcrumbItem>
          <Icon type="user"/>
          资源列表1
        </BreadcrumbItem>
        <BreadcrumbItem>资源列表2</BreadcrumbItem>
      </Breadcrumb>
    </>
  )
}