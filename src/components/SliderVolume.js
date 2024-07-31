import React, { useContext } from "react";
import { Context } from "../container/Context";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeUp from "@material-ui/icons/VolumeUp";

function SliderVolume() {
  const { value, switches, handleChangeVolume } = useContext(Context);

  return (
    <div className="sliderVolume">
      <Typography id="continuous-slider" gutterBottom>
        Volume
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <VolumeDown />
        </Grid>
        <Grid item xs>
          <Slider
            value={value}
            onChange={handleChangeVolume}
            aria-labelledby="continuous-slider"
            min={0}
            max={1}
            step={0.01}
            disabled={!switches.powerCheck}
          />
        </Grid>
        <Grid item>
          <VolumeUp />
        </Grid>
      </Grid>
    </div>
  );
}

export default SliderVolume;
