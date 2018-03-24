import React from 'react';

export default function FilterBar(props) {
    let filterInput;
    return (
        <div className="filterBar-container">
            <input type="text" ref={el => filterInput = el} placeholder="Digite aqui um termo para busca"
                   onChange={() => props.onChange(filterInput.value)}/>
        </div>
    );

}