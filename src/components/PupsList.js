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

  render() {
    /**
     * https://dev-blog.apollodata.com/whats-next-for-react-apollo-4d41ba12c2cb
     * 
     * In the upcoming Apollo, they provide a Query component. See link for details.
     * Currently only in beta only, but expect to see this soon.
     */
    return (
      <Query query={GET_DOGS}>
        {/* loading, error, and data are properties of the `result` object */}
        {({ loading, error, data }) => {
          if (loading) return <Spin />;
          if (error) return <div>Shoot! We encountered an error!</div>;

          return this.renderList(data.dogs)
        }}
      </Query>
    );
  }
}

// This is still whatever DVA would have done before.
export default connect()(PupsList);