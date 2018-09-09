import React from 'react';
import { Table } from 'reactstrap';
import { connect } from 'react-redux';

import * as selectors from 'store/selectors';
import * as actions from 'store/actions';
import Deco from './melds/Deco';
import './Melds.css';

const Melds = ({ melds, openDecoPicker, questAdvanceCount }) => (
  <Table bordered className="melds__table">
    <tbody>
      {melds.map((meld, index) => (
        <tr
          key={meld.id}
          className={index < questAdvanceCount ? 'table-warning' : ''}
        >
          {meld.decos.map((decoName, index) => (
            <td key={index}>
              <Deco
                decoName={decoName}
                edit={() => openDecoPicker(meld.id, index)}
              />
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </Table>
);

const mapStateToProps = state => ({
  questAdvanceCount: selectors.questAdvanceCount(state),
  melds: selectors.melds(state)
});

export default connect(
  mapStateToProps,
  actions
)(Melds);
