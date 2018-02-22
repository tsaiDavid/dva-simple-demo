import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Spin, Card } from 'antd';
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

// Our query is written in this file, but it doesn't have to be.
const GET_DOGS = gql`
  {
    dogs {
      id
      breed
      subbreeds
      displayImage
    }
  }
`;

class PupsList extends PureComponent {
  renderList = (dogsArray) => {
    return dogsArray.map((dog) => {
      return (
        <Card
          hoverable
          key={dog.id}
          style={{ width: 240 }}
          cover={<img alt={dog.breed} src={dog.displayImage} />}
        >
          <Card.Meta title={dog.breed} />
        </Card>
      )
    })
  }

  /**
   * https://dev-blog.apollodata.com/whats-next-for-react-apollo-4d41ba12c2cb
   * In the upcoming Apollo, they provide a <Query /> component
  */
  render() {
    return (
      <Query query={GET_DOGS}>
        {/* These are properties of the `result` object */}
        {({ loading, error, data }) => {
          if (loading) return <Spin />;
          if (error) return <div>Shoot! We encountered an error!</div>;

          return this.renderList(data.dogs)
        }}
      </Query>
    );
  }
}

// This part hasn't changed, so we still have access to our Redux store
export default connect()(PupsList);