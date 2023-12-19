import React, { useEffect, useState } from 'react';
import fetchModel from '../../lib/fetchModelData';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchModel('/user/list')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('FetchModel /user/list error:', error);
      });
  }, []);

};
