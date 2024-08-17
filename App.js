import DefaultLayout from "./src/layouts/DefaultLayout";
import { Provider } from "react-redux";
import store from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <DefaultLayout />
    </Provider>
  );
}

