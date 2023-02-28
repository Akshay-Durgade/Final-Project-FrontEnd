import "./Transaction.css";
export function TransactionPage() {
  return (
    <>
      <div className="hg">
        <div>
            <h1 className="text-dark mt-3">Transactions History</h1>
        </div>
        <div className="container">
          <table className="table table-striped table-hover table-bordered table-sm align-middle caption-top table-responsive table-light">
            <caption className="text-center fs-1 bold text-white">
              Transactions History
            </caption>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Transaction ID</th>
                <th scope="col">Date</th>
                <th scope="col">Amount</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>ABC</td>
                <td>123456789</td>
                <td>23/02/2023</td>
                <td>7359.10</td>
                <td>Success</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>ABC1</td>
                <td>123AV6789</td>
                <td>23/02/2023</td>
                <td>710</td>
                <td>Success</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>AB2C</td>
                <td>1234567FT9</td>
                <td>23/02/2023</td>
                <td>96350</td>
                <td>Success</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
