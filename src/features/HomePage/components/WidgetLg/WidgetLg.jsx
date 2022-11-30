import React from "react";
import "./widgetLg.scss";

function WidgetLg(props) {
  const Button = ({ type }) => {
    return <button className={"widgetLg__button " + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLg__title">Lasted Transactions</h3>
      <table className="widgetLg__table">
        <tr className="widgetLg__tr">
          <th className="widgetLg__th">Customer</th>
          <th className="widgetLg__th">Date</th>
          <th className="widgetLg__th">Amount</th>
          <th className="widgetLg__th">Status</th>
        </tr>
        <tr className="widgetLg__tr">
          <td className="widgetLg__user">
            <img
              className="widgetLg__avatar"
              src="https://images.pexels.com/photos/3756476/pexels-photo-3756476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Avatar"
            />
            <span className="widgetLg__name">Susan Carol</span>
          </td>
          <td className="widgetLg__date">2 Jun 2021</td>
          <td className="widgetLg__amount">$122.00</td>
          <td className="widgetLg__status">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLg__tr">
          <td className="widgetLg__user">
            <img
              className="widgetLg__avatar"
              src="https://images.pexels.com/photos/3756476/pexels-photo-3756476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Avatar"
            />
            <span className="widgetLg__name">Susan Carol</span>
          </td>
          <td className="widgetLg__date">2 Jun 2021</td>
          <td className="widgetLg__amount">$122.00</td>
          <td className="widgetLg__status">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLg__tr">
          <td className="widgetLg__user">
            <img
              className="widgetLg__avatar"
              src="https://images.pexels.com/photos/3756476/pexels-photo-3756476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Avatar"
            />
            <span className="widgetLg__name">Susan Carol</span>
          </td>
          <td className="widgetLg__date">2 Jun 2021</td>
          <td className="widgetLg__amount">$122.00</td>
          <td className="widgetLg__status">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLg__tr">
          <td className="widgetLg__user">
            <img
              className="widgetLg__avatar"
              src="https://images.pexels.com/photos/3756476/pexels-photo-3756476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Avatar"
            />
            <span className="widgetLg__name">Susan Carol</span>
          </td>
          <td className="widgetLg__date">2 Jun 2021</td>
          <td className="widgetLg__amount">$122.00</td>
          <td className="widgetLg__status">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default WidgetLg;
