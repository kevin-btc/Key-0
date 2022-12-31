import React, { Component } from "react";

import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import ItemDetail from "../components/ItemDetails/ItemDetails";

class ItemDetails extends Component {
  render() {
    return (
      <div className="main">
        <Breadcrumb title="Details" subpage="Explore" page="Details" />
        <ItemDetail />
      </div>
    );
  }
}

export default ItemDetails;
