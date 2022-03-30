import React from 'react';
import PropTypes from 'prop-types';
import { shape } from 'prop-types';

export default function PropTypeChecking({data,shape,aoo}) {
  return (
    <div>
        {JSON.stringify(data)}
        {JSON.stringify(shape)}
        {JSON.stringify(aoo)}
    </div>
  )
}

PropTypeChecking.propTypes = {
    data: PropTypes.oneOfType([PropTypes.object,PropTypes.array]),
    shape: PropTypes.shape({
        name: PropTypes.string,
        age: PropTypes.number,
    }),
    aoo: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        age: PropTypes.number,
    }))
}