import React from 'react';

function LoadingPage() {
  return (
    <div
      style={{height: window.innerHeight}}
      class="d-flex justify-content-center align-items-center"
    >
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default LoadingPage;
