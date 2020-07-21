
const middlewareLogger = store => next => action => {
   console.log('Original State:', store.getstate());
   console.log ('Current Action:', action);
   next(action);
   console.log('New Updated State:', store.getState());
};

export default middlewareLogger;