import React from 'react';
import PropTypes from 'prop-types';

import {
  ArrowRightIcon,
  Container,
  Collapse,
} from './styles';

import ItemTitle from './item-title';
import ItemContent from './item-content';

const OrderContainer = ({ orders }) => {
  const { Panel } = Collapse;

  console.log(orders);

  return (
    <Container>
      <Collapse
        bordered={false}
        expandIcon={({ isActive }) => <ArrowRightIcon rotate={isActive ? 90 : 0} />}
        className="site-collapse-custom-collapse"
        expandIconPosition="right"
      >
        {orders.map((item) => (
          <Panel header={ItemTitle(item)} key="1" className="site-collapse-custom-panel">
            <ItemContent />
          </Panel>
        ))}
      </Collapse>
    </Container>
  );
};

OrderContainer.defaultProps = {
  orders: [],
};

OrderContainer.propTypes = {
  orders: PropTypes.array,
};

export default OrderContainer;
