import React from 'react';

import {
  ArrowRightIcon,
  Container,
  Collapse,
} from './styles';

const GameList = () => {
  const { Panel } = Collapse;
  const GameTitle = 'A way out';
  return (
    <Container>
      <Collapse
        bordered={false}
        expandIcon={({ isActive }) => <ArrowRightIcon rotate={isActive ? 90 : 0} />}
        className="site-collapse-custom-collapse"
        expandIconPosition="right"
      >
        <Panel header={GameTitle} key="1" className="site-collapse-custom-panel">
          AAAA
        </Panel>
        <Panel header={GameTitle} key="2" className="site-collapse-custom-panel">
          AAAA
        </Panel>
        <Panel header={GameTitle} key="3" className="site-collapse-custom-panel">
          AAAA
        </Panel>
      </Collapse>
    </Container>
  );
};

export default GameList;
