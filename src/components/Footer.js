import styled from 'styled-components';

export default function Footer({ title, posterURL }) {
    return (
        <>
            <ContainerFooter>
                <span><img src={posterURL} alt={title} /></span>
                <span>{title}</span>
            </ContainerFooter>
        </>
    );
}

const ContainerFooter = styled.div`
    background-color: #DFE6ED;
    height: 117px;
    display: flex;
    align-items: center;
    border: 1px solid #9EADBA;
    gap: 14px;
    font-size: 26px;
    color: #293845;

    span img{
        width: 64px;
        height: 89px;
        padding: 8px;
        background-color: #ffffff;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 2px;
        margin-left: 10px;
    }
`;