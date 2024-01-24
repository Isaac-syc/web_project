
<script>
    $(document).ready(function() {
        let conversationId = "";
        //TOGGLE CHAT WINDOW
        $("#chatBtn").on("click", function(e){
            e.preventDefault();
            toggleChatWindow();
        })
        function toggleChatWindow() {
            let chatRow
            var chatWindow = document.getElementById('chat-window');
            chatWindow.style.display = (chatWindow.style.display === 'none' || chatWindow.style.display === '') ? 'block' : 'none';

        }
        $("#closeChat").on("click", function(){
            document.getElementById("chat-window").style.display = "none";
        });
        $("#send-btn").on("click", function () {
            var inputElement = document.getElementById('chat-input');
            var message = inputElement.value;
            var messagesContainer = document.getElementById('chat-messages');
            messagesContainer.innerHTML += '<div>User: ' + message + '</div>';
            inputElement.value = '';
            const messageCount = messagesContainer.children.length;
            if (messageCount === 1) {
                firstMessage(message);
            } else {
                otherMessages(message);
            }
        });

        function firstMessage(message) {
            $.ajax({
                type: "post",
                url: "/firstMessage",
                data: {message: message},
                success: function(response) {
                    console.log("First message sent: ", response);
                    conversationId = response.insertedId;
                },
                error: function(err) {
                    console.log("Error sending first message: ", err);
                }
            });
        }

        function otherMessages(message, conversationId) {
            $.ajax({
                url: 'post',
                url: '/otherMessages',
                data: {message, conversationId},
                success: function(response){
                    console.log("Other messages sent: ", response);
                }, 
                error: function(err) {
                    console.log("Error sending other messages: ", err);
                }
            });
        }

        function retriveMessages(conversationId) {
            $.ajax({
                url: ''
            })
        }
    });
</script>