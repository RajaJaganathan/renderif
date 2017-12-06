import { PropTypes } from 'react';

functon RenderIf(props) => {
  return props.if ? props.children : null;
};

RenderIf.propTypes = {
  children: PropTypes.element.isRequired,
  if: PropTypes.bool.isRequired
};

export default RenderIf;
