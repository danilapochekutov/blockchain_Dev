"use strict";

import header from "./modules/header";
import fullStack from "./modules/full-stack";
import caseStudies from "./modules/case-studies";
import clients from "./modules/clients";
import animation from "./modules/wow";

document.addEventListener("DOMContentLoaded", () => {
	header();
	fullStack();
	caseStudies();
	clients();
	animation();
});
