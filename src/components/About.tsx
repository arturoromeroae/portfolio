import arturo from '../images/arturo.jpg';
import { Icons } from './Icons';

export const About = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col mt-5">
                    <img  src={arturo} alt="" width="300" />
                </div>
                <div className="col mt-5">
                    <h3>Arturo Romero</h3>
                    <p>
                        Lorem ipsum dolor sit amet, 
                        consectetur adipisicing elit. 
                        Numquam, molestias. Non 
                        quibusdam nostrum laboriosam. 
                        Soluta, culpa ipsam quas 
                        ullam, dolore perspiciatis 
                        obcaecati, dolorum nostrum 
                        suscipit magni facere mollitia 
                        autem recusandae.
                    </p>
                    <Icons />
                </div>
            </div>
        </div>
    )
}
