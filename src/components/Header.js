import styled from "styled-components"

export default function Header() {
    return (
        <Container>
            <section><img src="https://s2.glbimg.com/8HqPBA7mOv-iJmiRzENHYik9ueo=/0x0:4317x3454/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2019/q/Y/Abb9TySwiZFtnyJoPAfg/homem-skatista-cruiser.jpg" alt=""></img><p>Skate</p></section>
            <section><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSL4mwQNWAbrUDSnzLhmEAa0YKzdP_I5SDiVzW7beqnau-YUD1KQCGAK6JV2aEfq8Ancc&usqp=CAU" alt=""></img><p>LongBoard</p></section>
            <section><img src="https://t1.uc.ltmcdn.com/es/posts/4/5/6/trucos_para_mejorar_con_el_skate_20654_600.jpg" alt=""></img><p>Peças</p></section>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100vw;
    position: relative;
    margin-bottom: 1rem;
    

    section{
        position: relative;
        img{
            box-sizing: border-box;
            width: 30vw;
            height: 40vh;
            
        }
        p{
            width: 100%;
            height: 100%;
            background: #22222299;
            color: #fff;
            font-size: 32px;
            top: 0;
            margin-block-end: 0;
            margin-block-start: 0;
            padding: 0.5rem 0;
            position: absolute;
            z-index: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            align-content: center;
            text-transform: uppercase;
            transition: 300ms ease;
        }
        p:hover{
            background-color: transparent;
            display: none;
            cursor: pointer;
        }
    }
`