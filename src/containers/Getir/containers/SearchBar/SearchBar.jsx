/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import ClearIcon from '@material-ui/icons/Clear';
import SearchIcon from '@material-ui/icons/Search';
import { grey } from '@material-ui/core/colors';
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';

const styles = {
  root: {
    height: 48,
    display: 'flex',
    justifyContent: 'space-between',
    border: '1px solid #E0E0E0',
    boxShadow:'none'
  },
  iconButton: {
    opacity: 0.54,
    transform: 'scale(1, 1)',
    transition: 'transform 200ms cubic-bezier(0.4, 0.0, 0.2, 1)',
  },
  iconButtonHidden: {
    transform: 'scale(0, 0)',
    '& > $icon': {
      opacity: 0,
    },
  },
  iconButtonDisabled: {
    opacity: 0.38,
  },
  searchIconButton: {
    marginRight: -48,
  },
  icon: {
    opacity: 0.54,
    transition: 'opacity 200ms cubic-bezier(0.4, 0.0, 0.2, 1)',
  },
  input: {
    width: '100%',
    color:'#A8A8A8',
    fontFamily:'Inter',
    fontSize:'14px',
    
  },
  searchContainer: {
    margin: 'auto 16px',
    width: 'calc(100% - 48px - 32px)', // 48px button + 32px margin

  },
};
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false,
      value: this.props.value,
      active: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.value !== nextProps.value) {
      this.setState({ ...this.state, value: nextProps.value });
    }
  }

  handleFocus = (e) => {
    this.setState({ focus: true });
    if (this.props.onFocus) {
      this.props.onFocus(e);
    }
  }

  handleBlur = (e) => {
    this.setState({ focus: false });
    if (this.state.value.trim().length === 0) {
      this.setState({ value: '' });
    }
    if (this.props.onBlur) {
      this.props.onBlur(e);
    }
  }

  handleInput = (e) => {
    this.setState({ value: e.target.value });
    if (this.props.onChange) {
      this.props.onChange(e.target.value);
    }
  }

  handleCancel = () => {
    this.setState({ active: false, value: '' });
    if (this.props.onCancelSearch) {
      this.props.onCancelSearch();
    }
  }

  handleKeyUp = (e) => {
    if (e.charCode === 13 || e.key === 'Enter') {
      this.handleRequestSearch();
    } else if (this.props.cancelOnEscape && (e.charCode === 27 || e.key === 'Escape')) {
      this.handleCancel();
    }
    if (this.props.onKeyUp) {
      this.props.onKeyUp(e);
    }
  }

  handleRequestSearch = () => {
    if (this.props.onRequestSearch) {
      this.props.onRequestSearch(this.state.value);
    }
  }

  render() {
    const { value } = this.state;
    const {
      cancelOnEscape,
      className,
      classes,
      closeIcon,
      disabled,
      onCancelSearch,
      onRequestSearch,
      searchIcon,
      style,
      ...inputProps
    } = this.props;

    return (
      <Paper
        className={classNames(classes.root, className)}
        style={style}
      >
        <div className={classes.searchContainer}>
          <Input
            {...inputProps}
            onBlur={this.handleBlur}
            value={value}
            onChange={this.handleInput}
            onKeyUp={this.handleKeyUp}
            onFocus={this.handleFocus}
            fullWidth
            className={classes.input}
            disableUnderline
            disabled={disabled}
          />
        </div>
        <IconButton
          onClick={this.handleCancel}
          classes={{
            root: classNames(classes.iconButton, {
              [classes.iconButtonHidden]: value === '',
            }),
            disabled: classes.iconButtonDisabled,
          }}
          disabled={disabled}
        >
          {React.cloneElement(closeIcon, {
            classes: { root: classes.icon },
          })}
        </IconButton>
      </Paper>
    );
  }
}

SearchBar.defaultProps = {
  className: '',
  closeIcon: <ClearIcon style={{ color: grey[500] }} />,
  disabled: false,
  placeholder: 'Search',
  style: null,
  value: '',
};

SearchBar.propTypes = {
  cancelOnEscape: PropTypes.bool,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  closeIcon: PropTypes.node,
  disabled: PropTypes.bool,
  onCancelSearch: PropTypes.func,
  onChange: PropTypes.func,
  onRequestSearch: PropTypes.func,
  placeholder: PropTypes.string,
  searchIcon: PropTypes.node,
  style: PropTypes.object,
  value: PropTypes.string,
};

export default withStyles(styles)(SearchBar);
