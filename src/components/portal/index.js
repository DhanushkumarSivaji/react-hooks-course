import React from 'react';
import ReactDOM from 'react-dom';

export default function index() {
  return ReactDOM.createPortal(
    <div>portal</div>,
    document.getElementById('portal-root')
  )
}
