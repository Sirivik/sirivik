// import React from "react";
import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";

// Import main site styles as a string to inject into the CMS preview pane
//import styles from "!to-string-loader!css-loader!postcss-loader!sass-loader!../css/main.css";

import ContributePreview from "./cms-preview-templates/contribute.js";

CMS.registerMediaLibrary(uploadcare);
CMS.registerPreviewStyle("https://sirivik.ca/main.8f443.css");
CMS.registerPreviewTemplate("contribute", ContributePreview);
CMS.init();
