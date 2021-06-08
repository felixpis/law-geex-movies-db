import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Root = styled.div`
  display: flex;
`;

const Label = styled.div`
  width: 200px;
`;

const Value = styled.div`
  flex: 1;
  font-weight: bold;
`;
const LabelValue = ({label, children}) => {
  return (
    <Root>
      <Label>{label}: </Label>
      <Value>{children}</Value>
    </Root>
  )
}

LabelValue.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node
}

export default LabelValue
