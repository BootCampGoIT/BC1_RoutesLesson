import React, { Suspense } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navigation from './header/navigation/Navigation';
import routes from '../routes';

// const object = {
//   path: "",
//   constant: {
//     pathname: "",
//     search: "gghagdshh"
//   }
// };

// (function getResult(value) {
//   switch (typeof value) {
//     case 'string':
//       history.push(value)
//       break;
//     case "object":
//       history.push(`${value.pathname}?${value.search}`)
//       break;
//     default:
//       break;
//   }
// })(object.constant);





const App = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>

      <main>
        <Suspense fallback={<h2>...loading</h2>} >
          <Switch>
            {routes.map(({ path, exact, component: Page, name }) => {
              return <Route
                key={name}
                path={path}
                exact={exact}
                render={(props) => <Page {...props} />}
              />
            })}
          </Switch>
        </Suspense>
      </main>
    </>






  );
}

export default App;
