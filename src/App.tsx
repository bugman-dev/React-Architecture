import { RouterProvider } from 'react-router-dom';
import { router } from './appRouting/routing';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
