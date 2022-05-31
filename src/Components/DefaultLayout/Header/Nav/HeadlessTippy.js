import Tippy from "@tippyjs/react/headless";
import { Link } from "react-router-dom";
function HeadlessTippy({ children, Menu }) {
  return (
    <Tippy
      placement="top-start"
      delay={[0, 100]}
      interactive={true}
      render={attrs => (
        <div className="box" tabIndex="-1" {...attrs}>
          <ul className="box-list">
            {Menu.map((item, index) => {
              return <li key={index} className="box-item">
                <Link className="link" to={item.to}>{item.item}</Link>
              </li>
            })}
          </ul>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default HeadlessTippy;