// TopBar.jsx
import React, { useEffect, useState } from 'react';
import fetchModel from '../../lib/fetchModelData';

const TopBar = () => {
  const [version, setVersion] = useState('');

  useEffect(() => {
    fetchModel('/test/info')
      .then((response) => {
        setVersion(response.data.__v);
      })
      .catch((error) => {
        console.error('FetchModel /test/info error:', error);
      });
  }, []);

  return (
    <div className="topBar">
      Version: {version}
      {/* ... rest of the component */}
    </div>
  );
};
