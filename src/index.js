import ReactDOM from "react-dom";

import * as stylesA from "./a.module.css";
import * as stylesB from "./b.module.css";

ReactDOM.render(
  <div>
    <p className={stylesA.tomato}>Styled by a.module.css</p>
    <p className={stylesB.salmon}>Styles by b.module.css</p>
  </div>,
  document.getElementById("main")
);
