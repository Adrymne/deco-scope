import React from 'react';
import { Table } from 'reactstrap';
import { connect } from 'react-redux';

import * as selectors from 'store/selectors';
import Deco from './melds/Deco';
import './Melds.css';

const renderDecos = decos =>
  decos.map((deco, index) => (
    <td key={index}>
      <Deco deco={deco} />
    </td>
  ));

const Melds = ({ melds }) => (
  <Table bordered className="melds__table">
    <tbody>
      {melds.map((decos, index) => (
        <tr key={index}>{renderDecos(decos)}</tr>
      ))}
    </tbody>
  </Table>
);

const mapStateToProps = state => ({
  melds: selectors.melds(state)
});

export default connect(mapStateToProps)(Melds);
