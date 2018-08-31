import React from 'react';
import { Table } from 'reactstrap';
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
      {melds.map((decos, index) => <tr key={index}>{renderDecos(decos)}</tr>)}
    </tbody>
  </Table>
);

export default Melds;
