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
      <div>
        <TableContainer>
          <Table size="small" aria-label="a dense table" className="table">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell className="depositHeader" align="center">Deposit size</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell className="leftBlock" component="th" scope="row">
                  <TableCell className="bonusBlock">
                    Bonus size
                  </TableCell>
                  <TableCell style={{ paddingRight: 0 }} component="th" scope="row">
                    <TableBody className="mouthsColumn">
                      <TableRow>
                        <TableCell style={{ height: 24 }}>
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
                <Table size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell className="headerTable">1,000 INDA</TableCell>
                    <TableCell className="headerTable">10,000 INDA</TableCell>
                    <TableCell className="headerTable">100,000 INDA</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody className="percentBody">
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
                </Table>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

      </div>
    </div>
  );
}

export default App;
