// import React from "react";
import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";

// Import main site styles as a string to inject into the CMS preview pane
// eslint-disable-next-line import/no-unresolved
import styles from "!to-string-loader!css-loader!postcss-loader!sass-loader!../css/main.css";

import ProgramsPreview from "./cms-preview-templates/programs.js";
import HomePreview from "./cms-preview-templates/home.js";
import AboutPreview from "./cms-preview-templates/about.js";
import GetInvolvedPreview from "./cms-preview-templates/get-involved.js";
import ResourcesPreview from "./cms-preview-templates/resources.js";
import ContactPreview from "./cms-preview-templates/contact.js";
import ContributePreview from "./cms-preview-templates/contribute.js";
import VisionPreview from "./cms-preview-templates/vision.js";

CMS.registerMediaLibrary(uploadcare);
CMS.registerPreviewStyle(styles, {raw: true});
CMS.registerPreviewTemplate("programs", ProgramsPreview);
CMS.registerPreviewTemplate("_index", HomePreview);
CMS.registerPreviewTemplate("about", AboutPreview);
CMS.registerPreviewTemplate("get-involved", GetInvolvedPreview);
CMS.registerPreviewTemplate("resources", ResourcesPreview);
CMS.registerPreviewTemplate("contact", ContactPreview);
CMS.registerPreviewTemplate("contribute", ContributePreview);
CMS.registerPreviewTemplate("vision", VisionPreview);
CMS.init();
