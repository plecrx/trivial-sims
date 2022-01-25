import type { NextPage } from 'next'
import styled from "@emotion/styled";
import {Rides} from "../components/Rides/Rides";

const Container = styled.div`
  text-align: center;
`

const Home: NextPage = () =>
    <Container>
        RIDES
        <Rides/>
    </Container>

export default Home
