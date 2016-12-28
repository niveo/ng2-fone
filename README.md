# ng2-fone
Ng-Fone module updated to work in Angular 2

To install simply run

npm install ng2-fone.

To use it in your Angular 2 app import the module in your root module(app.module.ts) as shown below.

import {Ng2FoneModule} from 'ng2-fone';
...
...
@NgModule({

imports:[
Ng2FoneModule
],

})

In your components simply import the service.

import {Ng2Fone} from 'ng2-fone';
...
...
export class yourmodule {

constructor(private ng2fone: Ng2Fone) {

console.log(ng2fone.getmobilename('phonemodelno'));

}

}

For further details - http://tphangout.com/?p=486
