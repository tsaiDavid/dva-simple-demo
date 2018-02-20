import dva from 'dva';
import './index.css';

// https://github.com/ant-design/ant-design
import 'antd/dist/antd.css';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/todo').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
