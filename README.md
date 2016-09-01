# react-simple-fetch

React component to fetch() data and automatically bind the result as props for the child component(s).

## Usage

```jsx
<SimpleFetch url='https://api.github.com/repos/octocat/Hello-World'>
  <YourAwesomeComponent />
</SimpleFetch>
```

The props types of the `SimpleFetch` component are:

```js
type Props = {
  children: <ReactElement>, // yes a single react element
  url: string,
  path: ?string, // defaults to ''
  as: ?string, // defaults to 'fetched' (your data would be in your child compoent as 'this.props.fetched')
  forceHttps: ?bool, // defaults to true (turn any URL you pass to https)
  mapResponse: ?any, // defaults to 'auto' (other options are true and false) [can usually be left on 'auto mode']
  loader: ?<ReactElement>, // pass any jsx dom or component that should be rendered while we go out and fetch the data
};
```


## Examples

#### Object Result
```jsx
<SimpleFetch url='https://api.github.com/repos/octocat/Hello-World' as='repo'>
// will render once the fetch() returns
// will have the returned data available on 'this.props.repo'
  <GitHubRepoComponent />
</SimpleFetch>
```

#### Array Result
```jsx
<SimpleFetch url='https://api.github.com/repos/octocat/Hello-World/stargazers' as='star'>
// will render once the fetch() returns
// as the result is an Array we will automatically map over it and render as many <Stargazer /> elements as necessary
// individual <Stargazer /> elements will have their data available on 'this.props.star'
  <Stargazer />
</SimpleFetch>
```

### More Docs coming soon

## Contributing

Bug reports and pull requests are welcome on GitHub. This project is intended to be a
safe, welcoming space for collaboration, and contributors are expected to adhere
to the [Contributor Covenant](http://contributor-covenant.org/) code of conduct.

## License

```
 _________________
< The MIT License >
 -----------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```
