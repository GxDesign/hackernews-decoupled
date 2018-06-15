import {graphql} from "react-apollo/index";
import gql from 'graphql-tag';
import { LinkListComponent } from '../components/index.js';

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