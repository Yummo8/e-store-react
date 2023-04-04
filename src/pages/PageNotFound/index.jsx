import React from "react";
import { Link, useLocation } from "react-router-dom";

import { routes } from "../../utils";

export const PageNotFound = () => {
  const { state } = useLocation();

  return (
    <div className="not-found">
      <div className="not-found__wrapper">
        <div className="not-found-404">
          <h1>404</h1>
        </div>
        <h2>We are sorry, Page not found!</h2>
        <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
        {!state?.serverError && <Link to={routes.home}>Back To Homepage</Link>}
      </div>
    </div>
  );
};
