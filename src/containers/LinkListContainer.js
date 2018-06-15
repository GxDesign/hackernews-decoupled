import {graphql} from "react-apollo/index";
import gql from 'graphql-tag';
import LinkListComponent from '../components/LinkList/LinkListComponent';

const FEED_QUERY = gql`
  # 2
  query FeedQuery {
    feed {
      links {
        id
        createdAt
        url
        description
      }
    }
  }
`;


export default graphql(FEED_QUERY, { name: 'feedQuery' }) (LinkListComponent)