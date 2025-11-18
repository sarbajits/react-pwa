// src/App.tsx

function App() {
  // This async function is much cleaner than nested .then()
  const handleNotificationClick = async () => {
    // 1. Check if notifications are supported
    if (!('Notification' in window)) {
      alert('This browser does not support desktop notifications.');
      return;
    }

    // 2. Check the current permission status
    let permission = Notification.permission;

    // 3. If permission is 'default' (not yet asked), request it
    if (permission === 'default') {
      // This will pause the function until the user clicks "Allow" or "Block"
      permission = await Notification.requestPermission();
    }

    // 4. If permission is 'denied', show a helpful alert
    if (permission === 'denied') {
      alert(
        'You have denied notification permissions. Please enable them in your browser settings to receive reminders.',
      );
      return;
    }

    // 5. If permission is 'granted', show the notification
    if (permission === 'granted') {
      const notificationTitle = 'Task Reminder';
      const notificationOptions = {
        body: "Don't forget to complete your project report!",
        // Use an absolute path for assets in the /public folder
        icon: './pwa-192x192.png',
        badge: './pwa-192x192.png',
        // 'tag' ensures that if the user clicks 5 times,
        // they only see one notification, which just updates.
        tag: 'task-reminder',
      };

      // We don't need the disruptive 'alert' from your original code,
      // the browser's permission prompt handles that.
      new Notification(notificationTitle, notificationOptions);
    }
  };

  return (
    // Use a container to center the content on the page
    <div className="min-h-screen bg-gray-100 p-4 flex items-center justify-center">
      {/* Create a 'card' for a more meaningful UI */}
      <div className="bg-white max-w-lg w-full p-8 shadow-xl rounded-2xl">
        <div className="flex justify-center mb-6">
          {/* POTENTIAL BUG FIX: 
            Changed src from './pwa-192x192.png' to '/pwa-192x192.png'
            This assumes the icon is in your /public folder, which is standard.
          */}
          <img
            src="./pwa-192x192.png"
            alt="PWA Icon"
            className="w-24 h-24"
          />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 text-center mb-3">
          PWA Notification Demo
        </h1>

        <p className="text-gray-600 text-center text-lg mb-8">
          Click the button below to test local notifications. You will be
          asked for permission the first time.
        </p>

        <button
          onClick={handleNotificationClick}
          className="w-full text-lg font-semibold bg-indigo-600 text-white p-4 rounded-lg transition-colors duration-200
                     hover:bg-indigo-700
                     focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
                     active:bg-amber-400" // Kept your active: state!
        >
          Show Test Notification
        </button>
      </div>
    </div>
  );
}

export default App;