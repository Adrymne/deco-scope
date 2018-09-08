import React from 'react';
import Downshift from 'downshift';
import matchSorter from 'match-sorter';
import { Input } from 'reactstrap';
import { connect } from 'react-redux';
import * as selectors from 'store/selectors';
import * as actions from 'store/actions';
import { DECORATION_LIST } from 'decorations';

const stringifyDeco = deco =>
  deco ? `${deco.name} ${deco.size} (${deco.skill})` : '';

const getMatches = inputValue =>
  matchSorter(DECORATION_LIST, inputValue, {
    keys: ['name'],
    threshold: matchSorter.rankings.STARTS_WITH
  });

const DecoSearch = ({ setDeco, target }) => (
  <Downshift
    onChange={deco => setDeco(target.id, target.index, deco.name)}
    itemToString={stringifyDeco}
  >
    {({ getInputProps, getMenuProps, getItemProps, isOpen, inputValue }) => (
      <div>
        <Input {...getInputProps()} />
        <ul className="list-group" {...getMenuProps()}>
          {isOpen
            ? getMatches(inputValue).map((deco, index) => (
                <button
                  type="button"
                  className="list-group-item list-group-item-action"
                  {...getItemProps({
                    key: deco.name,
                    index,
                    item: deco
                  })}
                >
                  {stringifyDeco(deco)}
                </button>
              ))
            : null}
        </ul>
      </div>
    )}
  </Downshift>
);

export default connect(
  state => ({ target: selectors.decoPickerTarget(state) }),
  actions
)(DecoSearch);
