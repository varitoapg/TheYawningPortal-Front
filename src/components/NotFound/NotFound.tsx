import { Link } from "react-router-dom";
import NotFoundStyled from "./NotFoundStyled";

const NotFound = () => {
  return (
    <NotFoundStyled>
      <div className="notFound__container">
        <h2 className="notFound__title">Page not found</h2>
        <div className="notFound__information">
          <span>
            You fail your perception check, I don’t know what are you looking
            for.
          </span>
          <span>
            Please, try connecting again. If the issue keeps happening, contact
            <span> Customer Care</span>
          </span>
        </div>
        <div className="return">
          <span>
            Meanwhile you can have a beer in our
            <Link className="return__link" to={"/login"}>
              Tavern
            </Link>
          </span>
        </div>
      </div>
    </NotFoundStyled>
  );
};
export default NotFound;
