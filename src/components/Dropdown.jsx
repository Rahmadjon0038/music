import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, message, Space } from 'antd';
import { Icon, Link } from './style'
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  function onClick({ key }) {
    navigate(key)
  }

  const items = [
    {
      label: 'Add music',
      key: '/addmusic',
    },
    {
      label: 'Statistika',
      key: '/statis',

    },
  ];

  return (
    <Dropdown
      menu={{
        items,
        onClick
      }} >
      <Link>
        <Icon>
          <span><i className="fa-solid fa-pencil"></i></span>
        </Icon>
      </Link>
    </Dropdown>
  );
}
export default App;