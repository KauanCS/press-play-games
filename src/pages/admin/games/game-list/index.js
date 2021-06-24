import React from 'react';

import {
  ArrowRightIcon,
  Container,
  Collapse,
} from './styles';

import GameInfo from './game-info';

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
        defaultActiveKey="1"
      >
        <Panel header={GameTitle} key="1" className="site-collapse-custom-panel">
          <GameInfo />
        </Panel>
        <Panel header={GameTitle} key="2" className="site-collapse-custom-panel">
          <GameInfo />
        </Panel>
        <Panel header={GameTitle} key="3" className="site-collapse-custom-panel">
          <GameInfo />
        </Panel>
      </Collapse>
    </Container>
  );
};

export default GameList;
