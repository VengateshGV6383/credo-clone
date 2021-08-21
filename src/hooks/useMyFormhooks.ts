import { useState,useReducer, ChangeEvent, FormEvent } from "react";
import { FocusEvent } from "react";
type dispatchEventType="error"|"changevalue";
interface Props<Fields>{
    initialValues:Partial<Fields>
    validateForm:(values:Partial<Fields>)=>{[K in keyof Fields]:string};
    onSubmit:(values:Partial<Fields>)=>void
  }
  interface intialState<Fields>{
      state:{
        values:Partial<Fields>
        errors:{[K in keyof Fields]:string}
      }
  }
const useMyFormhooks=<Fields>({initialValues,validateForm,onSubmit}:Props<Fields>)=>{

    type FieldsType= keyof Fields;
    type dispatchStateType= intialState<Fields>
    const [showErrors, setShowErrors] = useState(false);
    const [isEmpty,setEmpty]=useState(false);
    const [touched, setTouched] = useState(initialValues);
    const reducerEvent=(reducerState:dispatchStateType,action:{type:dispatchEventType,payload:FieldsType|{name:FieldsType,value:string}|string}):dispatchStateType=>{
        const{state}=reducerState
        setEmpty(false);
        switch(action.type){
          case "error":
            const {errors}= state
            const errorObject:{[K in keyof Fields]:string}= validateForm(state.values);

           state.errors={...errors,[action.payload as FieldsType]:errorObject[action.payload as FieldsType]};

            return {state}
          case "changevalue":
            const {values}=state;
            const {name,value}=action.payload as {name:FieldsType,value:string}
            state.values={...values,[name]:value}
            
            return {state};
            default:return reducerState;

        }

      }
    const initialState:intialState<Fields>={
        state:{
         errors :{} as {[K in keyof Fields]:string},
         values: initialValues
        }

    }

  const handleFocus = (event:FocusEvent<HTMLFormElement>| FocusEvent<HTMLTextAreaElement>)=> {
    const { name } = event.target;
    setTouched((prevState) => ({
      ...prevState,
      [name]: true,
    }));
  };
    const [reducerState,dispatch]=useReducer(reducerEvent,initialState )
    const handleChange=(event:ChangeEvent<HTMLInputElement>|ChangeEvent<HTMLTextAreaElement>|ChangeEvent<HTMLSelectElement>)=>{
        const {name,value}=event.target;
        dispatch({type:"changevalue",payload:{name:name as FieldsType,value }})
        dispatch({type:"error",payload:name as FieldsType})
        
    }
const handleSubmit=(event:FormEvent)=>{
    event.preventDefault();

    const {values,errors}=reducerState.state;
  
    let noError =Object.keys(values).every((key)=> !errors[key as FieldsType] )
    let Values =Object.keys(values).every((key)=> values[key as FieldsType]!==initialValues[key as FieldsType])

    if(Values){
      if(noError){
        onSubmit(values)
      }
      else{
        setShowErrors(true)
      }
    }else{
      setEmpty(true)
      setShowErrors(true)
    }
    

}
return {
    values:reducerState.state.values,
    errors:reducerState.state.errors,
    touched:touched,
    isEmpty:isEmpty,
    showErrors:showErrors,
    handleChange:handleChange,
    handleFocus:handleFocus,
    handleSubmit:handleSubmit

}
}
export default useMyFormhooks;