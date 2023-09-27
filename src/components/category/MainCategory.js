import React from 'react'
import Container from '../Container'
import Tile1 from '../tiles/Tile1'
import Title from '../Titile'
import LatestNewsWithImage from '../tiles/LatestNewsWithImage'


const MainCategory = ({ name }) => {
    return (
        <>
            <Container>
                <div>This is category of {name}</div>
                <Title title={"लेटेस्ट"} />

                <div className='grid grid-cols-12'>
                    <div className='col-span-9'>

                    </div>
                    <div className='col-span-3'>
                        <LatestNewsWithImage />
                    </div>
                </div>
            </Container>

        </>
    )
}

export default MainCategory