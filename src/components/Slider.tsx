import lost from '../images/Lost.svg';
import scrollData from '../images/scrolldown.json';
import { ReactTypical } from '@deadcoder0904/react-typical';
import { Lottie } from '@crello/react-lottie'
import teamData from '../images/team.json';

export const Slider = () => {
    const style = {
        backgroundColor: '#6b4aff'
    };
    const styleName = {
        backgroundColor: '#3f3d56'
    }
    const styleScroll = {
        width: '15%',
        marginLeft: '40%'
    }
    const styleTextAnimation = {
        height: 40,
        marginTop: '-50px'
    }

    return (
        <div className="d-flex" style={style}>
            <div className="text-center">
                <div style={styleScroll}>
                    <Lottie config={{
                        animationData: scrollData,
                        loop: true,
                        renderer: 'svg'
                    }}></Lottie>
                </div>
                <img src={lost} className="p-5" width="700" alt="person walking" />
            </div>
            <div className="p-3 rounded" style={styleName}>
                <p className="display-1 font-monospace text-center text-white mt-5">Arturo Romero</p>
                <div style={styleTextAnimation}>
                    <ReactTypical
                        className="text-center font-monospace text-white display-5 text-dark p-2 mt-5"
                        steps={['Programador Web', 2000, 'Full-Stack', 2000]}
                        loop={Infinity}
                        wrapper="div"
                    />
                </div>
                <div>
                    <Lottie config={{
                        animationData: teamData,
                        loop: true,
                        renderer: 'svg'
                    }}></Lottie>
                </div>
            </div>
        </div>
    )
}
