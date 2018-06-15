import React, {Component} from 'react';


class LinkComponent extends Component {
    render() {
        return (
            <div>
                <div>
                    {this.props.link.description} ({this.props.link.url})
                </div>
            </div>
        )
    }

    _voteForLink = async () => {

    }
}

export default LinkComponent