import React, { useState, useEffect } from 'react';

import CustomCoaches from "./shared/components/CustomCoaches";
import CustomFooter from "./shared/components/CustomFooter";
import CustomHeader from "./shared/components/CustomHeader";
import CustomHero from "./shared/components/CustomHero";
import CustomJoin from "./shared/components/CustomJoin";
import CustomShedules from "./shared/components/CustomShedules";
import CustomTranningGrounds from "./shared/components/CustomTranningGrounds";
import { mokSwimmers } from './mok-data/swimmers.mok';
import { CustomSwimmers } from './shared/components/CustomSwimmers';

export default function MithraApp() {


    return (
        <>
            <div className="min-h-screen font-display bg-slate-50 text-slate-900 selection:bg-accent selection:text-white">
                <CustomHeader />

                <CustomHero />

                <CustomSwimmers swimmers={mokSwimmers} />

                <CustomTranningGrounds />

                <CustomCoaches />

                <CustomShedules />

                <CustomJoin />

                <CustomFooter />
            </div>

        </>

    )
}
