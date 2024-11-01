import { $, component$, useStore, useStylesScoped$ } from '@builder.io/qwik';

export const FloatingChat = component$(() => {
  const state = useStore({ isOpen: false });

  // Function to toggle chat visibility
  const toggleChat = () => {
    state.isOpen = !state.isOpen;
  };
  useStylesScoped$(`
    .floating-chat {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 400px;
      height: 500px;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      z-index: 1000;
      background-color: white;
      display: none;
      border: 2px solid violet; /* Neon violet border */
      box-shadow: 0 0 10px violet; /* Neon glow effect */
    }

    .floating-chat.open {
      display: block;
    }

    .chat-toggle.closed {
      display: none;
    }

    .chat-toggle {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: #0078d4;
      color: white;
      padding: 10px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      z-index: 1001;
    }

    .close-button {
      position: absolute;
      top: 10px;
      right: 10px;
      background: transparent;
      border: none;
      color: violet; /* Neon color for the X button */
      font-size: 20px;
      cursor: pointer;
      text-shadow: 0 0 5px violet; /* Neon glow effect for the X */
    }

    iframe {
      border: 2px solid violet; /* Neon violet border for the iframe */
      box-shadow: 0 0 10px violet; /* Neon glow effect for the iframe */
    }

    @media (max-width: 375px) {
      .floating-chat {
        width: 80%;
        height: 360px; /* Adjust height as needed */
      }
    }
  `);

  return (
    <>
      {/* Toggle Button */}
      <button class={`chat-toggle ${state.isOpen ? 'closed':''}`} onClick$={$(async () => {
        state.isOpen = !state.isOpen;
    })}>
         Chat
      </button>

      {/* Floating Chat Iframe */}
      <div class={`floating-chat ${state.isOpen ? 'open' : ''}`}>
        <button class="close-button" onClick$={$(async () => {
        state.isOpen = !state.isOpen;
    })} >X</button>
        <iframe
          src="https://webchat.botframework.com/embed/salime?s=i04T3YhioEE.tZ43kvG5jclE_XMJgXaVtkMCWqk6054HA3NxgX0GcCc" // Replace with the URL of your web chat
          style={{ width: '100%', height: '100%', border: 'none' }}
          title="Web Chat"
        ></iframe>
      </div>
    </>
  );
});
