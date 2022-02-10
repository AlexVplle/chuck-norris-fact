'use strict'

const e = React.createElement

class LikeButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = { liked: false }
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.'
        }
        return (
            <button onClick={() => this.setState({ liked: true})}>
                J'aime
            </button>
        )
    }
}

const domContainer = document.getElementById('likeButtonContainer')

ReactDOM.render(e(LikeButton), domContainer)