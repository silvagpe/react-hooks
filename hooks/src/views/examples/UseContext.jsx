import React, { useContext } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import DataContext from '../../data/DataContext'

const UseContext = (props) => {

    const {state, setState} = useContext(DataContext)

    function addNumber(detla){
        setState({
            ...state,
            number:state.number+detla
        })
    }

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />

            <div className="center">
                <span className="text">{state.number} - {state.text}</span>

                <div>
                    <button className="btn" onClick={()=>addNumber(-1)}>-1</button>
                    <button className="btn" onClick={()=>addNumber(+1)}>+1</button>
                </div>
            </div>
        </div>
    )
}

export default UseContext
