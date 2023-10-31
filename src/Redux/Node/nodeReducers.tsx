import { UPDATE_NODE_COORD, ADD_NODE, DELETE_NODE } from "./nodeActions";
// import { nodeState, nodeAction } from "../../Types/Redux/node";

const initialNodeState = {
  data: {
    // node objects
  }
}

const nodeReducer = (state: any = initialNodeState, action: any)=> {
  switch(action.type) {
    case UPDATE_NODE_COORD:
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.nodeID]: {
            ...state.data[action.payload.nodeID], 
            coord: action.payload.coord
          }
        }
      };
    case ADD_NODE:
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.nodeID]: {
            ...action.payload.data,
            componentType: 'node'
          }
        }
      }
    case DELETE_NODE:
      console.log(state)
      const { [action.payload]: deletedNode, ...newNodeData} = state.data;
      return {
        ...state,
        data: newNodeData
      }
    default: return state;
  }
}

export default nodeReducer;