import { Link } from "react-router-dom";
import s from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={s.notFound}>
      <h1>Oops, sorry :(</h1>

      <Link to="/"> Back to home page</Link>
    </div>
  );
};

export default NotFoundPage;
