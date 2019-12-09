import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import OutsideClickContext from "./OutsideClickContext";

export const withOutsideClick = BaseComponent =>
  class ComposeComponent extends PureComponent {
    static propTypes = {
      ...BaseComponent.propTypes
    };

    static defaultProps = {
      ...BaseComponent.defaultProps
    };

    render() {
      return (
        <OutsideClickContext.Consumer>
          {({ subscribeToClickOutside, unsubscribeFromClickOutside }) => {
            return (
              <BaseComponent
                {...this.props}
                subscribeToClickOutside={subscribeToClickOutside}
                unsubscribeFromClickOutside={unsubscribeFromClickOutside}
              />
            );
          }}
        </OutsideClickContext.Consumer>
      );
    }
  };

export const withOutsideClickPropTypes = {
  subscribeToClickOutside: PropTypes.func.isRequired,
  unsubscribeFromClickOutside: PropTypes.func.isRequired
};

export const withOutsideClickDefaultProps = {
  subscribeToClickOutside: () => {},
  unsubscribeFromClickOutside: () => {}
};
