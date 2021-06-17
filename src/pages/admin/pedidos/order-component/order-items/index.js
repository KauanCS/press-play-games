import React from 'react';

import {
  ArrowRightIcon,
  Container,
  Collapse,
} from './styles';

import ItemTitle from './item-title';
import ItemContent from './item-content';

const OrderTitles = () => {
  const { Panel } = Collapse;

  return (
    <Container>
      <Collapse
        bordered={false}
        defaultActiveKey={['1']}
        expandIcon={({ isActive }) => <ArrowRightIcon rotate={isActive ? 90 : 0} />}
        className="site-collapse-custom-collapse"
        expandIconPosition="right"
      >
        <Panel header={ItemTitle()} key="1" className="site-collapse-custom-panel">
          <ItemContent />
        </Panel>
        <Panel header="This is panel header 2" key="2" className="site-collapse-custom-panel">
          <ItemContent />
        </Panel>
        <Panel header="This is panel header 3" key="3" className="site-collapse-custom-panel">
          <ItemContent />
        </Panel>
      </Collapse>
    </Container>
  );
};

export default OrderTitles;
