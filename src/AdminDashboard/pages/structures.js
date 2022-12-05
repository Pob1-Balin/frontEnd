import React from 'react'
import structure1 from '../s03.png'
import structure2 from '../s17.png'
import structure3 from '../s23.png'

function UnitStructures() {
    return (
        <>
            <main style={{marginTop:'30px'}} className='text-center'>

            <h1> Select the type of structure you want from the unit</h1>
                <div className='text-center d-flex justify-content-around'>
                    <div className="struct1" style={{marginBottom: '30px', marginTop:'50px'}}>
                        <button>
                            <img src={structure1} width={400}/>
                            <h5>Video Content</h5>
                        </button>
                    </div>
                    <div className="struct1" style={{marginBottom: '30px', marginTop:'50px'}}>
                        <button>
                            <img src={structure2} width={400} />
                            <h5>Content with images</h5>
                        </button>
                    </div>
                    <div className="struct1" style={{marginBottom: '30px', marginTop:'50px'}}>
                        <button>
                            <img src={structure3} width={400}/>
                            <h5>Content with Text Only</h5>
                        </button>
                    </div>
                </div>
            </main>
        </>
    )
}

export default UnitStructures;