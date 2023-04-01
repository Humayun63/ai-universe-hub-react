import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const SingleCard = ({ card, handleModal }) => {
    const { id, name, image, features, published_in } = card;
    return (
        <div className="card card-compact p-4 bg-base-100 shadow-xl">
            <figure><img src={image} alt={name} className='rounded-2xl' /></figure>
            <div className="card-body">
                <h3 className='font-semibold text-2xl'>Features</h3>
                <ol className='list-decimal ps-6'>
                    {
                        features.map(feature => <li className='text-lg mb-1'>{feature}</li>)
                    }
                </ol>
                <hr className='border-1' />
                <div className='flex justify-between items-center'>
                    <div>
                        <h2 className="card-title ">{name}</h2>
                        <p className='text-slate-400 text-base font-medium my-2'>
                            <FontAwesomeIcon icon={faCalendarDays} />
                            <span> {published_in}</span>
                        </p>
                    </div>
                    <button className='text-rose-400 text-2xl' onClick={()=>handleModal(id)}>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;