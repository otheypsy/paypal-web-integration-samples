import React, { useEffect, useReducer } from 'react';
import Tab from './Tab.component';
import Nav from '../Nav/Nav.component';
import Link from '../Link/Link.component';
import PropTypes from 'prop-types';

const reducer = (state, action) => {
    switch(action.type) {
        case 'initialize': {
            let activeKey = 0;
            state.forEach((tab, key) => {
                if(tab.isActive) activeKey = key
            });
            return action.tabs.map((tab, key) => {
                return {
                    path: key.toString(),
                    label: tab.props.label,
                    isActive: (activeKey === key),
                    children: tab.props.children
                }
            });
        }
        case 'changeActive': {
            return state.map((tab) => {
                tab.isActive = (tab.path === action.key);
                return tab;
            });
        }
        default: {
            return state;
        }
    }
};

const TabSet = (props) => {

    const [tabs, dispatchTabs] = useReducer(reducer, []);

    useEffect(() => {
        dispatchTabs({
            type: 'initialize',
            tabs: props.children
        });
    }, [props.children]);

    const onClick = (key) => {
        dispatchTabs({
            type: 'changeActive',
            key: key
        });
        props.onClick && props.onClick(key);
    }

    return (
        <section className="tab-set">
            <Nav links={tabs} onClick={onClick}>
                {tabs.map(tab =>
                    <Link
                        key={tab.path}
                        to={tab.path}
                        isActive={tab.isActive}
                        onClick={onClick}>
                        {tab.label}
                    </Link>
                )}
            </Nav>
            <div className="tab-content px-3">
                {tabs.map(tab =>
                    <div
                        key={tab.path}
                        className={'tab-pane fade ' + (tab.isActive ? 'active show' : '')}>
                        {tab.children}
                    </div>
                )}
            </div>
        </section>
    );

};

TabSet.propTypes = {
    /** Callback function to return key of clicked tab */
    onClick: PropTypes.func,
    /** Array of Tab components as children */
    children: (props, propName, componentName) => {
        const prop = props[propName];
        let error = null;
        React.Children.forEach(prop, (child) => {
            if (child.type !== Tab) {
                error = new Error('`' + componentName + '` children should be of type `Tab`.');
            }
        });
        return error
    }
};

TabSet.defaultProps = {
    children: []
};

export default TabSet;
