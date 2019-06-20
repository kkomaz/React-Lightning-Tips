import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import { ICONS } from './constants'

/* eslint-disable */
const Icon = (props) => {
  const {
    linkClassName,
    icons,
    id,
    className,
    style,
    ariaLabel,
    linkStyles,
    color
  } = props;

  const styles = _.isEmpty(style) ? {
    svg: {
      display: 'inline-block',
      verticalAlign: 'middle',
      fill: props.color,
    },
  } : style;

  const updatedLinkStyles = {
    ...linkStyles,
    ...styles,
  }

  const viewBox = _.get(icons, 'icon.viewBox', null) || _.get(ICONS, props.icon, {}).viewBox;
  const iconImage = _.get(icons, 'icon.markup', null) || _.get(ICONS, props.icon, {}).markup;

  const onKeyPress = (e) => {
    e.preventDefault();
    if (e.charCode === 13 || e.charCode === 32) {
      props.onClick(e);
    }
  };

  if (_.isEmpty(viewBox) || _.isEmpty(iconImage)) {
    return <p>Icon viewBox or markup does not exist!</p>;
  }

  if (props.onClick && !props.disabled) {
    return (
      <a
        className={linkClassName}
        role="button"
        aria-label={ariaLabel}
        onClick={props.onClick}
        tabIndex={0}
        onKeyPress={onKeyPress}
        style={updatedLinkStyles}
        onMouseEnter={props.onMouseEnter}
      >
        <svg
          id={id}
          style={styles.svg}
          width={`${props.size}px`}
          height={`${props.size}px`}
          viewBox={viewBox}
        >
          {iconImage}
        </svg>
      </a>
    );
  }

  return (
    <svg
      id={id}
      style={styles.svg}
      width={`${props.size}px`}
      height={`${props.size}px`}
      viewBox={viewBox}
    >
      {iconImage}
    </svg>
  );
};

Icon.propTypes = {
  ariaLabel: PropTypes.string,
  id: PropTypes.string,
  icon: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
  onClick: PropTypes.func,
  icons: PropTypes.object,
  style: PropTypes.object,
  disabled: PropTypes.bool,
};

Icon.defaultProps = {
  ariaLabel: null,
  id: '',
  icon: '',
  color: '',
  size: 30,
  onClick: null,
  icons: {},
  style: {},
  disabled: false,
  linkStyles: {}
};

export default Icon;
