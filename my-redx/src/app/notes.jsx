//1.) Store  :
//A store is a central place where our application is stored & it can be created using the configureStore function, and it holds the entire state tree of our application.

//a.) Create ConfigureStore from reduxjs/toolkit
//b.) Provide the redux store to react (check main.jsx)

// 2.) Slice:
// A slice is a piece of store data and the corresponding reducer logic to update that state. Slices are a way to organize our Redux store by breaking it down into smaller , more manageable parts

//Steps :
// c.) Create slice and Follow the doc convention of creating different folder as per the slice components.
// d.) Use the createSlice function from reduxjs/toolkit to create a slice
// e.) Export the slice from the slice file and import it in the store file.
// f.) Add the slice to the store using the configureStore function from reduxjs/toolkit.
// g.) Use the slice in the component to update the state by using redux state and actions in the react components.

//Importent attributes and terminologies in slice
//a.) Initial State : -> as the name suggest is going to the initial data of our state
//b.) Reducers : -> are the instruction on what to do with each slice of cake.
//c.) Actions : -> are like the requests or commands you give to change a specific slice of cake

//Hooks : useSelector and useDispatch:
//useSelector : allows us to read data from the redux store.
//useDispatch : It is used to send actions to the store, triggering updates to the application state.
