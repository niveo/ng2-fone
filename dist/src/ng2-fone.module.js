import { NgModule } from '@angular/core';
import { Ng2Fone } from './ng2-fone';
export function Ng2FoneFactory() {
    return new Ng2Fone();
}
;
export var Ng2FoneModule = (function () {
    function Ng2FoneModule() {
    }
    Ng2FoneModule.decorators = [
        { type: NgModule, args: [{
                    providers: [
                        {
                            provide: Ng2Fone,
                            useFactory: Ng2FoneFactory
                        }
                    ]
                },] },
    ];
    /** @nocollapse */
    Ng2FoneModule.ctorParameters = function () { return []; };
    return Ng2FoneModule;
}());
//# sourceMappingURL=ng2-fone.module.js.map