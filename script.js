const body = document.querySelector("body"),
  sidebar = body.querySelector("nav"),
  toggle = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".search-box"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

searchBtn.addEventListener("click", () => {
  sidebar.classList.remove("close");
});

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modeText.innerText = "Light mode";
  } else {
    modeText.innerText = "Dark mode";
  }
});
//dashboard code ended
// Sample data for communities and messages
let communities = [];
let currentCommunity = null;

// Function to render communities list
function renderCommunities() {
  const communityList = document.getElementById('community-list');
  communityList.innerHTML = '';
  communities.forEach(community => {
    const li = document.createElement('li');
    li.textContent = community.name;
    li.addEventListener('click', () => {
      currentCommunity = community;
      renderMessages();
    });
    communityList.appendChild(li);
  });
}

// Function to render messages in current community
function renderMessages() {
  const messageList = document.getElementById('message-list');
  messageList.innerHTML = '';
  if (currentCommunity) {
    currentCommunity.messages.forEach(message => {
      const li = document.createElement('li');
      li.textContent = message;
      messageList.appendChild(li);
    });
  }
}

// Event listener for creating a new community
const createCommunityForm = document.getElementById('create-community-form');
createCommunityForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const communityNameInput = document.getElementById('community-name');
  const communityName = communityNameInput.value.trim();
  if (communityName) {
    const newCommunity = { name: communityName, messages: [] };
    communities.push(newCommunity);
    renderCommunities();
    communityNameInput.value = '';
  }
});

// Event listener for sending a message
const sendMessageForm = document.getElementById('send-message-form');
sendMessageForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const messageInput = document.getElementById('message-input');
  const messageText = messageInput.value.trim();
  if (currentCommunity && messageText) {
    currentCommunity.messages.push(messageText);
    renderMessages();
    messageInput.value = '';
  }
});

// Initial rendering
renderCommunities();



// chat room
document.getElementById('send-button').addEventListener('click', function() {
  var messageInput = document.getElementById('message-input');
  var message = messageInput.value.trim();
  
  if (message !== '') {
    var chatContainer = document.getElementById('chat-container');
    var newMessage = document.createElement('div');
    newMessage.innerHTML = '<strong>You:</strong> ' + message;
    chatContainer.appendChild(newMessage);
    messageInput.value = '';
    chatContainer.scrollTop = chatContainer.scrollHeight; // Auto-scroll to bottom
  }
});
//poll
document.getElementById('poll-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const selectedOptions = Array.from(document.querySelectorAll('input[name="option"]:checked')).map(checkbox => checkbox.value);
  if (selectedOptions.length === 0) {
    alert('Please select at least one option.');
  } else {
    alert('You selected: ' + selectedOptions.join(', '));
    // You can perform further actions here, such as sending the selected options to a server for processing.
  }
});
 // chat room trial
// document.addEventListener("DOMContentLoaded", function() {
 // const communityCheckboxes = document.querySelectorAll('.community input[type="checkbox"]');
  
 // communityCheckboxes.forEach(function(checkbox) {
  //  checkbox.addEventListener("change", function() {
  //    const chatOptions = this.parentElement.querySelector('.chat-options');
   //   if (this.checked) {
   //     chatOptions.style.display = "block";
    //  } else {
    //    chatOptions.style.display = "none";}});});});
