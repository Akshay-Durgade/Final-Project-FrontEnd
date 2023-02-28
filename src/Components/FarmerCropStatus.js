import "./FarmerCropStatus.css"
export function FarmerCropStatus() {
  return (
    <>
    <div className="bgp1">
      <div className="container">
        <table className="table table-bordered mt-5 align-middle caption-top table-responsive">
            <caption className="text-center fs-1 bold text-white">Crops Status</caption>
          <thead className="text-white">
            <tr>
              <th scope="col">Sr. No </th>
              <th scope="col">Crop</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price per Kg</th>
              <th scope="col">Total Price</th>
              <th scope="col">Status</th>
              <th scope="col">Sold/Unsold</th>
            </tr>
          </thead>
          <tbody className="text-white">
            <tr>
              <th scope="row">1</th>
              <td>Tomato</td>
              <td>1000</td>
              <td>80</td>
              <td>{1000*80}</td>
              <td>Accepted</td>
              <td>Sold</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Pomergranate</td>
              <td>100</td>
              <td>110</td>
              <td>{100*110}</td>
              <td>Accepted</td>
              <td>Sold</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Ginger</td>
              <td>50</td>
              <td>30</td>
              <td>{50*30}</td>
              <td>Accepted</td>
              <td>Sold</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Carrot</td>
              <td>30</td>
              <td>50</td>
              <td>{30*50}</td>
              <td>Accepted</td>
              <td>Sold</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Tomato</td>
              <td>100</td>
              <td>80</td>
              <td>{100*80}</td>
              <td>Accepted</td>
              <td>Sold</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Tomato</td>
              <td>1000</td>
              <td>80</td>
              <td>{1000*80}</td>
              <td>Accepted</td>
              <td>Sold</td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
    </>
  );
}
