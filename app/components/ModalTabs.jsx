import React, { useState } from 'react';
import {
  Card,
  CardBody,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from 'reactstrap';
import classnames from 'classnames';
import { withTranslation } from 'react-i18next';
import Participants from 'components/Participants';
import PropTypes from 'prop-types';

const ModalTabs = ({ data }) => {
  const [activeTab, toggleTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) {
      toggleTab(tab);
    }
  };

  return (
    <Col md={12} lg={12} xs={12}>
      <Card>
        <CardBody>
          <div className="card__title">
            <h5 className="subhead">
              Use default tabs with classes
              <span className="red-text">
                {' '}
                tabs--vertical tabs--vertical-colored
              </span>
            </h5>
          </div>
          <div className="tabs tabs--vertical tabs--vertical-colored">
            <div className="tabs__wrap">
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === '1' })}
                    onClick={() => {
                      toggle('1');
                    }}
                  >
                    Инфо
                  </NavLink>
                </NavItem>
                <NavItem className="no-wrap">
                  <NavLink
                    className={classnames({ active: activeTab === '2' })}
                    onClick={() => {
                      toggle('2');
                    }}
                  >
                    Участники
                  </NavLink>
                </NavItem>
                <NavItem className="no-wrap">
                  <NavLink
                    className={classnames({ active: activeTab === '3' })}
                    onClick={() => {
                      toggle('3');
                    }}
                  >
                    Offers
                  </NavLink>
                </NavItem>
                <NavItem className="no-wrap">
                  <NavLink
                    className={classnames({ active: activeTab === '4' })}
                    onClick={() => {
                      toggle('4');
                    }}
                  >
                    Refounds
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                  <h4 className="subhead mb-1">
                    Председатель:{' '}
                    <span className="dark-text">
                      {data.chairman_displayname}
                    </span>
                  </h4>

                  <h4 className="subhead mb-1">
                    Ответственный:{' '}
                    <span className="dark-text">
                      {data.responsible_displayname}
                    </span>
                  </h4>

                  <h4 className="subhead mb-1">
                    Департамент:{' '}
                    <span className="dark-text">{data.responsible_dept}</span>
                  </h4>
                </TabPane>
                <TabPane tabId="2">
                  <p>
                    <Participants vcParts={data.vc_parts} />
                  </p>
                </TabPane>
                <TabPane tabId="3">
                  <p>
                    Direction has strangers now believing. Respect enjoyed gay
                    far exposed parlors towards. Enjoyment use tolerably
                    dependent listening men. No peculiar in handsome together
                    unlocked do by.
                  </p>
                </TabPane>
                <TabPane tabId="4">
                  <p>
                    Direction has strangers now believing. Respect enjoyed gay
                    far exposed parlors towards. Enjoyment use tolerably
                    dependent listening men. No peculiar in handsome together
                    unlocked do by. Article concern joy anxious did picture sir
                    her.
                  </p>
                </TabPane>
              </TabContent>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

ModalTabs.propTypes = {
  data: PropTypes.object,
};

export default withTranslation('common')(ModalTabs);
