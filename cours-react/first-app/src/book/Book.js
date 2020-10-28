import React from "react"

export const Book = (props) => {
    return (
        <div>
            {props.book != undefined ?

                (<div className="row">
                    <div className="col">
                        {props.book.title}
                    </div>
                    <div className="col">
                        {props.book.authors.map((a,index)=> (
                            <div key={index} className="row">
                                <div>
                                    {a.name}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>)
                :
                null}
        </div>
    )
}