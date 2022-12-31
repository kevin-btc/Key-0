import React from "react";

import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import Explore from "../components/Explore/Explore";

const ExplorePage = ({ page, filter }) => {
  return (
    <div className="main">
      <Breadcrumb title="Explore" subpage="Explore" page={page} />
      <Explore filter={filter} />
    </div>
  );
};

export default ExplorePage;
