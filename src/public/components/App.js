const React = require('react');
const { useFetch } = require('../../hooks');

// eslint-disable-next-line react/prop-types
const App = ({ pageTitle }) => {
  const [data, loading] = useFetch(
    'https://www.mocky.io/v2/5c6c3a92320000e83bbef971',
  );

  return (
    <div>
      {loading ? (
        `Loading... ${pageTitle}`
      ) : (
        <ul>
          {JSON.stringify(data)}
        </ul>
      )}
    </div>
  );
};

module.exports = App;