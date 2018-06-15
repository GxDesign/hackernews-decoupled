import React, {Component} from 'react';
import LinkComponent from '../Link/LinkComponent';

class LinkListComponent extends Component {

    render(){
        if (this.props.feedQuery && this.props.feedQuery.loading) {
            return <div>Loading</div>
        }

        if (this.props.feedQuery && this.props.feedQuery.error) {
            return <div>Error</div>
        }

        const linksToRender = this.props.feedQuery.feed.links;
        return(
            <div>
                {linksToRender.map(link => <LinkComponent key={link.id} link={link}/>)}
            </div>
        )

    }
}


export default LinkListComponent;
