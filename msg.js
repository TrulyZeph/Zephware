javascript:(() => {
	const firebaseConfig = {
	  apiKey: "AIzaSyBM8PsYtRud5ZKI7MdQxJeOYTQ2YLBMA0M",
	  authDomain: "messages.firebaseapp.com",
	  databaseURL: "https://messages-default-rtdb.firebaseio.com/",
	  projectId: "messages",
	  storageBucket: "messages.firebasestorage.app",
	  messagingSenderId: "649260131467",
	  appId: "1:649260131467:web:7447ca7512a6ab3a81a08e",
	  measurementId: "G-HRF3TYZT57"
	};

   const script = document.createElement('script');
   script.src = "https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js";
   script.onload = () => {
      const dbScript = document.createElement('script');
      dbScript.src = "https://www.gstatic.com/firebasejs/10.12.2/firebase-database-compat.js";
      dbScript.onload = initApp;
      document.head.appendChild(dbScript);
   };
   document.head.appendChild(script);

   function initApp() {
      firebase.initializeApp(firebaseConfig);
      const db = firebase.database();

      const style = document.createElement('style');
      style.innerHTML = `
         @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;700&display=swap');
         * {
            font-family: 'Fredoka', sans-serif;
            box-sizing: border-box;
         }
         .container {
            position: fixed;
            inset: 0;
            background: #0a0a0a;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            color: white;
            z-index: 99999;
         }
         .login, .chat {
            background: #121212;
            border-radius: 15px;
            padding: 20px;
            width: 400px;
            max-width: 90%;
            text-align: center;
         }
         .header {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            margin-bottom: 15px;
         }
         .header img {
            width: 60px;
            height: 60px;
         }
         .header h1 {
            background: linear-gradient(to bottom, #01AEFD, #015AFD);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: bold;
            margin: 0;
         }
         input {
            width: 90%;
            padding: 10px;
            border: none;
            border-radius: 8px;
            margin-top: 10px;
            text-align: center;
         }
         button {
            background: linear-gradient(to bottom, #01AEFD, #015AFD);
            color: white;
            border: none;
            border-radius: 8px;
            padding: 10px 20px;
            cursor: pointer;
            margin-top: 10px;
            font-weight: bold;
         }
         .color-picker {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            margin-top: 10px;
         }
         .messages {
            height: 300px;
            overflow-y: auto;
            text-align: left;
            padding: 10px;
            background: #1a1a1a;
            border-radius: 10px;
            margin-bottom: 10px;
         }
         .message {
            margin-bottom: 5px;
            word-wrap: break-word;
         }
      `;
      document.head.appendChild(style);

      const container = document.createElement('div');
      container.className = 'container';
      container.innerHTML = `
         <div class="login">
            <div class="header">
               <img src="https://raw.githubusercontent.com/TrulyZeph/Zephware/refs/heads/main/assets/Zephware.png">
               <h1>Zephware</h1>
            </div>
            <input id="user" placeholder="Username">
            <input id="pass" placeholder="Password" type="password">
            <div class="color-picker">
               <input type="color" id="colorPick" value="#ff0000">
               <input type="text" id="colorHex" value="#ff0000" maxlength="7">
            </div>
            <button id="loginBtn">Login / Register</button>
         </div>
      `;
      document.body.appendChild(container);

      const colorPick = container.querySelector('#colorPick');
      const colorHex = container.querySelector('#colorHex');
      colorPick.addEventListener('input', () => colorHex.value = colorPick.value);
      colorHex.addEventListener('input', () => {
         if (/^#([0-9A-F]{3}){1,2}$/i.test(colorHex.value)) colorPick.value = colorHex.value;
      });

      container.querySelector('#loginBtn').onclick = async () => {
         const username = container.querySelector('#user').value.trim();
         const password = container.querySelector('#pass').value.trim();
         const color = colorHex.value.trim();

         if (!username || !password) return alert("Please enter username and password.");

         try {
            const userRef = db.ref('users/' + username);
            const snapshot = await userRef.get();

            if (snapshot.exists()) {
               const data = snapshot.val();
               if (data.password !== password) return alert("Wrong password!");
               startChat(username, data.color || color);
            } else {
               await userRef.set({ password, color });
               startChat(username, color);
            }
         } catch (err) {
            alert("Connection error — please check Firebase config.");
            console.error(err);
         }
      };

      function startChat(username, color) {
         container.innerHTML = `
            <div class="chat">
               <div class="header">
                  <img src="https://raw.githubusercontent.com/TrulyZeph/Zephware/refs/heads/main/assets/Zephware.png">
                  <h1>Zephware</h1>
               </div>
               <div class="messages" id="messages"></div>
               <input id="msgBox" placeholder="Type your message...">
            </div>
         `;

         const msgBox = container.querySelector('#msgBox');
         const messagesDiv = container.querySelector('#messages');
         const chatRef = db.ref('chat');

         msgBox.addEventListener('keypress', e => {
            if (e.key === 'Enter' && msgBox.value.trim()) {
               chatRef.push({
                  user: username,
                  color: color,
                  text: msgBox.value.trim(),
                  time: Date.now()
               });
               msgBox.value = '';
            }
         });

         chatRef.on('child_added', snap => {
            const m = snap.val();
            const div = document.createElement('div');
            div.className = 'message';
            div.innerHTML = `<b style="color:${m.color}">${m.user}:</b> ${m.text}`;
            messagesDiv.appendChild(div);
            messagesDiv.scrollTop = messagesDiv.scrollHeight;
         });
      }
   }
})();