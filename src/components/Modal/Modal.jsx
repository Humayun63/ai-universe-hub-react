import React from 'react';

const Modal = ({ singleData }) => {
    const { description, features, image_link, input_output_examples, integrations, pricing, accuracy } = singleData;
    console.log(accuracy?.score)
    return (
        <>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className='md:flex justify-between mt-6 gap-4'>
                        <div className="card bg-red-200  text-neutral-content border-red-500 border">
                            <div className="card-body items-center ">
                                <h2 className="card-title text-black mb-4">{description}</h2>
                                <div className='md:flex items-center justify-between w-12/12 gap-2'>
                                    <div className='bg-white p-2 text-green-500 text-center rounded'>
                                        <p>{pricing ? pricing[0].price : 'free'}</p>
                                        <p>{pricing ? pricing[0].plan : 'Basic'}</p>
                                    </div>
                                    <div className='bg-white p-2 text-orange-500 text-center rounded'>
                                        <p>{pricing ? pricing[1].price : 'free'}</p>
                                        <p>{pricing ? pricing[1].plan : 'Pro'}</p>
                                    </div>
                                    <div className='bg-white p-2 text-green-500 text-center rounded'>
                                        <p>{pricing ? pricing[2].price : 'free'}</p>
                                        <p>{pricing ? pricing[2].plan : 'Enterprise'}</p>
                                    </div>
                                </div>
                                <div className='md:flex justify-between w-full mt-4 text-black gap-2'>
                                    <div>
                                        <h3 className='text-2xl font-semibold'>Features</h3>
                                        <ul className='list-disc ps-7 mt-2'>
                                            {
                                                Object.values(features || {}).map(value => <li>{value.feature_name}</li>)
                                            }
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className='text-2xl font-semibold'>Integrations</h3>
                                        <ul className='list-disc ps-7 mt-2'>
                                            {
                                                integrations ? integrations.map(item => <li>{item}</li>) : "No Data Found"
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card card-compact bg-base-100 shadow-xl p-5">
                            <figure>
                                <img src={image_link ? image_link[0] : image_link} alt={description} className='rounded-2xl' />
                            </figure>
                            { accuracy?.score && <span className='bg-red-400 w-4/12 text-white p-2 text-center rounded-lg absolute right-6'>{accuracy?.score *100}% accuracy</span> }
                            
                            <div className="card-body text-center">
                                <h3 className='text-lg font-semibold'>{input_output_examples ? input_output_examples[0]?.input : 'Can you give any example?'}</h3>
                                <p className='text-base text-slate-400'>{input_output_examples ? input_output_examples[0]?.output : 'No! Not Yet! Take a break!!!'}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Modal;