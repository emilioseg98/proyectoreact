import React from 'react';

const Fighters = ({fighters = []}) => {
    return (
        <div className="row">
            {
                fighters.map((item, index) => (
                    <div key={index} className='col mb-4'>
                        <div className="card" style={{minWidth: "250px"}}>
                            <div className='card-body'>
                                <h5 className='card-title'>{item.FirstName} {item.LastName}</h5>
                                <hr/>
                                <p>Nickname: {item.Nickname}</p>
                                <p>Peso: {item.Weight}lb</p>
                                <p>Peleas Ganadas: {item.Wins}</p>
                                <p>Peleas Pérdidas: {item.Losses}</p>
                                <p>Alcance: {item.Reach}</p>
                                <p>Knockout Técnico: {item.TechnicalKnockouts}</p>
                                <p>Knockout Técnico Perdido: {item.TechnicalKnockoutLosses}</p>
                                <p>Sumisiones: {item.Submissions}</p>
                                <p>Sumisiones Perdidas: {item.SubmissionLosses}</p>
                                <p>Títulos Ganados: {item.TitleWins}</p>
                                <p>Títulos Perdidos: {item.TitleLosses}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Fighters