import React from "react";
import {Link} from "react-router-dom";
import {Card} from "primereact/card";

export default function About() {
    return (
        <Card className="m-2">
            <h1>About This Site</h1>
            <p>
                A ZX Spectrum emulator & programming environment for the browser.
            </p>
            <p>
                This site is a work in progress.
                Source available <a href="https://github.com/zxplay/zxplay" target="_blank">here</a>.
            </p>
            <p>
                Please read <Link to="/legal/privacy-policy">privacy policy</Link>
                {' '}and <Link to="/legal/terms-of-use">terms of use</Link>.
            </p>
            <h2>Create Projects</h2>
            <p>
                Registered users can save projects.
            </p>
            <p>
                Use the Sign-In button above and look for the "Sign Up" link on
                the proceeding page to create an account.
            </p>
            <h2>Acknowledgements</h2>
            <p>
                This software uses code from the following open source projects:
            </p>
            <ul>
                <li>
                    <a href="https://github.com/gasman/jsspeccy3" target="_blank">JSSpeccy3</a>{' '}
                    <a href="https://github.com/dcrespo3d/jsspeccy3-mobile" target="_blank">JSSpeccy3-mobile</a>.
                    These are licensed under terms of the GPL version 3 - see{' '}
                    <a href="https://github.com/gasman/jsspeccy3/blob/main/COPYING" target="_blank">COPYING</a>.
                </li>
                <li>
                    <a href="https://pasmo.speccy.org/" target="_blank">Pasmo</a> by Julián Albo García, alias "NotFound".
                    Licensed under terms of the GPL version 3 - see{' '}
                    <a href="https://github.com/zxplay/pasmo/blob/main/COPYING" target="_blank">COPYING</a>.
                </li>
{/*
                <li>
                    <a href="https://github.com/boriel/zxbasic" target="_blank">Boriel ZX BASIC</a> by Jose Rodriguez.
                    Licensed under terms of the GPL version 3 - see{' '}
                    <a href="https://github.com/boriel/zxbasic/blob/master/LICENSE.txt" target="_blank">LICENSE</a>.
                </li>
*/}
                <li>
                    <a href="https://github.com/zxplay/zmakebas" target="_blank">zmakebas</a> by Russell Marks.
                    This tool is public domain.
                </li>
                <li>
                    <a href="https://github.com/sehugg/8bitworkshop" target="_blank">8bitworkshop</a> by
                    Steven Hugg. Licensed under terms of the GPL version 3 - see{' '}
                    <a href="https://github.com/sehugg/8bitworkshop/blob/master/LICENSE" target="_blank">LICENSE</a>.
                </li>
            </ul>
            <h2>Sinclair ROM Copyright Permission</h2>
            <blockquote>
                Amstrad have kindly given their permission for the
                redistribution of their copyrighted material but retain that copyright.
            </blockquote>
            <a href="https://worldofspectrum.net/assets/amstrad-roms.txt" target="_blank">comp.sys.sinclair</a> 1999-08-31
        </Card>
    )
}
