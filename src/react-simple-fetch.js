import React from 'react';
import 'whatwg-fetch';
import deepFind from 'deep-find';

let isMounted = false;

class SimpleFetch extends React.Component {

  constructor() {
    super();
    this.state = {};
    this.renderChild = this.renderChild.bind(this);
  }
  componentDidMount() {
    isMounted = true;
    const { url, path, forceHttps } = this.props;
    let fetchUrl = '';
    if (forceHttps) {
      fetchUrl = url.replace('http://', 'https://');
    }
    fetch(fetchUrl).then(res => res.json()).then(d => {
      if (isMounted) {
        let data = null;
        if (path && path.length) {
          data = deepFind(d, path);
        } else {
          data = d;
        }
        this.setState({ data }, () => {
          this.forceUpdate();
        });
      }
    });
  }
  componentWillUnmount() {
    isMounted = false;
  }

  mapChildren(children, d, as) {
    return d.map((data, i) => {
      return React.cloneElement(children, Object.assign({}, children.props, { key: i, [as]: data }));
    });
  }

  renderChild(children, data, as) {
    return React.cloneElement(children, Object.assign({}, children.props, { [as]: data }));
  }

  render() {
    const { data } = this.state;
    const { children, mapResponse, as, loader } = this.props;
    if (!data) {
      if(loader && loader.props){
        return loader;
      }
      return null;
    }
    if (mapResponse === true) {
      return <div>{this.mapChildren(children, data, as)}</div>;
    } else if (mapResponse === 'auto') {
      if (Array.isArray(data)) {
        return <div>{this.mapChildren(children, data, as)}</div>;
      }
      return this.renderChild(children, data, as);
    } else {
      return this.renderChild(children, data, as);
    }
  }
}

SimpleFetch.displayName = 'SimpleFetch';


SimpleFetch.propTypes = {
  url: React.PropTypes.string.isRequired,
  children: React.PropTypes.any.isRequired,
  forceHttps: React.PropTypes.bool,
  path: React.PropTypes.string,
  mapResponse: React.PropTypes.any,
  as: React.PropTypes.string,
  loader: React.PropTypes.element,
};
SimpleFetch.defaultProps = {
  forceHttps: true,
  path: '',
  mapResponse: 'auto',
  as: 'fetched',
};


export default SimpleFetch;
