import users from '../database/Users';
import chats from '../database/Chats';
import Chat from '../classes/Chat'
class LocalDBHandler {

    getUserByUserName(username) {
        for (let user of users) {
            if (user.username === username) {
                return user
            }
        }
        return null
    }

    getUserById(id) {
        for (let user of users) {
            if (user.id === id) {
                return user
            }
        }
        return null
    }

    getChatsOfUser(userId) {
        // returns a list with the users that has a chat with the given user
        let user_chats = []
        for (let chat of chats) {
            for (let user_in_chat of chat.users) {
                if (user_in_chat.id === userId) {
                    user_chats.push(chat)
                }
            }
        }
        return user_chats
    }

    addChat(users){
        chats.push(new Chat(users, []));
    }

    addMessageToChat(chat, messege){
        chat.messages.push(messege);
    }
}

export default LocalDBHandler