import styled from "styled-components"

const Base = styled.div`
    height: 10px;
    width: 250px;
    background: white;
    margin-left: 80px;
`

const VerticalLine = styled.div`
    height: 250px;
    width: 10px;
    background: white;
    margin-left: 150px;
`

const HorizontalLine = styled.div`
    height: 10px;
    width: 140px;
    background: white;
    position: absolute;
    right: 80px;
    top: 0;
`

const VerticalLineSmall = styled.div`
    height: 40px;
    width: 10px;
    background: white;
    margin-left: 150px;
    position: absolute;
    right: 80px;
    top: 0;
`

const Head = styled.div`
    height: 30px;
    width: 30px;
    border: 3px solid white;
    border-radius: 50%;
    position: absolute;
    right: 67px;
    top: 38px;
`

const Body = styled.div`
    height: 80px;
    width: 5px;
    background: white;
    position: absolute;
    right: 82px;
    top: 72px;
`

const RightArm = styled.div`
    height: 5px;
    width: 50px;
    background: white;
    position: absolute;
    right: 80px;
    top: 90px;
    rotate: -30deg;
`

const LeftArm = styled.div`
    height: 5px;
    width: 50px;
    background: white;
    position: absolute;
    right: 39px;
    top: 90px;
    rotate: 30deg;
`

const RightLeg = styled.div`
    height: 5px;
    width: 50px;
    background: white;
    position: absolute;
    right: 80px;
    top: 160px;
    rotate: -30deg;
`

const LeftLeg = styled.div`
    height: 5px;
    width: 50px;
    background: white;
    position: absolute;
    right: 39px;
    top: 160px;
    rotate: 30deg;
`

export default function HangmanDrawing() {
  return (
    <div style={{ position: 'relative' }}>
        <VerticalLineSmall />
        <HorizontalLine />
        <VerticalLine />
        <Base />

        <Head />
        <Body />
        <RightArm />
        <LeftArm />
        <RightLeg />
        <LeftLeg />
    </div>
  )
}
