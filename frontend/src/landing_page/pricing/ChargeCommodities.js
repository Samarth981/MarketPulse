import React from 'react';
function ChargeCommodities() {
  return (
    <div className="container table-container mt-5">
      <table className="table table-borderless table-striped text-muted fs-6">
        <thead>
          <tr>
            <th></th>
            <th>Currency futures</th>
            <th>Currency options</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Brokerage</td>
            <td>0.03% or ₹ 20/executed order whichever is lower</td>
            <td>₹ 20/executed order</td>
          </tr>
          <tr>
            <td>STT/CTT</td>
            <td>0.01% on sell side (Non-Agri)</td>
            <td>0.05% on sell side</td>
          </tr>
          <tr>
            <td>Transaction charges</td>
            <td>
              MCX: 0.0021% <br />
              NSE: 0.0001%
            </td>
            <td>
              MCX: 0.0418% <br />
              NSE: 0.001%
            </td>
          </tr>
          <tr>
            <td>GST</td>
            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
          </tr>

          <tr>
            <td>SEBI charges</td>
            <td>
              Agri: ₹1 / crore <br />
              Non-agri: ₹10 / croree
            </td>
            <td>₹10 / crore</td>
          </tr>
          <tr>
            <td>Stamp charges</td>
            <td>0.002% or ₹200 / crore on buy side</td>
            <td>0.003% or ₹300 / crore on buy side</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default ChargeCommodities;
