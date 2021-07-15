import logo from './logo.svg';
import './App.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function App() {
  return (
    <div className="App">
      <div style={{ width: 587, border: "1px solid gray", borderRadius: 16, margin: 15 }}>
        <TableContainer>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell align="right" style={{
                  textAlign: "center", backgroundColor: "gray",
                  borderBottomLeftRadius: 15,
                  borderTopRightRadius: 15
                }}>Deposit size</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell style={{ border: "none", paddingRight: 0, width: 226, paddingLeft: 0, paddingBottom: 0 }} component="th" scope="row">
                  <TableCell component="th" scope="row" style={{
                    textAlign: "center", backgroundColor: "gray",
                    borderTopRightRadius: 15,
                    borderBottomLeftRadius: 16
                  }}>
                    Bonus size
                  </TableCell>
                  <TableCell style={{ paddingRight: 0 }} component="th" scope="row">
                    <TableBody>
                      <TableRow>
                        <TableCell style={{ height: 12 }}>
                        </TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell className="leftCellTable" align="right">
                          6 months
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="leftCellTable" align="right">
                          12 months
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="leftCellTable">
                          24 months
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </TableCell>
                </TableCell>

                <TableHead>
                  <TableRow>
                    <TableCell className="headerTable" >1,000 INDA</TableCell>
                    <TableCell className="headerTable" align="right">10,000 INDA</TableCell>
                    <TableCell className="headerTable" align="right">100,000 INDA</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell className="cellTable">
                      20%+
                    </TableCell>
                    <TableCell className="cellTable">
                      25%+
                    </TableCell>
                    <TableCell className="cellTable">
                      30%+
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="cellTable">
                      25%+
                    </TableCell>
                    <TableCell className="cellTable">
                      30%+
                    </TableCell>
                    <TableCell className="cellTable">
                      35%+
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="cellTable">
                      30%+
                    </TableCell>
                    <TableCell className="cellTable">
                      35%+
                    </TableCell>
                    <TableCell className="cellTable">
                      40%+
                    </TableCell>
                  </TableRow>
                </TableBody>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

      </div>
    </div>
  );
}

export default App;
