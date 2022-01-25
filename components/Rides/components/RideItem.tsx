import styled from '@emotion/styled';
import {Ride} from "../../../api/RidesApi/types/ride";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  position: static;
  left: 24px;
  box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.12);
  border-left: 8px solid grey;
  border-radius: 4px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: auto;

  background-color: white;
  width: 50%;
  margin-block: 1em;
`

const Wrapper = styled.div<{linkLabel?: string}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: static;
  width: calc(100% - 48px);
  left: 24px;
  top: 0px;
  flex: none;
  order: 1;
  flex-grow: 1;
  margin: 0px 24px;
  gap: 24px;
`

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  position: static;
  width: calc(100% - 48px);
  left: 0px;
  top: 0px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  margin: 8px 0px;
`

const MessageHeader = styled.div`
  position: static;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 24px;
  left: 0px;
  top: 0px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 1;
  margin: 8px 0px;
`

const MessageDescription = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #334447;
  order: 0;
  flex-grow: 1;
  margin: 0px 24px 0 10px;
`

const StyledTitle = styled.div`
  position: static;
  height: 24px;
  left: 0px;
  top: 0px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #001114;
  flex: none;
  order: 0;
  flex-grow: 1;
  margin: 0px 24px 0 10px;
`

const StyledIconContainer = styled.div`
  cursor: pointer;
`

export type CardProps = {
    ride: Ride
};

export const RideItem = ({ride}: CardProps) => {
    return (
        <Container>
            <Wrapper>
                <Body>
                    <MessageHeader>
                        <StyledTitle>{ride.id}</StyledTitle>
                        <StyledIconContainer>
                            {`${ride.price} €`}
                        </StyledIconContainer>
                    </MessageHeader>
                    {ride.date}
                    <MessageDescription>
                        Start time : {ride.startTime}
                        <br/>
                        End Time : {ride.endTime}
                        <br/>
                        Duration : {ride.duration}
                        <br/>
                        Distance : {ride.distance} miles
                    </MessageDescription>
                </Body>
            </Wrapper>
        </Container>
    )
}
