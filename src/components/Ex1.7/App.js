import React, { useState, useEffect } from 'react';
import './App.css';
import useMessages from './useMessages';

function App() {
  const [forum, setForum] = useState('nasa');
  const {
    messages,
    loading: messagesLoading,
    error: messagesError,
  } = useMessages(forum);

  return (
    <div className="App">
      <button onClick={() => setForum('nasa')}>NASA</button>
      <button onClick={() => setForum('notNasa')}>Not NASA</button>
      {messagesError ? (
        <div className="errorMessage">
          <div className="error">
            <div className="error-contents">
              {messagesError.message}
            </div>
          </div>
        </div>
      ) : messagesLoading ? (
        <div className="loading">Loading...</div>
      ) : messages && messages.length ? (
        <dl>
          {messages.map((m) => (
            <div key={m.id}>
              <dt>{m.author}</dt>
              <dd>{m.text}</dd>
            </div>
          ))}
        </dl>
      ) : (
        'No messages'
      )}
    </div>
  );
}

export default App;
