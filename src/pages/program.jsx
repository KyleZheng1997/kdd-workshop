function Timeline() {
  return (
    <div style={{ paddingBottom: 400 }}>
      <div className="container" >
        <div className="row justify-content-center">
          
          <div className="col-lg-8 cl-md-10">
            <h2>Workshop Schedule</h2>
            <table className="table">
              <tbody>
                <tr>
                  <td> Spotlight X4</td>
                  <td className='tableCenter'> 08:00-08:40 </td>
                </tr>
                <tr>
                  <td>10 minutes break</td>
                  <td className='tableCenter'>08:40-08:50</td>
                </tr>
                <tr>
                  <td>Keynote - Tao Qin</td>
                  <td className='tableCenter'>08:50-09:30</td>
                </tr>
                <tr>
                  <td>Keynote - Emtiyaz Khan</td>
                  <td className='tableCenter'>09:30-10:10</td>
                </tr>
                <tr>
                  <td>10 minutes break</td>
                  <td className='tableCenter'>10:10-10:20</td>
                </tr>
                <tr>
                  <td>Spotlight X4</td>
                  <td className='tableCenter'>10:20-11:00</td>
                </tr>
                <tr>
                  <td>Poster Session - GatherTown</td>
                  <td className='tableCenter'>11:00-12:00</td>
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



