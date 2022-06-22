import { useState } from 'react';
import ContentPanel from './components/content-panel';
import Form from './components/form';
import LeftPanel from './components/left-panel';
import './main.scss';

function App() {
  const [contentVisible, setContentVisible] = useState(false);

  const toggleContentVisible = () => {
    setContentVisible(!contentVisible);
  };

  return (
    <div className='app'>
      <div className='container'>
        <LeftPanel showContent={contentVisible} toggleShowContent={toggleContentVisible} />
        <Form contentVisible={contentVisible} />
        <ContentPanel contentVisible={contentVisible} />
      </div>
    </div>
  );
}

export default App;
