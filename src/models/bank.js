
export default {

    namespace: 'bank',
  
    state: {
        money:666
    },
  
    reducers: {
      save(state, action) {
        return { ...state, ...action.payload };
      },
    },
  
  };
  