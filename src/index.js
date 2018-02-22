import ReactDOM from 'react-dom';
import dva from 'dva';
import './index.css';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { defaults, resolvers } from "./resolvers";

// https://github.com/ant-design/ant-design
import 'antd/dist/antd.css';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/todos').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
// https://github.com/dvajs/dva/blob/master/docs/API.md#appstartselector
const App = app.start();

const client = new ApolloClient({
    uri: `https://nx9zvp49q7.lp.gql.zone/graphql`,
    clientState: {
      defaults,
      resolvers
    }
  });

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
)