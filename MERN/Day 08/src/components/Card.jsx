import React from 'react'

export default function Card(props) {
    return (
        <div className='container-xl'>
            <div className='row gy-4'>
                {
                    props.movies.map((data, index) => {
                        return (
                            <div className='col-3  shadow'>
                                <div class="card ">
                                    <img width={"100%"} height={"100%"} src={`https://image.tmdb.org/t/p/w1280/${data.backdrop_path}`} class="card-img-top object-fit-cover" alt="..." />
                                    <button className={`rating ${data.vote_average >= 8 ? 'bg-danger' : 'bg-primary'}`}>{data.vote_average}</button>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}
