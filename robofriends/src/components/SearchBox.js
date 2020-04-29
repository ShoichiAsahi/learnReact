import React from 'react';

// Destructuring here!!!!
// ({...}) allow us to grab the props objcet and grab its properties.

// onChange で変化を捉えると、 searchChange ファンクションが実行される。
const SearchBox = ({searchfield, searchChange}) => {
  return(
    <div className='pa2'>
      <input 
        className='pa3 ba b--green bg-lightest-blue'
        type='search' 
        placeholder='search robots' 
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;