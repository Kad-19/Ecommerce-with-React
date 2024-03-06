import React from "react";

import "./MyOrderPage.css";
import Table from "../Common/Table";

const MyOrderPage = () => {
  return (
    <secion className="align_center myorder_page">
      <Table headings={["Order", "Products", "Total", "Status"]}>
        <tbody>
          <tr>
            <td>1</td>
            <td>iphone, Power Bank</td>
            <td>$1299</td>
            <td>Shipped</td>
          </tr>
        </tbody>
      </Table>
    </secion>
  );
};

export default MyOrderPage;
