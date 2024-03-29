import SvgIcon from "@mui/material/SvgIcon";
import type { SvgIconTypes } from "./SvgIconType";

const FireIcon: SvgIconTypes = (props) => {
  return (
    <SvgIcon width="32" height="32" viewBox="0 0 32 32" {...props}>
      <rect width="32" height="32" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_0_251" transform="scale(0.0078125)" />
        </pattern>
        <image
          id="image0_0_251"
          width="128"
          height="128"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </SvgIcon>
  );
};

export default FireIcon;
