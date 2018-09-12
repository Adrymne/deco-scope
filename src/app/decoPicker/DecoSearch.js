import React from 'react';
import { connect } from 'react-redux';
import Downshift from 'downshift';
import matchSorter from 'match-sorter';
import Paper from '@material-ui/core/Paper';

import { DECORATION_LIST } from 'decorations';
import SearchInput from './decoSearch/SearchInput';
import Suggestion from './decoSearch/Suggestion';
import * as selectors from 'store/selectors';
import * as actions from 'store/actions';

const stringifyDeco = deco => (deco ? `${deco.name} ${deco.size}` : '');

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
    {({
      getInputProps,
      getMenuProps,
      getItemProps,
      isOpen,
      inputValue,
      highlightedIndex
    }) => (
      <div>
        <SearchInput
          inputProps={getInputProps({
            placeholder: 'Enter decoration name...'
          })}
        />
        <div {...getMenuProps()}>
          {isOpen ? (
            <Paper square>
              {getMatches(inputValue).map((deco, index) => (
                <Suggestion
                  label={stringifyDeco(deco)}
                  key={deco.name}
                  itemProps={getItemProps({ index, item: deco })}
                  isSelected={highlightedIndex === index}
                />
              ))}
            </Paper>
          ) : null}
        </div>
      </div>
    )}
  </Downshift>
);

export default connect(
  state => ({ target: selectors.decoPickerTarget(state) }),
  actions
)(DecoSearch);
