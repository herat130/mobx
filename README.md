react - mobx project 

## project will contain below task
- inject multiple store for one component [combine the store in single store and inject with the provider]
- how to combine multiple store [class based constructor approach : store/root.store.js]
-  store testing best practice
- async data handling in mobx store
- work with event listner

## notes:
- only tht component will be render where store has been change using mobx and mark with observer
- for async action mark callback function of the promise with decorator @action  or use flow generator fn or use runInAction for typescript support 


### to run the project
- npm i
- npm start [will bootstrap server and client]