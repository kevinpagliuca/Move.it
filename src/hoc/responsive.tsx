import React from "react";

import MediaQuery from "react-responsive";

export const IsMobile = ({ children }) => (
  <MediaQuery maxWidth={767}>{children}</MediaQuery>
);

export const GreaterThanTablet = ({ children }) => (
  <MediaQuery minWidth={768}>{children}</MediaQuery>
);
