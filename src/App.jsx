// src/App.tsx (or .jsx)

function App() {
  const showNotification = () => {
    if (!('Notification' in window)) {
      alert('This browser does not support desktop notification');
      return;
    }

    if (Notification.permission === 'granted') {
      new Notification('Hello from your PWA!', {
        body: 'This is a test notification.',
        icon: '/pwa-192x192.png',
        badge: '/pwa-192x192.png', // Icon for small spaces (like Android status bar)
      });
    } else if (Notification.permission !== 'denied') {
      alert('Requesting notification permission...');
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          new Notification('Thanks for enabling notifications!', {
            body: 'Now you will receive updates.',
            icon: '/pwa-192x192.png',
            badge: '/pwa-192x192.png',
          });
        }
      });
    }
  };

  return (
    <div className="text-6xl bg-blue-200 p-10 rounded-6xl">
      <h1>Hello, World!</h1>
      <img src="/pwa-192x192.png" alt="PWA Icon" className="w-32 h-32 mt-4" />
      <img
        src="https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000"
        alt="PWA Maskable Icon"
        className="w-32 h-32 mt-4"
      />

      {/* --- ADD THIS BUTTON --- */}
      <button
        onClick={showNotification}
        className="text-lg bg-indigo-600 text-white p-3 rounded-lg mt-6 active:bg-amber-400"
      >
        Show Notification
      </button>
      {/* --------------------- */}

    </div>
  );
}

export default App;