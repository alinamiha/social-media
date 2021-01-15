let store = {

    _renderDom () {
        console.log('The DOM was ')
    },

    _state: {
        dialog: {
            messages: [
                {id: 0, title: 'hi'},
                {id: 1, title: 'How are you'},
                {id: 2, title: 'Good'},
            ],
            participants: [
                {id: 0, name: 'Alina'},
                {id: 1, name: 'Igor'},
                {id: 2, name: 'Max'}
            ],
            newMessage: 'First message alina'
        },
        sidebar: {
            friends: [
                {id: 0, name: 'Alina'},
                {id: 1, name: 'Jackson'},
                {id: 2, name: 'Jamey'},
            ]
        },
        profile: {
            posts: [
                {id: '1', title: 'First post'},
                {id: '2', title: 'Second post'},
                {id: '3', title: 'Third post'},
            ],
            newPostText: 'new post text alina'
        },
    },
    getState() {
        return this._state
    },
    subscribe (observer) {
        this._renderDom = observer
    },

    addPost () {
        let post = {
            id: 0,
            title: this._state.profile.newPostText,
        }
        this._state.profile.posts.push(post)
        this._state.profile.newPostText = ''
        this._renderDom(this._state)
    },
    updatePostText (newText) {
        this._state.profile.newPostText = newText
        this._renderDom(this._state)

    },
    addMessage () {
        let message = {
            id: 0,
            title: this._state.dialog.newMessage,
        }
        this._state.dialog.messages.push(message)
        this._state.dialog.newMessage = ''
        this._renderDom(this._state)
    },
    updateMessageText (newText) {
        this._state.dialog.newMessage = newText
        this._renderDom(this._state)

    },

    dispatch(action){
        if(action.type === "ADD-POST"){
            let post = {
                id: 0,
                title: this._state.profile.newPostText,
            }
            this._state.profile.posts.push(post)
            this._state.profile.newPostText = ''
            this._renderDom(this._state)
        } else if(action.type === "UPDATE-POST-TEXT"){
            this._state.profile.newPostText = action.newText
            this._renderDom(this._state)
        } else if(action.type === "ADD-MESSAGE"){
            let message = {
                id: 0,
                title: this._state.dialog.newMessage,
            }
            this._state.dialog.messages.push(message)
            this._state.dialog.newMessage = ''
            this._renderDom(this._state)
        } else if(action.type === "UPDATE-MESSAGE-TEXT"){
            this._state.dialog.newMessage = action.newText
            this._renderDom(this._state)
        }
    }

}

export default store
window.store = store