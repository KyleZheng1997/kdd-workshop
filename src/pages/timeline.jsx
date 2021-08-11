function Timeline() {
  return (
    <div style={{ paddingBottom: 400 }}>
      <div className="container" >
        <div className="row justify-content-center">
          <div className="col-lg-8 cl-md-10">
            <h2>Workshop Timeline</h2>
            <table className="table">
              <tbody>
                <tr>
                  <td>Workshop Paper Submission</td>
                  <td>
                    <div style={{ textDecoration: "line-through", color: "red" }}>
                      May 20th, 2021
                    </div>
                    
                    <div>
                      June 3rd, 2021
                    </div>

                  </td>
                </tr>
                <tr>
                  <td>Workshop Paper Notification</td>
                  <td>June 20th, 2021</td>
                </tr>
                <tr>
                  <td>Workshop Program Final Submission and Full Website Online</td>
                  <td>July 2nd, 2021</td>
                </tr>
                <tr>
                  <td>Workshop Dates</td>
                  <td>August 14-18th, 2021</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
