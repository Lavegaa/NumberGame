import { createAction, handleActions } from "redux-actions";
import produce from "immer";
//action type
const INITIALIZE = "numbergame/INITIALIZE";
const CLICK_TILE = "numbergame/CLICK_TILE";
const TOGGLE_ACTIVE = "numbergame/TOGGLE_ACTIVE";

//action creator
export const initialize = createAction(INITIALIZE);
export const clickTile = createAction(CLICK_TILE);
export const toggleActive = createAction(TOGGLE_ACTIVE);

//initial state
const initialState = {
  tiles: [
    {
      key: 1,
      number: 1,
      done: false
    },
    {
      key: 2,
      number: 2,
      done: false
    },
    {
      key: 3,
      number: 3,
      done: false
    },
    {
      key: 4,
      number: 4,
      done: false
    },
    {
      key: 5,
      number: 5,
      done: false
    },
    {
      key: 6,
      number: 6,
      done: false
    },
    {
      key: 7,
      number: 7,
      done: false
    },
    {
      key: 8,
      number: 8,
      done: false
    },
    {
      key: 9,
      number: 9,
      done: false
    },
    {
      key: 10,
      number: 10,
      done: false
    },
    {
      key: 11,
      number: 11,
      done: false
    },
    {
      key: 12,
      number: 12,
      done: false
    },
    {
      key: 13,
      number: 13,
      done: false
    },
    {
      key: 14,
      number: 14,
      done: false
    },
    {
      key: 15,
      number: 15,
      done: false
    },
    {
      key: 16,
      number: 16,
      done: false
    }
  ],
  targetNumber: 1,
  isActive: false
};

function randomTileSet(init) {
  let ranTiles = produce(init.tiles, draftState => {
    draftState.sort(() => {
      return Math.random() - Math.random();
    });
  });
  return { ...init, tiles: ranTiles };
}

const randomTiles = randomTileSet(initialState);
//reducer
export default handleActions(
  {
    [INITIALIZE]: (state, action) => ({
      ...state,
      tiles: randomTileSet(initialState).tiles,
      targetNumber: 1,
      isActive: false
    }),
    [CLICK_TILE]: (state, action) => {
      if (state.targetNumber === action.payload.clickedNumber.number) {
        return {
          ...state,
          tiles: state.tiles.map(tile =>
            tile.number === action.payload.clickedNumber.number ? { ...tile, done: true } : tile
          ),
          targetNumber: state.targetNumber + 1
        };
      } else {
        return state;
      }
    },
    [TOGGLE_ACTIVE]: (state, action) => {
      if (action.payload.clickedNumber.number === 1 && state.targetNumber === 2) {
        state.isActive = true;
      } else if (action.payload.clickedNumber.number === 16 && state.targetNumber === 17) {
        state.isActive = false;
      }
      return { ...state, isActive: state.isActive };
    }
  },
  randomTiles
);
