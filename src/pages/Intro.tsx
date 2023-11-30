import { CardWrapper } from "components"
import { CardProp } from "interfaces"
import React from "react"

const IntroPage:React.FC<CardProp> =({ activeIndex, index })=>{
    return <CardWrapper activeIndex={activeIndex} index={index}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel deleniti facere, quae consequuntur, corrupti magni aliquid incidunt corporis consectetur cumque necessitatibus nostrum aspernatur nisi a ipsa dolorum, dolores suscipit modi!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi rerum rem facere, quibusdam fugiat aliquam soluta sint, impedit dicta numquam neque cum vero? Odio, quia. Maxime reiciendis quibusdam quisquam necessitatibus.
    </CardWrapper>
}
export default IntroPage