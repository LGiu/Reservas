import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {MdDelete, MdAddCircle, MdRemoveCircle} from 'react-icons/md';
import './style.css';
import {removeReserve, updateAmountRequest} from "../../store/modules/reserve/actions";

export default function Index() {

    const dispath = useDispatch();
    const reserves = useSelector(state => state.reserve);

    function handleDelete(id) {
        dispath(removeReserve(id))
    }

    function decremetAmount(trip) {
        dispath(updateAmountRequest(trip.id, trip.amount - 1))
    }

    function incremetAmount(trip) {
        dispath(updateAmountRequest(trip.id, trip.amount + 1))
    }

    return (
        <div>
            <h1 className="title">Voce solicitou {reserves.length} reservas</h1>

            {reserves.map(reserve => (
                <div className="reservas" key={reserve.id}>
                    <img
                        src={reserve.image}
                        alt={reserve.title}
                    />
                    <strong>{reserve.title}</strong>
                    <div id="amount">
                        <button
                            type="button"
                            onClick={() => {
                                decremetAmount(reserve)
                            }}>
                            <MdRemoveCircle size={20} color="#191919"/>
                        </button>
                        <input type="text" readOnly value={reserve.amount}/>
                        <button
                            type="button"
                            onClick={() => {
                                incremetAmount(reserve)
                            }}>
                            <MdAddCircle size={20} color="#191919"/>
                        </button>
                    </div>
                    <button
                        type="button"
                        onClick={() => {
                            handleDelete(reserve.id)
                        }}>
                        <MdDelete size={20} color="#191919"/>
                    </button>
                </div>
            ))}

            <footer>
                <button type="button">Solicitar Reservas</button>
            </footer>

        </div>
    )
};