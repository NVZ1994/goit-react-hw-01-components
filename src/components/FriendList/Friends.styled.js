import styled from '@emotion/styled'

export const ListOfFriends = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: start;
`

export const FriendElement = styled.li`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const Span = styled.span`
    border-radius: 50%;
    height: 10px;
    width: 10px;  

    background-color: ${props => {
    if (props.isOnline) {
        return 'green';
    } else {
        return 'red';
    }
    }};
`