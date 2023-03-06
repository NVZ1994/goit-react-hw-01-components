import styled from '@emotion/styled'

export const ProfileWrapper = styled.div`
        font-size: 20px;
        background-color: lightblue;
        width: 750px;
        text-align: center;
    img{
        width: 300px
    }
    .name {
        font-weight: bold;
    }
    
`

export const Statistic = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    margin: 0 auto 20px auto;
    padding: 0;

    li {
        display: flex;
        flex-direction: column;
        border: 1px solid black;
        padding: 10px;
        width: 170px;
    }
`
