import { PropTypes } from 'react';

functon RenderIf(props) => {
  return props.test ? props.children : null;
};

RenderIf.propTypes = {
  children: PropTypes.element.isRequired,
  test: PropTypes.bool.isRequired
};

export default RenderIf;
