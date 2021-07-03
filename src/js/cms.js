// import React from "react";
import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";

// Import main site styles as a string to inject into the CMS preview pane
// eslint-disable-next-line import/no-unresolved
import styles from "!to-string-loader!css-loader!postcss-loader!sass-loader!../css/main.css";

import HomePreview from "./cms-preview-templates/home.js";
import AboutPreview from "./cms-preview-templates/about.js";
import GetInvolvedPreview from "./cms-preview-templates/get-involved.js";
import ContributePreview from "./cms-preview-templates/contribute.js";

CMS.registerMediaLibrary(uploadcare);
CMS.registerPreviewStyle(styles, {raw: true});
CMS.registerPreviewTemplate("_index", HomePreview);
CMS.registerPreviewTemplate("about", AboutPreview);
CMS.registerPreviewTemplate("get-involved", GetInvolvedPreview);
CMS.registerPreviewTemplate("contribute", ContributePreview);
CMS.init();
