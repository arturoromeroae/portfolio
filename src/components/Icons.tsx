import { SiPhp } from 'react-icons/si';
import { SiPython } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiHtml5 } from 'react-icons/si';
import { SiCss3 } from 'react-icons/si';
import { SiWordpress } from 'react-icons/si';
import { SiJquery } from 'react-icons/si';
import { SiBootstrap } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import { SiAngular } from 'react-icons/si';
import { SiFlask } from 'react-icons/si';
import { SiDjango } from 'react-icons/si';
import { SiLaravel } from 'react-icons/si';
import { SiGithub } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import { SiPostgresql } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import React from 'react';

export const Icons = () => {
    const styleIcons = {
        fontSize: 50,
        color: 'black'
    }

    const stylePython = {
        fontSize: 30,
        color: 'black'
    }
    return (
        <div className="container">
            <div className="row mt-2">
                <div className="col text-center">
                    <SiPhp className="textMobile" style={styleIcons} />
                    <h6 className="textMobile text-dark">PHP</h6>
                </div>
                <div className="col text-center mt-3">
                    <SiPython className="textMobile" style={stylePython} />
                    <h6 className="textMobile text-dark">Python</h6>
                </div>
                <div className="col text-center mt-3">
                    <SiJavascript className="textMobile" style={stylePython} />
                    <h6 className="textMobile text-dark">JavaScript</h6>
                </div>
                <div className="col text-center mt-3">
                    <SiHtml5 className="textMobile" style={stylePython} />
                    <h6 className="textMobile text-dark">HTML5</h6>
                </div>
                <div className="col text-center mt-3">
                    <SiCss3 className="textMobile" style={stylePython} />
                    <h6 className="textMobile text-dark">CSS</h6>
                </div>
                <div className="col text-center mt-3">
                    <SiWordpress className="textMobile" style={stylePython} />
                    <h6 className="textMobile text-dark">Wordpress</h6>
                </div>
                <div className="col text-center mt-3">
                    <SiJquery className="textMobile" style={stylePython} />
                    <h6 className="textMobile text-dark">jQuery</h6>
                </div>
                <div className="col text-center mt-3">
                    <SiBootstrap className="textMobile" style={stylePython} />
                    <h6 className="textMobile text-dark">Bootstrap</h6>
                </div>
                <div className="col text-center mt-3">
                    <SiLaravel className="textMobile" style={stylePython} />
                    <h6 className="textMobile text-dark">Laravel</h6>
                </div>
                <div className="col text-center mt-3">
                    <SiReact className="textMobile" style={stylePython} />
                    <h6 className="textMobile text-dark">React</h6>
                </div>
                <div className="col text-center mt-3">
                    <SiAngular className="textMobile" style={stylePython} />
                    <h6 className="textMobile text-dark">Angular</h6>
                </div>
                <div className="col text-center mt-3">
                    <SiFlask className="textMobile" style={stylePython} />
                    <h6 className="textMobile text-dark">Flask</h6>
                </div>
                <div className="col text-center mt-3">
                    <SiDjango className="textMobile" style={stylePython} />
                    <h6 className="textMobile text-dark">Django</h6>
                </div>
                <div className="col text-center mt-3">
                    <SiGithub className="textMobile" style={stylePython} />
                    <h6 className="textMobile text-dark">Github</h6>
                </div>
                <div className="col text-center mt-3">
                    <GrMysql className="textMobile" style={stylePython} />
                    <h6 className="textMobile text-dark">Mysql</h6>
                </div>
                <div className="col text-center mt-3">
                    <SiPostgresql className="textMobile" style={stylePython} />
                    <h6 className="textMobile text-dark">Postgresql</h6>
                </div>
                <div className="col text-center mt-3">
                    <SiMongodb className="textMobile" style={stylePython} />
                    <h6 className="textMobile text-dark">Mongodb</h6>
                </div>
            </div>
        </div>
    )
}
