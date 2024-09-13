"use strict";

import header from "./modules/header";
import fullStack from "./modules/full-stack";
import caseStudies from "./modules/case-studies";
import techStack from "./modules/tech-stack";
import clients from "./modules/clients";
import animation from "./modules/wow";

document.addEventListener("DOMContentLoaded", () => {
	header();
	fullStack();
	caseStudies();
	techStack();
	clients();
	animation();
});
