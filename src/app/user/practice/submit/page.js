export default function Submit() {
  return (
    <div className="col-lg-12">
      <div className="card border-0 p-4">
        <div className="text-center" style={{ marginTop: 100 }}>
          <h4>Test Submitted Successfully.</h4>
          <p>You have submit your test exam, see your marks obtained below</p>
        </div>
        <div className="text-center" style={{ marginTop: 100 }}>
          <p>Overall Result Summary</p>
        </div>
        <div className="row justify-content-center mb-5">
          <div className="col-lg-5">
            <table className="table table-striped table-bordered">
              <tr>
                <td>Total Question</td>
                <td>50</td>
                <td>Total Marks : 100</td>
              </tr>
              <tr>
                <td>Incorrect</td>
                <td>5</td>
                <td>- 10</td>
              </tr>
              <tr>
                <td>Marks Obtained</td>
                <td>45</td>
                <td>90</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
