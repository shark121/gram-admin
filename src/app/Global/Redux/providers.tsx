import { Provider } from "react-redux";
import store from "./store";

export default function Providers(props: { children: React.ReactNode }) {
  return <Provider store={store}>{props.children}</Provider>;
}
