import React, { useContext } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

import DataContext from '../../data/DataContext'
import { AppContext } from '../../data/Store'

const UseContext = (props) => {

    const {state, setState} = useContext(DataContext)

    function addNumber(detla){
        setState({
            ...state,
            number:state.number+detla
        })
    }

    const {number,setNumber} = useContext(AppContext);

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />

            <SectionTitle title="Exercício #01"></SectionTitle>
            <div className="center">
                <span className="text">{state.number} - {state.text}</span>

                <div>
                    <button className="btn" onClick={()=>addNumber(-1)}>-1</button>
                    <button className="btn" onClick={()=>addNumber(+1)}>+1</button>
                </div>
            </div>

            <SectionTitle title="Exercício #02"></SectionTitle>
            <div className="center">
                {number}
            </div>
        </div>
    )
}

export default UseContext
