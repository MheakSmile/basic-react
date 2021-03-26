import { useState, useEffect } from 'react'

const FormCounter = () => {
    const [Cout, setCout] = useState({
        num: 0,
    })

    useEffect(() => {
        console.log('Mount Component')
    }, [])

    return (
        <div class="container-sm">         
                <br />
                    <h1 className="text-success">{Cout.num}</h1>
                <button
                    onClick={() => {
                        setCout({ ...Cout, num: Cout.num + 1 })
                    }}
                >
                    เพิ่ม(+)
                </button>
                <button
                className="ml-1"
                    onClick={() => {
                        setCout({ ...Cout, num: Cout.num - 1 })
                    }}
                >
                     ลด(-)
                </button>        
        </div>
    )
}

export default FormCounter