import React, { useRef } from 'react';
import "./styles.css";

interface props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<props> = ({ todo, setTodo, handleAdd}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form className='input' onSubmit={(e) => {
      handleAdd(e); 
      inputRef.current?.blur();
    } }
    >
      <input 
        ref={inputRef}
        type="text"
        value={todo}
        onChange={e => setTodo(e.target.value)}
        placeholder='Enter a task'
        className='input__box' 
      />
        <button type='submit' className="input_submit">
          GO
        </button>
    </form>
  );
};

export default InputField