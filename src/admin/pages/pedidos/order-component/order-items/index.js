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
        expandIcon={({ isActive }) => <ArrowRightIcon rotate={isActive ? 90 : 0} />}
        className="site-collapse-custom-collapse"
        expandIconPosition="right"
      >
        <Panel header={ItemTitle()} key="1" className="site-collapse-custom-panel">
          <ItemContent />
        </Panel>
        <Panel header={ItemTitle()} key="2" className="site-collapse-custom-panel">
          <ItemContent />
        </Panel>
        <Panel header={ItemTitle()} key="3" className="site-collapse-custom-panel">
          <ItemContent />
        </Panel>
      </Collapse>
    </Container>
  );
};

export default OrderTitles;
