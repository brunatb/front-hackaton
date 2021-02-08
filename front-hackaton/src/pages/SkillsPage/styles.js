import styled from 'styled-components';

const styledPage = styled.div`
    width: 100%;
    background: #FFFFFF;
    margin: 90px 0 20px 0;
    font-family: 'Roboto', sans-serif;
    .container{
        width: 70%;
        margin: 0 auto;

        h3{
            font-style: normal;
            font-weight: bold;
            font-size: 18px;
            line-height: 27px;
            color: #D05CE3;
            margin: 30px 0 15px 0;
        }

        p{
            font-weight: 200;
            text-align: justify;
            margin: 0 0 15px 0;
        }

        a{
            background: #69F0AE;
            padding: 8px 10px;
            margin: 5px;
            border-radius: 10px;
        }

        a:hover{
            color: #69F0AE;
            background: #FFFFFF;
            border: 1px solid #69F0AE
        }

        .course{
            font-weight: bold;
            margin: 0 0 15px 0;
        }
    }
    h2{
        font-style: normal;
        font-weight: bold;
        font-size: 22px;
        line-height: 27px;
        color: #D05CE3;
        text-align: center;
    }

    .image{
        width: 100%;
        display: flex;
        justify-content: center;
    }
    img{
        width: 20%;
    }
`;

export default styledPage;