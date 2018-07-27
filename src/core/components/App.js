const { renderRoutes } = require('react-router-config');
const PropTypes = require('prop-types');
const { parse } = require('qs');

/**
 * 网站入口组件
 * 服务器端和浏览器端渲染都会调用
 */
const App = (props) => {
  const { route, location: { search } } = props;
  // 将解析后的 querystring 对象挂载到 location 对象上
  props.location.query = parse(search, { ignoreQueryPrefix: true });
  return renderRoutes(route.routes, props);
};

App.propTypes = {
  route: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

// 通过判断依赖包中是否包含 react-redux 来决定 export 返回的内容
// 不是很优雅的实现方式，但保证代码能工作
// try {
//   const { connect } = require('react-redux');
//   module.exports = connect(state => state)(App);
// } catch (e) {
//   module.exports = App;
// }

module.exports = App;
