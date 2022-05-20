import React, { useState } from 'react';

import Pdf_model from '../PDF_model/Pdf_model';
import Pdf2 from './Pdf2';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import pdf_model2 from '../PDF_model/pdf_model2';
import Pdf_model3 from '../PDF_model/Pdf_model3';
import Pdf_model4 from '../PDF_model/Pdf_model4';
import Pdf_model5 from '../PDF_model/Pdf_model5';


export default function Pdf() {


	return (
		<div>
			{/* <Pdf2 />
			<Pdf_model /> */}
			<Router>


				<Route exact path="/" component={Pdf2} />
				<Route exact path="/first" component={Pdf_model} />
				<Route exact path="/second" component={pdf_model2} />
				<Route exact path="/Third" component={Pdf_model3} />
				<Route exact path="/Fourth" component={Pdf_model4} />
				<Route exact path="/fifth" component={Pdf_model5} />








			</Router>




		</div>
	)
}
