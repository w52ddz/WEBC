//定义数据
const initState1 = {
  count: 0,
};

export function countReducer(state = initState1, action: any) {
  switch (action.type) {
    case "ADD_COUNT":
      return { ...state, count: state.count + action.number };
    default:
      return state;
  }
}

const initState2 = {
  name: "IT飞牛",
};

export function nameReducer(state = initState2, action: any) {
  switch (action.type) {
    case "UPDATE_NAME":
      return { ...state, name: action.name };
    default:
      return state;
  }
}
