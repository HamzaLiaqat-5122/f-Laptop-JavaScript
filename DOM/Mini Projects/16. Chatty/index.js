const data = [
  {
    id: 1,
    user: "Hamza",
    message: {
      subhan: [],
      usman: [],
    },
  },
  {
    id: 2,
    user: "Subhan",
    message: {
      hamza: [],
      usman: [],
    },
  },
  {
    id: 3,
    user: "Usman",
    message: {
      subhan: [],
      hamza: [],
    },
  },
];

const typeMessageInput = document.querySelector('#messageInput');
const messageArea = document.querySelector("#chatBox");
const messageSendBtn = document.querySelector("#sendBtn");
const messageFromUser = document.querySelectorAll(".from li");
const messageToUser = document.querySelectorAll(".to li");
const chatWith = document.querySelector('#chatWith');
const addUser = document.querySelector(".addUser");
const messageFrom = document.querySelector('.from');
const messageTo = document.querySelector('.to');

let fromIndex = 0;
let toIndex = 1;
let sender = data[fromIndex];
let receiver = data[toIndex];

function b() {
  const messageFromUser = document.querySelectorAll(".from li");
  const messageToUser = document.querySelectorAll(".to li");

  messageFromUser.forEach((user, index1) => {
    user.addEventListener("click", () => {
      messageFromUser.forEach(b => b.classList.remove('active'));
      messageFromUser[index1].classList.add('active');

      if (toIndex === index1) {
        messageToUser.forEach(b => b.classList.remove('active'));
        messageFromUser[toIndex].classList.add('active');
        messageToUser[fromIndex].classList.add('active');
        toIndex = fromIndex;
      }

      fromIndex = index1;
      sender = data[fromIndex];
      receiver = data[toIndex];
      chatWith.textContent = messageToUser[toIndex].textContent;
      updateChat();
    });
  });

  messageToUser.forEach((user, index2) => {
    user.addEventListener("click", () => {
      messageToUser.forEach(b => b.classList.remove('active'));
      messageToUser[index2].classList.add('active');

      if (fromIndex === index2) {
        messageFromUser.forEach(b => b.classList.remove('active'));
        messageToUser[fromIndex].classList.add('active');
        messageFromUser[toIndex].classList.add('active');
        fromIndex = toIndex;
      }; 

      toIndex = index2;
      sender = data[fromIndex];
      receiver = data[toIndex];
      const activeUser = document.querySelector('.to li.active');
      chatWith.textContent = activeUser.textContent;
      updateChat();
    });
  });
};


messageSendBtn.addEventListener("click", () => {
  sendMessage();
});

typeMessageInput.addEventListener("keydown", e => {
  if (e.key === 'Enter') {
    sendMessage();
  };
});

function sendMessage() {
  const msg = typeMessageInput.value.trim();
  if (msg !== '') {
    sender.message[receiver.user.toLowerCase()].push({ type: 'sent', text: msg });
    receiver.message[sender.user.toLowerCase()].push({ type: 'received', text: msg });

    typeMessageInput.value = '';
    updateChat();
  };
};

function updateChat() {
  messageArea.innerHTML = '';

  const conversation = sender.message[receiver.user.toLowerCase()];
  conversation.forEach(msg => {
    messageArea.innerHTML += `
    <div class="message ${msg.type}">
    <span class="text">${msg.text}</span>
    </div>
    `;
  });
};


addUser.addEventListener("keydown", e => {
  if (e.key === 'Enter') {
    joinUser()
    joinUser()
  };
});

function joinUser() {
  const newUserName = addUser.value.trim();
  if (newUserName === '') return;


  const newMessages = {};
  data.forEach(user => {
    newMessages[user.user.toLowerCase()] = [];
    user.message[newUserName.toLowerCase()] = [];
  });

  const newUser = {
    id: data.length + 1,
    user: newUserName,
    message: newMessages,
  };

  data.push(newUser);

  const liFrom = document.createElement('li');
  liFrom.textContent = newUserName;
  liFrom.setAttribute('data-user', `${addUser.value}`);
  messageFrom.appendChild(liFrom);

  const liTo = document.createElement('li');
  liTo.textContent = newUserName;
  liTo.setAttribute('data-user', `${addUser.value}`);
  messageTo.appendChild(liTo);

  addUser.value = '';
  b();
}

b();
updateChat();


